import React, { useState, useEffect } from "react";
import { RSS_FEEDS } from "../constants";
import { RssArticle } from "../types";

const timeAgo = (dateStr: string) => {
	try {
		const date = new Date(dateStr);
		if (isNaN(date.getTime())) return dateStr;

		const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
		if (seconds < 0) return "just now";

		let interval = seconds / 31536000;
		if (interval > 1) return Math.floor(interval) + "y ago";
		interval = seconds / 2592000;
		if (interval > 1) return Math.floor(interval) + "mo ago";
		interval = seconds / 86400;
		if (interval > 1) return Math.floor(interval) + "d ago";
		interval = seconds / 3600;
		if (interval > 1) return Math.floor(interval) + "h ago";
		interval = seconds / 60;
		if (interval > 1) return Math.floor(interval) + "m ago";
		return Math.floor(seconds) + "s ago";
	} catch (e) {
		return dateStr;
	}
};

const ArticleItem: React.FC<{ article: RssArticle }> = ({ article }) => {
	return (
		<div className="bg-gray-700 p-3 rounded-md transition-colors hover:bg-gray-600">
			<a
				href={article.url}
				target="_blank"
				rel="noopener noreferrer"
				className="text-sm font-semibold text-gray-200 hover:text-cyan-400"
			>
				{article.title}
			</a>

			{article.summary && (
				<p className="text-xs text-gray-300 mt-2 pl-2 border-l-2 border-gray-600 italic">
					{article.summary}
				</p>
			)}

			<div className="flex justify-between items-center mt-2 text-xs text-gray-400">
				<span className="font-medium truncate pr-2">{article.source}</span>
				<div className="flex items-center gap-3 flex-shrink-0">
					<span className="font-mono">{timeAgo(article.publishedDate)}</span>
				</div>
			</div>
		</div>
	);
};

interface NewsFeedProps {
	articles: RssArticle[] | undefined;
	isLoading: boolean;
	error: string | null;
	onRefresh: () => void;
	activeFeedUrls: Set<string>;
	onFeedToggle: (url: string) => void;
}

const NewsFeed: React.FC<NewsFeedProps> = ({
	articles,
	isLoading,
	error,
	onRefresh,
	activeFeedUrls,
	onFeedToggle,
}) => {
	const noFeedsSelected = activeFeedUrls.size === 0;
	const [currentPage, setCurrentPage] = useState(1);
	const articlesPerPage = 10;

	useEffect(() => {
		setCurrentPage(1);
	}, [articles]);

	const indexOfLastArticle = currentPage * articlesPerPage;
	const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
	const currentArticles = articles
		? articles.slice(indexOfFirstArticle, indexOfLastArticle)
		: [];
	const totalPages = articles
		? Math.ceil(articles.length / articlesPerPage)
		: 0;

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<div className="bg-gray-800 rounded-lg shadow-lg p-4 h-full flex flex-col">
			<h2 className="text-xl font-bold text-cyan-400 mb-4 border-b border-gray-700 pb-2">
				Live RSS Feed
			</h2>
			<div className="flex-grow">
				<div className="flex flex-col h-full">
					<div className="mb-4">
						<button
							onClick={onRefresh}
							disabled={isLoading || noFeedsSelected}
							className="w-full bg-cyan-500 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-400 transition duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
						>
							{isLoading ? "Aggregating Feeds..." : "Refresh Feed"}
						</button>
					</div>

					<div
						className="flex-grow space-y-3 overflow-y-auto pr-2"
						style={{ minHeight: "calc(100vh - 300px)" }}
					>
						{isLoading && (!articles || articles.length === 0) && (
							<div className="flex justify-center items-center h-full">
								<div className="text-center">
									<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto"></div>
									<p className="mt-2 text-gray-400">
										Fetching live RSS feeds...
									</p>
								</div>
							</div>
						)}
						{error && <p className="text-red-500 text-center">{error}</p>}
						{!isLoading && (!articles || articles.length === 0) && !error && (
							<p className="text-gray-500 text-center pt-8">
								{noFeedsSelected
									? "No feeds selected. Please enable feeds in the manager below."
									: "Click the button to fetch the latest articles."}
							</p>
						)}
						{articles &&
							currentArticles.map((article, index) => (
								<ArticleItem key={article.url + index} article={article} />
							))}
					</div>

					{totalPages > 1 && (
						<div className="flex justify-between items-center mt-4">
							<button
								onClick={handlePrevPage}
								disabled={currentPage === 1}
								className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-500 transition duration-300 disabled:bg-gray-700 disabled:cursor-not-allowed"
							>
								Previous
							</button>
							<span className="text-gray-400">
								Page {currentPage} of {totalPages}
							</span>
							<button
								onClick={handleNextPage}
								disabled={currentPage === totalPages || totalPages === 0}
								className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-500 transition duration-300 disabled:bg-gray-700 disabled:cursor-not-allowed"
							>
								Next
							</button>
						</div>
					)}

					<div className="mt-4 pt-2 border-t border-gray-700">
						<details className="text-gray-500">
							<summary className="text-sm font-semibold text-gray-400 cursor-pointer hover:text-white">
								Feed Manager ({activeFeedUrls.size} / {RSS_FEEDS.length} active)
							</summary>
							<div className="text-xs space-y-1 mt-2 max-h-48 overflow-y-auto pr-2 bg-gray-900 p-2 rounded-md">
								{RSS_FEEDS.map((feed) => (
									<label
										key={feed.url}
										className="flex items-center space-x-2 cursor-pointer p-1 hover:bg-gray-700 rounded-md"
									>
										<input
											type="checkbox"
											className="form-checkbox h-3 w-3 bg-gray-700 border-gray-600 rounded text-cyan-500 focus:ring-cyan-500"
											checked={activeFeedUrls.has(feed.url)}
											onChange={() => onFeedToggle(feed.url)}
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
						</details>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsFeed;
