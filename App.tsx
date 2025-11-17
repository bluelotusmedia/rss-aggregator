import React, { useState, useEffect, useCallback } from 'react';
import NewsFeed from './components/NewsFeed';
import { fetchAndParseRssFeeds } from './services/rssService';
import { RSS_FEEDS } from './constants';
import { RssArticle } from './types';

const App: React.FC = () => {
  const [refreshInterval, setRefreshInterval] = useState(900000); // Default to 15 mins
  const [articles, setArticles] = useState<RssArticle[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFeedUrls, setActiveFeedUrls] = useState<Set<string>>(
    new Set(RSS_FEEDS.map(feed => feed.url))
  );

  const handleIntervalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRefreshInterval(Number(e.target.value));
  };

  const handleFeedToggle = (url: string) => {
    setActiveFeedUrls(prev => {
      const newSet = new Set(prev);
      if (newSet.has(url)) {
        newSet.delete(url);
      } else {
        newSet.add(url);
      }
      return newSet;
    });
  };

  const fetchArticles = useCallback(async () => {
    if (activeFeedUrls.size === 0) {
      setError("No RSS feeds selected. Please select feeds to monitor.");
      setArticles([]);
      setIsLoading(false);
      return;
    }

    // Only set loading on the initial fetch
    if (!articles) {
        setIsLoading(true);
    }
    setError(null);

    try {
      const feedsToFetch = RSS_FEEDS.filter(feed => activeFeedUrls.has(feed.url));
      const rawArticles = await fetchAndParseRssFeeds(feedsToFetch);
      
      if (rawArticles.length === 0) {
        setError("Could not fetch any articles from the selected RSS feeds.");
        setArticles([]);
      } else {
        setArticles(rawArticles);
      }
    } catch (e: any) {
      console.error(`Error fetching articles:`, e);
      setError(`An error occurred while fetching RSS feeds. Please try again.`);
      setArticles(null);
    } finally {
        setIsLoading(false);
    }
  }, [articles, activeFeedUrls]);

  // Initial data fetch
  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Effect for auto-refresh interval
  useEffect(() => {
    if (refreshInterval > 0) {
      const intervalId = setInterval(() => fetchArticles(), refreshInterval);
      return () => clearInterval(intervalId);
    }
  }, [refreshInterval, fetchArticles]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-4 font-sans">
      <header className="mb-6 flex flex-wrap justify-between items-center gap-4">
        <div>
            <h1 className="text-4xl font-bold text-cyan-400 tracking-tight">RSS Aggregator</h1>
            <p className="text-gray-400 mt-1">Your customizable real-time news feed.</p>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <label htmlFor="refresh-interval" className="text-sm font-medium text-gray-400">Auto-Refresh:</label>
                <select
                    id="refresh-interval"
                    value={refreshInterval}
                    onChange={handleIntervalChange}
                    className="bg-gray-700 border border-gray-600 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                    <option value={0}>Manual</option>
                    <option value={30000}>30 secs</option>
                    <option value={60000}>1 min</option>
                    <option value={300000}>5 mins</option>
                    <option value={900000}>15 mins</option>
                    <option value={1800000}>30 mins</option>
                    <option value={3600000}>1 hour</option>
                </select>
            </div>
        </div>
      </header>

      <main>
        <NewsFeed 
            articles={articles ?? undefined}
            isLoading={isLoading}
            error={error}
            onRefresh={() => fetchArticles()}
            activeFeedUrls={activeFeedUrls}
            onFeedToggle={handleFeedToggle}
        />
      </main>
        <footer className="text-center text-gray-600 mt-8 py-4">
            <p>Data is for informational purposes only.</p>
        </footer>
    </div>
  );
};

export default App;