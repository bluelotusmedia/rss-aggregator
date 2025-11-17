import { RssFeed, RssArticle } from '../types';

// Use a public CORS proxy to fetch RSS feeds from the client-side
const CORS_PROXY = 'https://corsproxy.io/?';

/**
 * Fetches content from multiple RSS feeds, parses the XML, and returns a single,
 * chronologically sorted list of articles.
 * @param feeds An array of RssFeed objects to fetch.
 * @returns A promise that resolves to an array of RssArticle objects.
 */
export const fetchAndParseRssFeeds = async (feeds: RssFeed[]): Promise<RssArticle[]> => {
    const parser = new DOMParser();

    const fetchPromises = feeds.map(async (feed) => {
        try {
            const response = await fetch(`${CORS_PROXY}${encodeURIComponent(feed.url)}`);
            if (!response.ok) {
                console.warn(`Failed to fetch RSS feed: ${feed.name}`, response.status);
                return [];
            }
            const xmlText = await response.text();
            const doc = parser.parseFromString(xmlText, "application/xml");

            const errorNode = doc.querySelector("parsererror");
            if (errorNode) {
                console.warn(`Error parsing XML for feed: ${feed.name}`);
                return [];
            }

            // Handle both RSS <item> and Atom <entry> tags
            const items = Array.from(doc.querySelectorAll("item, entry"));
            
            return items.map(item => {
                const title = item.querySelector("title")?.textContent ?? '';
                // Handle different ways links are provided in RSS/Atom
                const url = item.querySelector("link")?.textContent ?? item.querySelector("link")?.getAttribute('href') ?? '';
                // Handle different date formats
                const pubDateElement = item.querySelector("pubDate, published, updated");
                const publishedDate = pubDateElement ? new Date(pubDateElement.textContent ?? '').toISOString() : new Date().toISOString();

                // Extract summary/description and strip HTML
                const descriptionElement = item.querySelector("description, summary, content");
                let summary = '';
                if (descriptionElement) {
                    const tempDiv = document.createElement('div');
                    // Use textContent to safely parse and remove HTML tags
                    tempDiv.innerHTML = descriptionElement.textContent ?? '';
                    summary = (tempDiv.textContent || tempDiv.innerText || "").trim();
                    // Truncate summary to a reasonable length
                    if (summary.length > 280) {
                        summary = summary.substring(0, 280) + '...';
                    }
                }

                return { title, url, source: feed.name, publishedDate, summary };
            }).filter(item => item.title && item.url && item.url.startsWith('http')); // Ensure item is valid

        } catch (error) {
            console.warn(`Error processing RSS feed ${feed.name}:`, error);
            return [];
        }
    });

    const results = await Promise.allSettled(fetchPromises);
    const allArticles = results
        .filter(result => result.status === 'fulfilled')
        .flatMap(result => (result as PromiseFulfilledResult<RssArticle[]>).value);

    // Remove duplicates based on the article URL
    const uniqueArticles = Array.from(new Map(allArticles.map(item => [item.url, item])).values());
    
    // Sort all articles by date, ensuring the most recent are first
    uniqueArticles.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
    
    return uniqueArticles;
};