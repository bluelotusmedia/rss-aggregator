import React, { useState, useEffect, useCallback, useRef } from 'react';
import NewsFeed from './components/NewsFeed';
import { fetchAndParseRssFeeds } from './services/rssService';
import { RSS_FEEDS } from './constants';
import { RssArticle, RssFeed } from './types';

const App: React.FC = () => {
  const [refreshInterval, setRefreshInterval] = useState(900000); // Default to 15 mins
  const [articles, setArticles] = useState<RssArticle[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFeedUrls, setActiveFeedUrls] = useState<Set<string>>(
    new Set(RSS_FEEDS.flatMap(category => category.feeds).map(feed => feed.url))
  );
  const [searchTerm, setSearchTerm] = useState('');
  const isInitialLoad = useRef(true);

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

  const handleCategoryToggle = (feeds: RssFeed[]) => {
    const feedUrls = feeds.map(feed => feed.url);
    const allSelected = feedUrls.every(url => activeFeedUrls.has(url));

    setActiveFeedUrls(prev => {
      const newSet = new Set(prev);
      if (allSelected) {
        feedUrls.forEach(url => newSet.delete(url));
      } else {
        feedUrls.forEach(url => newSet.add(url));
      }
      return newSet;
    });
  };

  const filteredFeedCategories = RSS_FEEDS.map(category => ({
    ...category,
    feeds: category.feeds.filter(feed =>
      feed.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter(category => category.feeds.length > 0);

  const handleSelectAll = () => {
    const allFilteredUrls = filteredFeedCategories.flatMap(category => category.feeds.map(feed => feed.url));
    setActiveFeedUrls(new Set(allFilteredUrls));
  };

  const handleDeselectAll = () => {
    setActiveFeedUrls(new Set());
  };

  const fetchArticles = useCallback(async () => {
    if (activeFeedUrls.size === 0) {
      setError("No RSS feeds selected. Please select feeds to monitor.");
      setArticles([]);
      setIsLoading(false);
      return;
    }

    if (isInitialLoad.current) {
        setIsLoading(true);
    }
    setError(null);

    try {
      const allFeeds = RSS_FEEDS.flatMap(category => category.feeds);
      const feedsToFetch = allFeeds.filter(feed => activeFeedUrls.has(feed.url));
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
        if (isInitialLoad.current) {
            isInitialLoad.current = false;
        }
    }
  }, [activeFeedUrls]);

  // Initial data fetch
  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

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

      <main className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="md:col-span-1 bg-gray-800 rounded-lg shadow-lg p-4 h-full">
          <h2 className="text-xl font-bold text-cyan-400 mb-4 border-b border-gray-700 pb-2">
            Feed Manager
          </h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Filter feeds..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="flex gap-2 mb-4">
            <button
              onClick={handleSelectAll}
              className="flex-1 bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-500 transition duration-300 text-xs"
            >
              Select All
            </button>
            <button
              onClick={handleDeselectAll}
              className="flex-1 bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-500 transition duration-300 text-xs"
            >
              Deselect All
            </button>
          </div>
          <div className="text-xs space-y-1 mt-2 max-h-[calc(100vh-300px)] overflow-y-auto pr-2 bg-gray-900 p-2 rounded-md">
            {filteredFeedCategories.map((category) => (
              <div key={category.name} className="mb-2">
                <h3
                  className="text-sm font-bold text-cyan-400 cursor-pointer mb-1"
                  onClick={() => handleCategoryToggle(category.feeds)}
                >
                  {category.name}
                </h3>
                {category.feeds.map((feed) => (
                  <label
                    key={feed.url}
                    className="flex items-center space-x-2 cursor-pointer p-1 hover:bg-gray-700 rounded-md"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-3 w-3 bg-gray-700 border-gray-600 rounded text-cyan-500 focus:ring-cyan-500"
                      checked={activeFeedUrls.has(feed.url)}
                      onChange={() => handleFeedToggle(feed.url)}
                    />
                    <span
                      className={
                        activeFeedUrls.has(feed.url)
                          ? "text-gray-200"
                          : "text-gray-500"
                      }
                    >
                      {feed.name}
                    </span>
                  </label>
                ))}
              </div>
            ))}
          </div>
        </aside>
        <div className="md:col-span-3">
          <NewsFeed 
              articles={articles ?? undefined}
              isLoading={isLoading}
              error={error}
              onRefresh={() => fetchArticles()}
              noFeedsSelected={activeFeedUrls.size === 0}
          />
        </div>
      </main>
        <footer className="text-center text-gray-600 mt-8 py-4">
            <p>Data is for informational purposes only.</p>
        </footer>
    </div>
  );
};

export default App;