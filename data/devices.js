export const supportedDevices = [
  {
    id: 'firestick',
    slug: 'firestick',
    name: 'Amazon Firestick & Fire TV',
    shortName: 'Firestick',
    category: 'Streaming Sticks',
    highlightBadge: '#1 Most Popular for IPTV',
    badgeColor: 'amber',
    recommendedApps: ['IPTV Smarters Pro', 'TiviMate', 'XCIPTV', 'Downloader'],
    appDetails: [
      { name: 'TiviMate', role: 'Best Modern UI & EPG', rating: '4.9★', store: 'Downloader Code' },
      { name: 'IPTV Smarters Pro', role: 'Zero Config Setup', rating: '4.8★', store: 'Downloader Code' },
      { name: 'XCIPTV Player', role: 'Lightweight & Fast', rating: '4.7★', store: 'Downloader Code' }
    ],
    setupTime: '3-5 Minutes',
    difficulty: 'Very Easy',
    osVersion: 'Fire OS 6, 7 & 8 (All 4K & HD models)',
    streamQuality: '4K UHD @ 60 FPS • Dolby Audio',
    shortDesc: 'The undisputed #1 streaming device for IPTV. Fast sideloading via the Downloader app in under 3 minutes.',
    fullDesc: 'Amazon Fire TV Stick 4K Max, Fire TV Cube, and Lite models provide flawless hardware-accelerated playback for VixeoTV. Enjoy ultra-smooth 60FPS football, PPV events, and 4K cinema without stutter.',
    keyFeatures: [
      'Zero PC or jailbreaking required — install via official Downloader',
      'Hardware H.265/HEVC decoding for buffer-free 4K playback',
      'Full Alexa voice remote and electronic program guide integration'
    ],
    previewImage: '/images/channel-sports-soccer.jpg',
    previewTitle: 'Premier League Live in 4K',
    icon: 'Flame',
    popular: true,
    setupUrl: '/setup/firestick'
  },
  {
    id: 'samsung-smart-tv',
    slug: 'samsung-smart-tv',
    name: 'Samsung Smart TV (Tizen)',
    shortName: 'Samsung TV',
    category: 'Smart TVs',
    highlightBadge: 'Zero Hardware Required',
    badgeColor: 'cyan',
    recommendedApps: ['IBO Player', 'Smart IPTV', 'Nanomid Player', 'Flix IPTV'],
    appDetails: [
      { name: 'IBO Player', role: 'Top Pick for Tizen', rating: '4.9★', store: 'Samsung App Store' },
      { name: 'Smart IPTV', role: 'Classic MAC Playlist', rating: '4.7★', store: 'Samsung App Store' },
      { name: 'Nanomid Player', role: 'Fast Zapping', rating: '4.6★', store: 'Samsung App Store' }
    ],
    setupTime: '5 Minutes',
    difficulty: 'Easy',
    osVersion: 'Samsung Tizen OS (2018–2026 models)',
    streamQuality: '4K HDR10+ • Dolby Digital',
    shortDesc: 'Stream directly on your living room Samsung TV without purchasing external dongles or extra cables.',
    fullDesc: 'Samsung Smart TVs running Tizen OS have verified IPTV players directly in the official Samsung App Store. Simply download your preferred player and upload your VixeoTV portal details.',
    keyFeatures: [
      'No HDMI sticks or external power cords cluttering your TV wall',
      'Uses your standard Samsung One Remote for channel zapping',
      'Crystal-clear 4K HDR10+ optimization for QLED and Neo QLED panels'
    ],
    previewImage: '/images/hero-sports.jpg',
    previewTitle: 'Formula 1 Grand Prix 4K Live',
    icon: 'Monitor',
    popular: true,
    setupUrl: '/setup/samsung-smart-tv'
  },
  {
    id: 'lg-smart-tv',
    slug: 'lg-smart-tv',
    name: 'LG Smart TV (webOS)',
    shortName: 'LG OLED / webOS',
    category: 'Smart TVs',
    highlightBadge: 'Native webOS Store Apps',
    badgeColor: 'purple',
    recommendedApps: ['IBO Player', 'Smart IPTV', 'SS IPTV', 'Room IPTV'],
    appDetails: [
      { name: 'IBO Player', role: 'Ultra-Fast Loading', rating: '4.9★', store: 'LG Content Store' },
      { name: 'Smart IPTV', role: 'High Compatibility', rating: '4.7★', store: 'LG Content Store' },
      { name: 'SS IPTV', role: 'Free Alternative', rating: '4.5★', store: 'LG Content Store' }
    ],
    setupTime: '5 Minutes',
    difficulty: 'Easy',
    osVersion: 'LG webOS 4.0 to webOS 24 (OLED, QNED, NanoCell)',
    streamQuality: '4K Dolby Vision • Atmos',
    shortDesc: 'Download top rated IPTV players straight from the official LG Content Store using your Magic Remote.',
    fullDesc: 'Experience breathtaking colors on LG OLED and QNED displays. VixeoTV streams sync seamlessly with webOS media players for lag-free 4K cinema and live international sports.',
    keyFeatures: [
      'Direct installation from LG Content Store in 3 clicks',
      'Full Magic Remote air-mouse pointer and scroll-wheel navigation',
      'True blacks and high bitrate 4K HDR support with zero compression artifacts'
    ],
    previewImage: '/images/channel-cinema-action.jpg',
    previewTitle: 'Blockbuster 4K UHD Movies',
    icon: 'MonitorSmartphone',
    popular: true,
    setupUrl: '/setup/lg-smart-tv'
  },
  {
    id: 'android-tv',
    slug: 'android-tv',
    name: 'Android TV & Google TV',
    shortName: 'Google TV',
    category: 'Smart TVs & Boxes',
    highlightBadge: 'Google Play 1-Tap Install',
    badgeColor: 'emerald',
    recommendedApps: ['TiviMate', 'IPTV Smarters Pro', 'Televizo', 'Sparkle TV'],
    appDetails: [
      { name: 'TiviMate', role: '#1 Premium IPTV Player', rating: '4.9★', store: 'Google Play Store' },
      { name: 'IPTV Smarters Pro', role: 'Xtream Codes Ready', rating: '4.8★', store: 'Google Play Store' },
      { name: 'Televizo', role: 'Smooth Channel Guide', rating: '4.7★', store: 'Google Play Store' }
    ],
    setupTime: '3 Minutes',
    difficulty: 'Very Easy',
    osVersion: 'Android TV 9.0 to 14 / Google TV (Sony, TCL, Shield, Chromecast)',
    streamQuality: '4K UHD @ 60 FPS • Dolby Atmos',
    shortDesc: 'One-click installation directly from the Google Play Store on Sony, TCL, Nvidia Shield, and Chromecast.',
    fullDesc: 'Android TV is considered the gold standard for IPTV power users. With unmatched hardware decoding and apps like TiviMate, you get a buttery smooth electronic TV guide and multi-screen viewing.',
    keyFeatures: [
      'Official Google Play Store verified security and 1-tap updates',
      'Multi-view / split-screen support on Nvidia Shield & top boxes',
      'Blazing fast channel switching (under 0.5s zapping time)'
    ],
    previewImage: '/images/channel-sports-f1.jpg',
    previewTitle: 'UFC & Championship Boxing 4K',
    icon: 'Tv',
    popular: true,
    setupUrl: '/setup/android-tv'
  },
  {
    id: 'apple-tv',
    slug: 'apple-tv',
    name: 'Apple TV 4K, iPhone & iPad',
    shortName: 'Apple Ecosystem',
    category: 'Apple Ecosystem',
    highlightBadge: 'Silky 60FPS & iCloud Sync',
    badgeColor: 'cyan',
    recommendedApps: ['UHF', 'Smarters Player Lite', 'iPlayTV', 'GSE Smart IPTV'],
    appDetails: [
      { name: 'UHF Player', role: 'Best Apple Design Award Style', rating: '4.9★', store: 'App Store' },
      { name: 'Smarters Player Lite', role: 'Simple & Reliable', rating: '4.8★', store: 'App Store' },
      { name: 'iPlayTV', role: 'Apple TV 4K Specialist', rating: '4.8★', store: 'tvOS App Store' }
    ],
    setupTime: '3 Minutes',
    difficulty: 'Very Easy',
    osVersion: 'tvOS 15–18, iOS 15–18, iPadOS (Apple TV 4K, iPhone 12–16, iPad)',
    streamQuality: '4K HDR / Dolby Vision @ 60 FPS',
    shortDesc: 'Experience fluid 60FPS streaming on Apple TV 4K with instant iCloud playlist synchronization on iPhone & iPad.',
    fullDesc: 'Designed for the discerning Apple enthusiast. Crisp typography, smooth animations, AirPlay 2 connectivity, and instant cloud sync between your living room Apple TV and mobile devices.',
    keyFeatures: [
      'Official Apple App Store security with zero sideloading required',
      'iCloud playlist & favorites sync across iPhone, iPad, and Apple TV',
      'A15/A17 Bionic hardware acceleration for ultra-low latency sports'
    ],
    previewImage: '/images/channel-series-drama.jpg',
    previewTitle: 'HBO & Drama Series in 4K',
    icon: 'Apple',
    popular: true,
    setupUrl: '/setup/apple-tv'
  },
  {
    id: 'windows',
    slug: 'windows',
    name: 'Windows PC & macOS',
    shortName: 'PC & Mac',
    category: 'Computers',
    highlightBadge: 'Multi-Monitor & Travel Ready',
    badgeColor: 'purple',
    recommendedApps: ['IPTV Smarters Pro for PC', 'VLC Media Player', 'SFVIP Player'],
    appDetails: [
      { name: 'IPTV Smarters PC', role: 'Full Desktop App', rating: '4.8★', store: 'Direct Windows/Mac' },
      { name: 'SFVIP Player', role: 'Ultra-Fast MPV Engine', rating: '4.9★', store: 'Direct Download' },
      { name: 'VLC Media Player', role: 'Open Source Universal', rating: '4.7★', store: 'Official VideoLAN' }
    ],
    setupTime: '2-3 Minutes',
    difficulty: 'Very Easy',
    osVersion: 'Windows 10, 11 & macOS Sonoma / Sequoia',
    streamQuality: 'Up to 4K 60FPS • Multi-Monitor Ready',
    shortDesc: 'Stream live sports and news on your second monitor while working, or watch movies on your travel laptop.',
    fullDesc: 'Turn your workstation or laptop into an entertainment powerhouse. Supports multi-window viewing, background audio playback, keyboard shortcuts, and external monitor output.',
    keyFeatures: [
      'Stream live sports on monitor #2 while working on monitor #1',
      'Portable setup that works in hotels, airports, and coffee shops',
      'Instant playback with low CPU and memory footprint'
    ],
    previewImage: '/images/hero-tv-show.jpg',
    previewTitle: 'Live News & Entertainment Feeds',
    icon: 'Laptop',
    popular: false,
    setupUrl: '/setup/windows'
  },
  {
    id: 'mag',
    slug: 'mag',
    name: 'MAG & Formuler Set-Top Boxes',
    shortName: 'MAG & Formuler',
    category: 'Dedicated Hardware',
    highlightBadge: 'Dedicated Remote Control',
    badgeColor: 'amber',
    recommendedApps: ['Embedded Stalker Middleware', 'Formuler MyTVOnline 2 / 3'],
    appDetails: [
      { name: 'MyTVOnline 3', role: 'Best Dedicated Box UI', rating: '5.0★', store: 'Built-in Formuler' },
      { name: 'Stalker Portal', role: 'Classic Infomir Engine', rating: '4.7★', store: 'Embedded Firmware' }
    ],
    setupTime: '4 Minutes',
    difficulty: 'Moderate',
    osVersion: 'Infomir MAG 254/322/420/520/524, Formuler Z8/Z10/Z11 Pro Max',
    streamQuality: '4K UHD HDR • Hardware Decoded',
    shortDesc: 'Dedicated IPTV set-top hardware with classic channel numbers, infrared remote, and zero app loading times.',
    fullDesc: 'For cord-cutters who desire a traditional cable box feel with physical channel number buttons and instant remote zapping. Simply provide your MAC address and connect to the VixeoTV portal.',
    keyFeatures: [
      'Instant TV power-on: boots directly into live TV channels',
      'Full physical numeric keypad channel navigation on classic remote',
      'Dedicated MAC address binding for rock-solid stability'
    ],
    previewImage: '/images/channel-sports-soccer.jpg',
    previewTitle: 'Champions League Live Feed',
    icon: 'Cpu',
    popular: false,
    setupUrl: '/setup/mag'
  }
];

export const deviceProtocols = [
  { name: 'Xtream Codes API', desc: 'Instant Server URL, Username & Password sync' },
  { name: 'M3U / M3U8 Playlist', desc: 'Universal playlist format for any media player' },
  { name: 'MAG Stalker Portal', desc: 'Direct MAC address binding for hardware set-top boxes' },
  { name: 'XMLTV EPG Guide', desc: 'Real-time 7-day electronic TV guide synchronization' },
  { name: 'H.265 / HEVC 4K', desc: 'Next-gen video compression for buffer-free streaming' }
];
