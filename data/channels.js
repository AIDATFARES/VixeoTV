export const channelCategories = [
  {
    id: 'sports',
    name: 'Live Sports & Pay-Per-View',
    slug: 'sports',
    icon: 'Trophy',
    description: 'Premier international tournaments, live football, motorsports, basketball, combat events, and major worldwide championships in 60FPS HD & 4K on VixeoTV IPTV.',
    sampleChannels: [
      'Sky Sports Main Event UHD',
      'TNT Sports 1 / 2 / 3 / 4 4K',
      'ESPN & ESPN+ HD',
      'NBC Sports / USA Network',
      'beIN Sports HD',
      'DAZN 1 & DAZN 2 HD',
      'Fox Sports 1 / 2 4K',
      'SuperSport Premier League 4K',
      'Formula 1 Live Stream',
      'UFC Fight Pass Live Events',
      'NBA TV & League Pass',
      'NFL RedZone & Game Pass'
    ]
  },
  {
    id: 'usa-canada',
    name: 'USA & Canada Live Networks',
    slug: 'usa-canada',
    icon: 'Globe',
    description: 'All premier major national networks and regional sports affiliates across the United States and Canada with crystal-clear 1080p and 4K feeds.',
    sampleChannels: [
      'ABC, CBS, NBC, FOX (East/West)',
      'HBO, Cinemax, Showtime 4K',
      'Discovery, History, National Geographic',
      'CNN, Fox News, MSNBC HD',
      'AMC, FX, TBS, TNT',
      'Sportsnet East, Ontario, West, Pacific',
      'TSN 1 to 5 HD (Canada)',
      'CTV, Global TV, CBC Canada'
    ]
  },
  {
    id: 'uk-ireland',
    name: 'United Kingdom & Ireland',
    slug: 'uk-ireland',
    icon: 'Tv',
    description: 'Complete British and Irish broadcast roster with reliable electronic TV guide (EPG) synchronization and crisp digital audio.',
    sampleChannels: [
      'BBC One, Two, Three, Four HD',
      'ITV 1, 2, 3, 4 HD',
      'Channel 4, More4, Film4 HD',
      'Sky Cinema Premiere / Action / Hits',
      'Sky Atlantic, Sky Witness, Sky Max',
      'RTÉ One, RTÉ2 HD (Ireland)',
      'Virgin Media 1, 2, 3',
      'Discovery Channel UK HD'
    ]
  },
  {
    id: 'europe',
    name: 'European Channels (Spain, France, DE, IT)',
    slug: 'europe',
    icon: 'Compass',
    description: 'Expansive European IPTV channels with dedicated high-speed streams for Spain, France, Germany, Italy, Portugal, and Scandinavia.',
    sampleChannels: [
      'Movistar+ LaLiga, Deportes 4K (Spain)',
      'Canal+ Sport & Cinema (France)',
      'Sky Sport Bundesliga 1-10 (Germany)',
      'Sky Sport Uno, Calcio 4K (Italy)',
      'Sport TV 1 to 6 (Portugal)',
      'RAI 1, 2, 3 HD',
      'ZDF, ARD Das Erste HD',
      'TF1, M6, France 2 HD'
    ]
  },
  {
    id: 'latino',
    name: 'Latin America & Caribbean',
    slug: 'latino',
    icon: 'Flame',
    description: 'Vibrant Spanish-language entertainment, telenovelas, live soccer leagues, and regional news from Mexico, Argentina, Colombia, and across the Americas.',
    sampleChannels: [
      'TUDN Mexico & USA HD',
      'Las Estrellas, Azteca 7 & 13',
      'TyC Sports Argentina HD',
      'Caracol & RCN Colombia',
      'Win Sports+ HD',
      'Directv Sports Cono Sur',
      'ESPN Deportes & Fox Deportes',
      'Telefe, El Trece Argentina'
    ]
  },
  {
    id: 'arabic',
    name: 'Arabic & Middle East',
    slug: 'arabic',
    icon: 'Shield',
    description: 'Comprehensive Arabic IPTV broadcasting from the Gulf, North Africa, and the Levant featuring religious, news, entertainment, and beIN Sports networks.',
    sampleChannels: [
      'beIN Sports AFC & MENA 4K',
      'MBC 1, 2, 3, 4, Action, Drama HD',
      'Rotana Cinema, Classic, Khalijiah',
      'Al Jazeera HD & Arabic News',
      'Dubai TV, Abu Dhabi Sports 1-4',
      'SSC Sports Saudi Pro League 4K',
      'Shahid VIP Stream Selection',
      'Al Arabiya News HD'
    ]
  },
  {
    id: 'vod',
    name: 'VOD Movies & Series Catalog',
    slug: 'vod',
    icon: 'Film',
    description: 'Massive, regularly updated library of on-demand movies, blockbuster cinema, trending series, and international cinema in 4K UHD with multi-language audio and subtitles.',
    sampleChannels: [
      'Latest Box Office Cinema in 4K',
      'Action, Thriller & Sci-Fi Collections',
      'Complete Multi-Season Drama Series',
      'Family & Animated Classics',
      'Documentary Features & Docuseries',
      'Multi-Language Subtitle Feeds'
    ]
  }
];

export const channelStats = [
  { value: '4K & FHD', label: 'Ultra High Definition Streams' },
  { value: '50,000+', label: 'Live TV Channels' },
  { value: '200,000+', label: 'VOD Movies & Series' },
  { value: '99.9%', label: 'Infrastructure Server Uptime' }
];

export const playerCategories = [
  { id: 'all', label: 'All Screenshots', count: 14 },
  { id: 'sports', label: '⚽ Live Sports (60FPS)', count: 4 },
  { id: 'movies', label: '🎬 4K Movies & VOD', count: 5 },
  { id: 'live-tv', label: '📺 Live TV & News', count: 5 },
];

export const playerScreenshots = [
  {
    id: 1,
    title: '4K VOD & Netflix Movies Library',
    category: 'movies',
    categoryLabel: '4K Movies & VOD',
    badge: '4K Ultra HD',
    image: '/images/player-gallery/player-screen-1.webp',
    description: 'Over 2,480+ Netflix and 4K cinema releases categorized with IMDB ratings, posters, and instant streaming.'
  },
  {
    id: 2,
    title: 'Live Premier League & Sky Sports Football',
    category: 'sports',
    categoryLabel: 'Live Sports 60FPS',
    badge: 'Sky Sports Football',
    image: '/images/player-gallery/player-screen-3.webp',
    description: 'Ultra-low latency live sports broadcast in Full HD and 4K 60FPS: Premier League, EFL Cup, and Champions League.'
  },
  {
    id: 3,
    title: 'NBA League Pass & Live Basketball',
    category: 'sports',
    categoryLabel: 'Live Sports 60FPS',
    badge: 'NBA League Pass',
    image: '/images/player-gallery/player-screen-8.webp',
    description: 'Every NBA game live with home and away audio feeds, live scoreboard data, and zero stream buffering.'
  },
  {
    id: 4,
    title: 'CNN FHD & Global News Networks',
    category: 'live-tv',
    categoryLabel: 'Live TV & News',
    badge: 'CNN FHD Live',
    image: '/images/player-gallery/player-screen-10.webp',
    description: '24/7 breaking news feeds in crystal-clear Full HD with 7-day electronic program guide schedules.'
  },
  {
    id: 5,
    title: '4K Cinema Blockbusters On-Demand',
    category: 'movies',
    categoryLabel: '4K Movies & VOD',
    badge: '4K Spider-Man',
    image: '/images/player-gallery/player-screen-12.webp',
    description: 'Full player controls, instant timeline scrubbing, multi-audio tracks, and high bitrate 4K video.'
  },
  {
    id: 6,
    title: 'NFL Sunday Ticket & Replays',
    category: 'sports',
    categoryLabel: 'Live Sports 60FPS',
    badge: 'NFL Package',
    image: '/images/player-gallery/player-screen-6.webp',
    description: 'Comprehensive American Football packages with game replays, NFL RedZone, and dedicated franchise channels.'
  },
  {
    id: 7,
    title: 'NBC Network & US Local Affiliates',
    category: 'live-tv',
    categoryLabel: 'Live TV & News',
    badge: 'NBC Network',
    image: '/images/player-gallery/player-screen-5.webp',
    description: 'Over 240+ regional NBC, CBS, ABC, and FOX stations with instant channel zapping and EPG info.'
  },
  {
    id: 8,
    title: 'Major League Baseball (MLB Package)',
    category: 'sports',
    categoryLabel: 'Live Sports 60FPS',
    badge: 'MLB Package',
    image: '/images/player-gallery/player-screen-7.webp',
    description: 'Complete MLB baseball season coverage with high-frame-rate action tracking and crystal-clear picture.'
  },
  {
    id: 9,
    title: 'Action & Thriller Cinema Playback',
    category: 'movies',
    categoryLabel: '4K Movies & VOD',
    badge: 'VOD Player',
    image: '/images/player-gallery/player-screen-11.webp',
    description: 'Extensive on-demand thriller and action library featuring smooth playback and resume points.'
  },
  {
    id: 10,
    title: 'CBS News & Prime Time Broadcasts',
    category: 'live-tv',
    categoryLabel: 'Live TV & News',
    badge: 'CBS Network',
    image: '/images/player-gallery/player-screen-4.webp',
    description: 'Regional US news stations and prime-time drama series broadcast live without geo-restrictions.'
  },
  {
    id: 11,
    title: 'Raw 60FPS Live US TV Feeds',
    category: 'live-tv',
    categoryLabel: 'Live TV & News',
    badge: 'Raw 60FPS',
    image: '/images/player-gallery/player-screen-2.webp',
    description: 'Uncompressed raw video streams providing the highest available bitrates for OLED and large 4K TVs.'
  },
  {
    id: 12,
    title: 'Family & Animated Movies On-Demand',
    category: 'movies',
    categoryLabel: '4K Movies & VOD',
    badge: 'Apple+ Kids',
    image: '/images/player-gallery/player-screen-13.webp',
    description: 'Family-friendly animated features, cartoons, and child-safe entertainment with crystal audio.'
  },
  {
    id: 13,
    title: '2026 Trending Cinema Releases',
    category: 'movies',
    categoryLabel: '4K Movies & VOD',
    badge: 'New 2026',
    image: '/images/player-gallery/player-screen-14.webp',
    description: 'Daily-updated catalog of latest theatre and streaming platform releases in Ultra High Definition.'
  },
  {
    id: 14,
    title: 'Prime Time Entertainment & Drama',
    category: 'live-tv',
    categoryLabel: 'Live TV & News',
    badge: 'US Entertainment',
    image: '/images/player-gallery/player-screen-9.webp',
    description: 'Live US news, prime time evening series, and entertainment channels in 1080p Full HD.'
  }
];
