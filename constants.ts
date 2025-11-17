import { RssFeed } from './types';

export const RSS_FEEDS: RssFeed[] = [
  // === Top-Tier Global Financial News ===
  { name: 'WSJ: Markets', url: 'https://feeds.a.dj.com/rss/RSSMarketsMain.xml' },
  { name: 'WSJ: World News', url: 'https://feeds.a.dj.com/rss/RSSWorldNews.xml' },
  { name: 'Bloomberg: Markets', url: 'https://feeds.bloomberg.com/markets/news.rss' },
  { name: 'Bloomberg: Technology', url: 'https://feeds.bloomberg.com/technology/news.rss' },
  { name: 'Bloomberg: Politics', url: 'https://feeds.bloomberg.com/politics/news.rss' },
  { name: 'Financial Times: World', url: 'https://www.ft.com/world?format=rss' },
  { name: 'Financial Times: US', url: 'https://www.ft.com/us?format=rss' },
  { name: 'Financial Times: Markets', url: 'https://www.ft.com/markets?format=rss' },
  { name: 'CNBC: Top News', url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html' },
  { name: 'CNBC: Markets', url: 'https://www.cnbc.com/id/10000664/device/rss/rss.html' },
  { name: 'The Economist: Business & Finance', url: 'https://www.economist.com/finance-and-economics/rss.xml' },

  // === U.S. Regulators & Economic Data ===
  { name: 'SEC: Press Releases', url: 'https://www.sec.gov/news/pressreleases.rss' },
  { name: 'SEC: EDGAR Filings', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&CIK=&type=&company=&dateb=&owner=include&start=0&count=40&output=atom' },
  { name: 'Federal Reserve: Press Releases', url: 'https://www.federalreserve.gov/feeds/press_all.xml' },
  { name: 'St. Louis Fed (FRED) Blog', url: 'https://fredblog.stlouisfed.org/feed/' },
  { name: 'CFTC: Press Releases', url: 'https://www.cftc.gov/rss.xml' },
  { name: 'FINRA: News', url: 'https://www.finra.org/media-center/newsreleases/rss' },
  { name: 'CME Group Press', url: 'https://feeds.feedburner.com/mediaroom/CMsF' },
  { name: 'CME Group News', url: 'https://investor.cmegroup.com/rss/news-releases.xml' },
  { name: 'CME Group SEC Filings', url: 'https://investor.cmegroup.com/rss/sec-filings.xml' },
  { name: 'CME Group Events', url: 'https://investor.cmegroup.com/rss/events.xml' },

  // === Market Analysis & Specialty ===
  { name: 'MarketWatch: Top Stories', url: 'http://feeds.marketwatch.com/marketwatch/topstories/' },
  { name: "Investor's Business Daily", url: 'https://www.investors.com/feed/' },
  { name: 'Seeking Alpha: Transcripts', url: 'https://seekingalpha.com/sector/transcripts.xml' },
  { name: 'CBOE Insights', url: 'https://www.cboe.com/insights/rss/' },
  { name: 'Yahoo Finance', url: 'https://finance.yahoo.com/rss/' },
  { name: 'Dealbreaker', url: 'https://dealbreaker.com/feed' },

  // === Influential Blogs ===
  { name: 'The Big Picture (Ritholtz)', url: 'https://ritholtz.com/feed/' },
  { name: 'A Wealth of Common Sense', url: 'https://awealthofcommonsense.com/feed/' },
  { name: 'The Reformed Broker (Josh Brown)', url: 'https://thereformedbroker.com/feed/' },
  { name: 'Calculated Risk Blog', url: 'http://feeds.feedburner.com/CalculatedRisk' },
  { name: 'Financial Samurai', url: 'https://www.financialsamurai.com/feed/' },
  { name: 'Of Dollars And Data (Nick Maggiulli)', url: 'https://ofdollarsanddata.com/feed/' },
  { name: 'Pragmatic Capitalism', url: 'https://www.pragcap.com/feed/' },
  { name: 'FT: Alphaville', url: 'https://ft.com/alphaville?format=rss' },
  { name: 'Wolf Street', url: 'https://wolfstreet.com/feed/' },

  // === Hedge Funds / Private Equity ===
  { name: 'HedgeWeek', url: 'https://www.hedgeweek.com/feed/' },
  { name: 'Private Equity International', url: 'https://www.privateequityinternational.com/feed/' },

  // === Venture Capital & Startups ===
  { name: 'TechCrunch', url: 'https://techcrunch.com/feed/' },
  { name: 'Wired: Business', url: 'https://www.wired.com/feed/category/business/latest/rss' },
  { name: 'Stratechery by Ben Thompson', url: 'https://stratechery.com/feed/' },
  { name: 'AVC (Fred Wilson)', url: 'http://feeds.feedburner.com/avc' },
  { name: 'CB Insights', url: 'https://www.cbinsights.com/research/feed/' },

  // === Cryptocurrency News ===
  { name: 'CoinDesk', url: 'https://www.coindesk.com/arc/outboundfeeds/rss/' },
  { name: 'CoinTelegraph', url: 'https://cointelegraph.com/rss' },
  { name: 'The Block', url: 'https://www.theblock.co/rss.xml' },
  { name: 'Decrypt', url: 'https://decrypt.co/feed' },
  { name: 'Blockworks', url: 'https://blockworks.co/feed' },
  { name: 'The Defiant', url: 'https://thedefiant.io/feed' },
  { name: 'DL News', url: 'https://www.dlnews.com/arc/outboundfeeds/rss/' },

  // === Commodities & Energy ===
  { name: 'OilPrice.com', url: 'https://oilprice.com/rss/main' },
  { name: 'Mining.com', url: 'https://www.mining.com/feed/' },
  { name: 'U.S. Energy Info Admin (EIA)', url: 'https://www.eia.gov/rss/todayinenergy.xml' },

  // === International Markets & Global Macro ===
  { name: 'Bank of England: News', url: 'https://www.bankofengland.co.uk/rss/news' },
  { name: 'Euronext News', url: 'https://live.euronext.com/en/rss/news-and-insights' },
  { name: 'Der Spiegel: International', url: 'https://www.spiegel.de/international/index.rss' },
  { name: 'Le Monde: International', url: 'https://www.lemonde.fr/rss/en_continu.xml' },

  // === Specific Sectors ===
  { name: 'STAT News (Biotech/Health)', url: 'https://www.statnews.com/feed/' },
  { name: 'Fierce Pharma', url: 'https://www.fiercepharma.com/rss/xml' },
  { name: 'Reuters: Health', url: 'https://feeds.reuters.com/reuters/healthNews' },
  { name: 'Ad Age', url: 'https://adage.com/rss.xml' }, // Advertising & Marketing
  { name: 'The Real Deal (Real Estate)', url: 'https://therealdeal.com/feed/' },
  { name: 'Supply Chain Dive', url: 'https://www.supplychaindive.com/feeds/news/' },
  { name: 'Retail Dive', url: 'https://www.retaildive.com/feeds/news/' },

  // === ADDITIONAL FEEDS (EXPANDED LIST) ===

  // === More Top-Tier News Outlets ===
  { name: 'Reuters: Top News', url: 'http://feeds.reuters.com/reuters/topNews' },
  { name: 'Reuters: Company News', url: 'http://feeds.reuters.com/reuters/companyNews' },
  { name: 'Reuters: Deals', url: 'https://feeds.reuters.com/reuters/deals' },
  { name: 'Reuters: Financials', url: 'https://feeds.reuters.com/news/wealth' },
  { name: 'WSJ: Tech', url: 'https://feeds.a.dj.com/rss/RSSWSJD.xml' },
  { name: 'WSJ: Opinion', url: 'https://feeds.a.dj.com/rss/RSSOpinion.xml' },
  { name: 'WSJ: U.S. Business', url: 'https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml' },
  { name: 'Bloomberg: Deals', url: 'https://feeds.bloomberg.com/deals/news.rss' },
  { name: 'Bloomberg: Economics', url: 'https://feeds.bloomberg.com/economics/news.rss' },
  { name: 'Bloomberg: Energy', url: 'https://www.bloomberg.com/energy/feed/rss/' },
  { name: 'Bloomberg: Wealth', url: 'https://www.bloomberg.com/wealth/feed/rss/' },
  { name: 'Business Insider', url: 'https://feeds.businessinsider.com/custom/all' },
  { name: 'Forbes: Business', url: 'https://www.forbes.com/business/feed/' },
  { name: 'Fortune', url: 'https://fortune.com/feed/' },
  { name: 'Fast Company', url: 'https://www.fastcompany.com/rss' },
  { name: 'Quartz', url: 'https://qz.com/feed/' },
  { name: 'Puck News', url: 'https://puck.news/feed/' },
  { name: 'Semafor', url: 'https://www.semafor.com/feed' },
  { name: 'UPI: Business', url: 'https://www.upi.com/rss/business-news.rss' },
  
  // === Think Tanks & Economic Research ===
  { name: 'NBER', url: 'https://www.nber.org/rss/new.xml' },
  { name: 'Brookings Institution: Economics', url: 'https://www.brookings.edu/topic/economics/feed/' },
  { name: 'Cato Institute', url: 'https://www.cato.org/rss/all' },
  { name: 'American Enterprise Institute (AEI)', url: 'https://www.aei.org/feed/' },
  { name: 'Mises Institute', url: 'https://mises.org/feed' },
  { name: 'Center on Budget and Policy (CBPP)', url: 'https://www.cbpp.org/rss.xml' },
  { name: 'Economic Policy Institute (EPI)', url: 'https://www.epi.org/feed/' },
  { name: 'Mercatus Center', url: 'https://www.mercatus.org/rss.xml' },
  { name: 'RAND: Economy & Income', url: 'https://www.rand.org/topics/economy-and-income.rss' },
  { name: 'Urban Institute', url: 'https://www.urban.org/rss.xml' },

  // === International Organizations ===
  { name: 'Bank for International Settlements (BIS)', url: 'https://www.bis.org/doclist/rss_cbspeeches.xml' },
  { name: 'OECD News', url: 'https://www.oecd.org/feeds/news/' },
  { name: 'World Economic Forum (WEF)', url: 'https://www.weforum.org/feed' },
  { name: 'Asian Development Bank (ADB)', url: 'https://www.adb.org/news/rss' },
  
  // === More U.S. Regulators & Agencies ===
  { name: 'SEC: Speeches', url: 'https://www.sec.gov/news/speeches.rss' },
  { name: 'SEC: Testimony', url: 'https://www.sec.gov/news/testimony.rss' },
  { name: 'Federal Reserve: Speeches', url: 'https://www.federalreserve.gov/feeds/speeches.xml' },
  { name: 'FTC Press Releases', url: 'https://www.ftc.gov/news-events/press-releases/feed' },
  { name: 'CFPB Newsroom', url: 'https://www.consumerfinance.gov/about-us/newsroom/feed/' },
  { name: 'OCC News', url: 'https://www.occ.gov/news-issuances/news-releases/rss-occ-news.xml' },
  { name: 'FDIC News', url: 'https://www.fdic.gov/news/press-releases/rss/FDICPR.xml' },
  { name: 'U.S. Census Bureau: Press Releases', url: 'https://www.census.gov/content/census/en/newsroom/press-releases.feed.rss.xml' },
  { name: 'U.S. Dept of Commerce: Press Releases', url: 'https://www.commerce.gov/news/press-releases/rss.xml' },

  // === U.S. Regional Federal Reserve Banks ===
  { name: 'New York Fed', url: 'https://www.newyorkfed.org/rss/all' },
  { name: 'Chicago Fed', url: 'https://www.chicagofed.org/utilities/rss/all-content' },
  { name: 'San Francisco Fed', url: 'https://www.frbsf.org/our-district/press/press-releases/feed.xml' },
  { name: 'Atlanta Fed', url: 'https://www.atlantafed.org/rss/all.xml' },
  { name: 'Dallas Fed', url: 'https://www.dallasfed.org/feeds/dallasfed.aspx' },
  { name: 'Philadelphia Fed', url: 'https://www.philadelphiafed.org/rss/philadelphia-fed.xml' },
  { name: 'Boston Fed', url: 'https://www.bostonfed.org/rss/newsandevents.xml' },
  { name: 'Kansas City Fed', url: 'https://www.kansascityfed.org/rss/' },
  { name: 'Cleveland Fed', url: 'https://www.clevelandfed.org/feeds/all-content' },
  { name: 'Richmond Fed', url: 'https://www.richmondfed.org/feeds/all_content' },

  // === International Central Banks & Regulators ===
  { name: 'Bank of Canada Publications', url: 'https://www.bankofcanada.ca/valet/rss/publications' },
  { name: 'Reserve Bank of Australia', url: 'https://www.rba.gov.au/rss/rss-media-releases.xml' },
  { name: 'Bank of Japan', url: 'https://www.boj.or.jp/en/rss/whatsnew.rdf' },
  { name: 'FCA (UK)', url: 'https://www.fca.org.uk/feeds/news.rss' },
  { name: 'ESMA (EU)', url: 'https://www.esma.europa.eu/press-news/esma-news/feed' },

  // === Broader International News ===
  { name: 'Globe and Mail: Business (Canada)', url: 'https://www.theglobeandmail.com/business/rss/' },
  { name: 'Handelsblatt (Germany)', url: 'https://www.handelsblatt.com/english/rss' },
  { name: 'The Guardian: Business (UK)', url: 'https://www.theguardian.com/business/rss' },
  { name: 'The Telegraph: Business (UK)', url: 'https://www.telegraph.co.uk/business/rss.xml' },
  { name: 'Sky News: Business (UK)', url: 'http://feeds.skynews.com/feeds/rss/business.xml' },
  { name: 'The Economic Times (India)', url: 'https://economictimes.indiatimes.com/rssfeedstopstories.cms' },
  { name: 'Livemint (India)', url: 'https://www.livemint.com/rss/news' },
  { name: 'Australian Financial Review', url: 'https://www.afr.com/rss' },
  { name: 'Straits Times: Business (Singapore)', url: 'https://www.straitstimes.com/news/business/rss.xml' },
  { name: 'Japan Times: Business', url: 'https://www.japantimes.co.jp/news_category/business/feed/' },
  { name: 'China Daily: Business', url: 'http://www.chinadaily.com.cn/rss/biz_rss.xml' },
  { name: 'Moscow Times: Business', url: 'https://www.themoscowtimes.com/rss/business' },
  { name: 'Al Jazeera: Business', url: 'https://www.aljazeera.com/xml/rss/Business.xml' },
  { name: 'African Business', url: 'https://african.business/feed' },

  // === Major Asset Managers ===
  { name: 'PIMCO Blog', url: 'https://blog.pimco.com/en/feed' },
  { name: 'BlackRock Blog', url: 'https://www.blackrock.com/us/individual/insights/blackrock-blog/rss.xml' },
  { name: 'Goldman Sachs Insights', url: 'https://www.goldmansachs.com/insights/rss/feed.xml' },
  { name: 'Morgan Stanley Insights', url: 'https://www.morganstanley.com/im/rss/publication.xml' },
  { name: 'Vanguard Blog', url: 'https://investor.vanguard.com/insights/feed' },

  // === Niche & Sector-Specific News ===
  { name: 'ProPublica', url: 'https://www.propublica.org/feeds/propublica/main' },
  { name: 'Automotive News', url: 'https://www.autonews.com/rss' },
  { name: 'FlightGlobal', url: 'https://www.flightglobal.com/rss' },
  { name: 'Defense News', url: 'https://www.defensenews.com/arc/outboundfeeds/rss/' },
  { name: 'gCaptain (Maritime)', url: 'https://gcaptain.com/feed/' },
  { name: 'Hellenic Shipping News', url: 'https://www.hellenicshippingnews.com/feed/' },
  { name: 'Insurance Journal', url: 'https://www.insurancejournal.com/news/national/feed/' },
  { name: 'Law360: Banking', url: 'https://www.law360.com/banking/rss' },
  { name: 'Above the Law', url: 'https://abovethelaw.com/feed/' },
  { name: 'Variety: Business', url: 'https://variety.com/v/biz/feed/' },
  { name: 'Hollywood Reporter: Business', url: 'https://www.hollywoodreporter.com/c/business/feed/' },
  { name: 'DTN (Agriculture)', url: 'https://www.dtnpf.com/agriculture/web/ag/news?get-rss-feed=true' },
  { name: 'Krebs on Security', url: 'https://krebsonsecurity.com/feed/' },
  { name: 'Finextra (Fintech)', url: 'https://www.finextra.com/rss/headlines.aspx' },
  { name: 'ESG Today', url: 'https://www.esgtoday.com/feed/' },
  { name: 'GamesIndustry.biz', url: 'https://www.gamesindustry.biz/rss/gamesindustry.rss' },
  { name: 'SpaceNews', url: 'https://spacenews.com/feed/' },
  { name: 'AgFunderNews (AgriTech)', url: 'https://agfundernews.com/feed' },
  { name: 'Skift (Travel)', url: 'https://skift.com/feed/' },
  { name: 'Axios: Science', url: 'https://api.axios.com/feed/science' },
  { name: 'Axios: What\'s Next', url: 'https://api.axios.com/feed/whats-next' },
  { name: 'The Verge', url: 'https://www.theverge.com/rss/index.xml' },
  { name: 'HousingWire', url: 'https://www.housingwire.com/feed/' },
  { name: 'Transport Topics', url: 'https://www.ttnews.com/rss.xml' },

  // === More Influential Blogs & Analysis ===
  { name: 'The Motley Fool', url: 'https://www.fool.com/a/feeds/foolwatch' },
  { name: 'Zacks Research', url: 'https://www.zacks.com/rss/index.php?feed=articles_all&format=xml' },
  { name: 'Bespoke Investment Group', url: 'https://www.bespokepremium.com/feed/' },
  { name: 'Real Vision', url: 'https://www.realvision.com/rss' },
  { name: 'Finimize', url: 'https://www.finimize.com/feed/' },
  { name: 'MishTalk', url: 'https://mishtalk.com/feed/' },
  { name: 'The Irrelevant Investor', url: 'https://theirrelevantinvestor.com/feed/' },
  { name: 'Farnam Street', url: 'https://fs.blog/feed/' },
  { name: 'Abnormal Returns', url: 'https://abnormalreturns.com/feed' },
  { name: 'FT: Martin Wolf', url: 'https://www.ft.com/stream/authorsId/Q0ItMDAwMDQ5OA==-QXV0aG9ycw?format=rss' },
  { name: 'NYT: DealBook', url: 'https://www.nytimes.com/svc/collections/v1/publish/http://www.nytimes.com/column/dealbook/rss.xml' },
  { name: 'Meb Faber Blog', url: 'https://mebfaber.com/feed/' },
  { name: 'Noahpinion', url: 'https://www.noahpinion.blog/feed' },
  { name: 'Kyla Scanlon', url: 'https://kyla.substack.com/feed' },
  { name: 'Vitalik Buterin', url: 'https://vitalik.eth.limo/feed.xml' },

  // === More Crypto Feeds ===
  { name: 'Messari', url: 'https://messari.io/rss' },
  
  // === Financial & Economic Podcasts ===
  { name: 'NPR: The Indicator', url: 'https://www.npr.org/rss/podcast.php?id=510325' },
  { name: 'Freakonomics Radio', url: 'http://feeds.feedburner.com/freakonomicsradio' },
  { name: 'Animal Spirits Podcast', url: 'https://animalspiritspod.libsyn.com/rss' },
  { name: 'Invest Like the Best Podcast', url: 'http://investlikethebest.libsyn.com/rss' },
  { name: 'Unchained Podcast', url: 'https://unchainedpodcast.com/feed/' },
];