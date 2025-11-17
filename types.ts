export interface RssFeed {
  name: string;
  url: string;
}

export interface RssFeedCategory {
  name: string;
  feeds: RssFeed[];
}

export interface RssArticle {
  title: string;
  url: string;
  source: string;
  publishedDate: string; // ISO 8601 format
  summary?: string;
}