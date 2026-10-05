export const setupGuides = {
  firestick: {
    slug: 'firestick',
    deviceName: 'Amazon Firestick',
    title: 'How to Set Up VixeoTV on Amazon Firestick & Fire TV',
    metaTitle: 'VixeoTV — Firestick IPTV Setup Guide | Easy 5-Min Install',
    metaDescription: 'Step-by-step tutorial to install and configure VixeoTV on Amazon Fire TV Stick 4K and Cube using Downloader or IPTV Smarters Pro. Start streaming in 5 minutes.',
    estimatedTime: '5-8 Minutes',
    difficulty: 'Easy',
    prerequisites: [
      'Active VixeoTV subscription credentials (received via email or WhatsApp)',
      'Amazon Fire TV Stick or Fire TV Cube connected to TV & Wi-Fi',
      'Stable internet connection (15+ Mbps for HD, 30+ Mbps for 4K)'
    ],
    recommendedApp: 'IPTV Smarters Pro / TiviMate',
    steps: [
      {
        stepNumber: 1,
        title: 'Install the Downloader App',
        description: 'From your Firestick Home screen, go to Find > Search. Type "Downloader", select the orange Downloader icon from results, and click Download/Get to install it.'
      },
      {
        stepNumber: 2,
        title: 'Enable Apps from Unknown Sources',
        description: 'Go to Firestick Settings > My Fire TV > Developer Options. Ensure "Install Unknown Apps" or "Apps from Unknown Sources" is toggled to ON for Downloader. (If Developer Options is hidden, go to About and click on your Fire TV device name 7 times).'
      },
      {
        stepNumber: 3,
        title: 'Download your Preferred IPTV Player',
        description: 'Launch Downloader, allow storage permissions, and enter the short code for IPTV Smarters Pro or enter the direct download URL provided in your VixeoTV welcome message. Click GO and install the APK.'
      },
      {
        stepNumber: 4,
        title: 'Launch Player and Select Login Method',
        description: 'Open the installed IPTV player. Select "Load Your Playlist or File/URL" or choose "Login with Xtream Codes API" (recommended for faster EPG loading and automatic categorization).'
      },
      {
        stepNumber: 5,
        title: 'Enter VixeoTV Credentials',
        description: 'Enter any Any Name (e.g. VixeoTV), then enter the exact Username, Password, and Server Portal URL provided by VixeoTV. Click Add User / Login.'
      },
      {
        stepNumber: 6,
        title: 'Load Channels and Start Streaming',
        description: 'Allow 30 to 60 seconds for your live channels, movies, and TV guide to populate. You can now browse sports, entertainment, and live channels!'
      }
    ],
    troubleshooting: [
      {
        issue: 'Downloader displays "Error 403" or won\'t download',
        solution: 'Verify your internet connection and make sure your Firestick storage has at least 500MB free space. Clear cache in Settings > Applications > Manage Installed Applications.'
      },
      {
        issue: 'Invalid credentials or login failed',
        solution: 'Credentials are case-sensitive. Verify there are no extra spaces before or after your username and server URL. Ensure your subscription is active.'
      },
      {
        issue: 'Streams buffering during peak sports games',
        solution: 'Restart your Firestick and Wi-Fi router. For optimal performance, use a 5GHz Wi-Fi network or an Ethernet adapter connected directly to your Fire TV Stick.'
      }
    ],
    faqs: [
      {
        q: 'Can I use a VPN with VixeoTV on Firestick?',
        a: 'Yes. VixeoTV works seamlessly with or without a VPN. If you choose to use one, select a fast nearby server location.'
      },
      {
        q: 'Do I need a 4K Firestick to watch 4K channels?',
        a: 'Yes, to view 4K Ultra HD streams at full resolution, you need a 4K capable TV and a Fire TV Stick 4K or 4K Max.'
      }
    ]
  },
  'android-tv': {
    slug: 'android-tv',
    deviceName: 'Android TV & Google TV',
    title: 'How to Set Up VixeoTV on Android TV & Google TV',
    metaTitle: 'VixeoTV — Android TV Setup Guide | Google Play & TiviMate',
    metaDescription: 'Step-by-step setup guide for Android TV, Sony, TCL, Nvidia Shield, and Chromecast. Install TiviMate or IPTV Smarters Pro quickly via the Google Play Store.',
    estimatedTime: '5 Minutes',
    difficulty: 'Easy',
    prerequisites: [
      'Active VixeoTV subscription credentials',
      'Android TV / Google TV device with Google Play Store access',
      'Broadband internet connection'
    ],
    recommendedApp: 'TiviMate IPTV Player / IPTV Smarters Pro',
    steps: [
      {
        stepNumber: 1,
        title: 'Open Google Play Store',
        description: 'Navigate to the Google Play Store on your Android TV home interface.'
      },
      {
        stepNumber: 2,
        title: 'Search & Install Player App',
        description: 'Search for "TiviMate" or "IPTV Smarters Pro". Click Install to download the app directly to your device.'
      },
      {
        stepNumber: 3,
        title: 'Add New Playlist',
        description: 'Open the app and select "Add Playlist". Choose "Xtream Codes" as the playlist type.'
      },
      {
        stepNumber: 4,
        title: 'Input Your VixeoTV Details',
        description: 'Fill in your Server URL, Username, and Password as delivered in your VixeoTV confirmation email or WhatsApp message.'
      },
      {
        stepNumber: 5,
        title: 'Update EPG & Enjoy',
        description: 'Confirm the details. Your channel categories, Electronic Program Guide, and on-demand library will sync in seconds.'
      }
    ],
    troubleshooting: [
      {
        issue: 'Channels load slowly or freeze',
        solution: 'In player settings, switch hardware decoder from Software to Hardware (HW) decoding. Ensure your device firmware is up to date.'
      },
      {
        issue: 'Play Store does not show the app',
        solution: 'Install the Downloader application or sideload the verified APK using a USB drive or file manager.'
      }
    ],
    faqs: [
      {
        q: 'Is TiviMate free?',
        a: 'TiviMate offers a capable free tier, while TiviMate Premium unlocks multi-screen, custom groups, and advanced recording features.'
      }
    ]
  },
  'apple-tv': {
    slug: 'apple-tv',
    deviceName: 'Apple TV & iOS (iPhone / iPad)',
    title: 'How to Set Up VixeoTV on Apple TV, iPhone & iPad',
    metaTitle: 'VixeoTV — Apple TV & iOS Setup Guide | iPhone, iPad & tvOS',
    metaDescription: 'Complete walkthrough to stream VixeoTV on Apple TV 4K, iPhone, and iPad using top App Store IPTV players like Smarters Player Lite and UHF with Xtream Codes.',
    estimatedTime: '4 Minutes',
    difficulty: 'Easy',
    prerequisites: [
      'VixeoTV subscription details',
      'Apple TV 4K, iPhone, or iPad running iOS/tvOS 14 or later',
      'Active Apple ID to download apps from the App Store'
    ],
    recommendedApp: 'Smarters Player Lite / iPlayTV / UHF',
    steps: [
      {
        stepNumber: 1,
        title: 'Open App Store on your Apple Device',
        description: 'Launch the official App Store on your Apple TV, iPhone, or iPad.'
      },
      {
        stepNumber: 2,
        title: 'Search for IPTV Player',
        description: 'Search for "Smarters Player Lite" or "UHF IPTV". Download and install the app.'
      },
      {
        stepNumber: 3,
        title: 'Log In via Xtream Codes API',
        description: 'Launch the application, agree to terms, and select "Log in with Xtream Codes API".'
      },
      {
        stepNumber: 4,
        title: 'Fill Account Information',
        description: 'Enter your credentials: Name (VixeoTV), Username, Password, and the complete Server URL.'
      },
      {
        stepNumber: 5,
        title: 'Start Streaming',
        description: 'Tap Add User. The app will fetch all Live TV channels, movies, and series with full tvOS integration.'
      }
    ],
    troubleshooting: [
      {
        issue: 'Audio out of sync on Apple TV',
        solution: 'Go into Apple TV Audio Settings and set Match Frame Rate to ON. In player settings, toggle between VLC player core and KSPlayer.'
      }
    ],
    faqs: [
      {
        q: 'Does it support AirPlay?',
        a: 'Yes, you can stream from your iPhone or iPad directly to any AirPlay-compatible television or speaker.'
      }
    ]
  },
  'samsung-smart-tv': {
    slug: 'samsung-smart-tv',
    deviceName: 'Samsung Smart TV (Tizen)',
    title: 'How to Set Up VixeoTV on Samsung Smart TV',
    metaTitle: 'VixeoTV — Samsung Smart TV Setup Guide | Tizen OS Install',
    metaDescription: 'Learn how to set up VixeoTV on Samsung Smart TV running Tizen OS. Step-by-step guide to configure IBO Player or Smart IPTV without any external TV box.',
    estimatedTime: '7 Minutes',
    difficulty: 'Moderate',
    prerequisites: [
      'Samsung Smart TV (2017 model or newer with Tizen OS)',
      'VixeoTV M3U link or Xtream credentials',
      'Access to a smartphone or computer to upload playlist'
    ],
    recommendedApp: 'IBO Player / Smart IPTV / Nanomid',
    steps: [
      {
        stepNumber: 1,
        title: 'Open Samsung Apps',
        description: 'Press the Smart Hub button on your Samsung remote and navigate to the Search / Apps icon.'
      },
      {
        stepNumber: 2,
        title: 'Search for IBO Player or Smart IPTV',
        description: 'Type "IBO Player" in the search box. Select the app and click Install.'
      },
      {
        stepNumber: 3,
        title: 'Note Device MAC Address & Key',
        description: 'Open the app on your TV. Note down the Device MAC address and Device Key displayed on your TV screen.'
      },
      {
        stepNumber: 4,
        title: 'Upload Playlist Online',
        description: 'From your smartphone or computer browser, go to the official portal management page of the player (e.g. iboplayer.com/manage), enter your MAC address, and paste your VixeoTV M3U URL or Xtream Codes details.'
      },
      {
        stepNumber: 5,
        title: 'Restart App on Samsung TV',
        description: 'Reload or restart the app on your Samsung TV. Your channel directory and EPG will now appear directly on your TV.'
      }
    ],
    troubleshooting: [
      {
        issue: 'App trial expires on third-party player',
        solution: 'Some player apps like IBO Player require a small one-time activation fee after a 7-day trial. Alternatively, use other free apps available in the Samsung store.'
      }
    ],
    faqs: [
      {
        q: 'Do I need an Amazon Firestick if I have a Samsung TV?',
        a: 'While you can stream directly via Samsung apps, Firestick often provides faster app updates and a snappier interface.'
      }
    ]
  },
  'lg-smart-tv': {
    slug: 'lg-smart-tv',
    deviceName: 'LG Smart TV (webOS)',
    title: 'How to Set Up VixeoTV on LG Smart TV (webOS)',
    metaTitle: 'VixeoTV — LG Smart TV Setup Guide | webOS & IBO Player',
    metaDescription: 'Easy step-by-step tutorial to install and configure VixeoTV on LG webOS Smart TVs using IBO Player or Smart IPTV directly from the LG Content Store.',
    estimatedTime: '7 Minutes',
    difficulty: 'Moderate',
    prerequisites: [
      'LG Smart TV running webOS',
      'VixeoTV M3U Playlist URL or Xtream credentials',
      'Internet connection on your TV'
    ],
    recommendedApp: 'IBO Player / SS IPTV / Smart IPTV',
    steps: [
      {
        stepNumber: 1,
        title: 'Access LG Content Store',
        description: 'Press the Home button on your LG Magic Remote and select the LG Content Store.'
      },
      {
        stepNumber: 2,
        title: 'Find and Install IBO Player',
        description: 'Search for "IBO Player" or "Smart IPTV". Install the application to your LG webOS TV.'
      },
      {
        stepNumber: 3,
        title: 'Retrieve Device MAC and Key',
        description: 'Launch the application and write down the Device MAC and Device Key shown on the setup screen.'
      },
      {
        stepNumber: 4,
        title: 'Link Your VixeoTV Subscription',
        description: 'Visit the player management website on your phone or laptop. Connect your device using the MAC address and enter your VixeoTV M3U playlist.'
      },
      {
        stepNumber: 5,
        title: 'Refresh Playlist',
        description: 'Press the refresh button in the app on your TV to begin enjoying live TV and sports.'
      }
    ],
    troubleshooting: [
      {
        issue: 'App does not show up in LG Content Store',
        solution: 'Ensure your LG TV country region in Settings is set to a supported region such as UK, US, or Spain.'
      }
    ],
    faqs: [
      {
        q: 'Can our support team assist with LG TV setup?',
        a: 'Yes, message our WhatsApp support with your MAC address and we will assist in linking your subscription.'
      }
    ]
  },
  windows: {
    slug: 'windows',
    deviceName: 'Windows PC & macOS',
    title: 'How to Set Up VixeoTV on Windows PC and Mac',
    metaTitle: 'VixeoTV — Windows PC & Mac Setup Guide | Desktop Streaming',
    metaDescription: 'Watch VixeoTV IPTV on Windows 10/11 and macOS using IPTV Smarters Pro or VLC Media Player. Quick 3-minute setup for crystal-clear desktop streaming.',
    estimatedTime: '3 Minutes',
    difficulty: 'Very Easy',
    prerequisites: [
      'PC running Windows 10/11 or Mac running macOS',
      'VixeoTV login credentials or M3U link',
      'Internet connection'
    ],
    recommendedApp: 'IPTV Smarters Pro for Windows/Mac or VLC Media Player',
    steps: [
      {
        stepNumber: 1,
        title: 'Download Desktop Player',
        description: 'Download IPTV Smarters Pro for Windows (.exe) or Mac (.dmg), or alternatively download the free open-source VLC Media Player.'
      },
      {
        stepNumber: 2,
        title: 'Install and Open',
        description: 'Follow the on-screen installer prompts and open the desktop application.'
      },
      {
        stepNumber: 3,
        title: 'Enter Login Details',
        description: 'Choose "Login with Xtream Codes API". Enter your VixeoTV username, password, and server URL.'
      },
      {
        stepNumber: 4,
        title: 'Start Streaming',
        description: 'Click Login to load channels. Enjoy Full HD and 4K playback directly on your computer monitor.'
      }
    ],
    troubleshooting: [
      {
        issue: 'Video stuttering on older PCs',
        solution: 'In VLC / Smarters settings, enable Hardware-accelerated decoding under Video preferences.'
      }
    ],
    faqs: [
      {
        q: 'Can I use keyboard shortcuts?',
        a: 'Yes, desktop players support spacebar pause, arrow key channel switching, and full screen toggles.'
      }
    ]
  },
  mag: {
    slug: 'mag',
    deviceName: 'MAG & Portal Box',
    title: 'How to Set Up VixeoTV on MAG Box (Infomir / Formuler)',
    metaTitle: 'VixeoTV — MAG Box Setup Guide | Infomir & Stalker Portal',
    metaDescription: 'Detailed setup tutorial for Infomir MAG 254, 322, 424, 524 and Formuler boxes. Configure your VixeoTV Stalker Portal URL and MAC address with ease.',
    estimatedTime: '5 Minutes',
    difficulty: 'Moderate',
    prerequisites: [
      'MAG Set-Top Box connected to TV via HDMI and Ethernet',
      'Device MAC address (starts with 00:1A:79:...) registered with VixeoTV',
      'VixeoTV Portal URL'
    ],
    recommendedApp: 'Embedded Stalker Middleware / MyTVOnline',
    steps: [
      {
        stepNumber: 1,
        title: 'Locate Your MAG MAC Address',
        description: 'Look at the sticker on the underside of your MAG box or navigate to System Settings > Device Info to find your MAC Address (format: 00:1A:79:XX:XX:XX).'
      },
      {
        stepNumber: 2,
        title: 'Send MAC Address to VixeoTV Support',
        description: 'Send your MAC address to our WhatsApp support or include it when purchasing so our system can authorize your device.'
      },
      {
        stepNumber: 3,
        title: 'Open Inner Portal Settings',
        description: 'Reboot your MAG box and press the Setup button on your remote. Go to Servers > Portals.'
      },
      {
        stepNumber: 4,
        title: 'Configure Portal URL',
        description: 'In Portal 1 Name, enter "VixeoTV". In Portal 1 URL, enter the exact portal link provided by our support team. Click Save.'
      },
      {
        stepNumber: 5,
        title: 'Reboot Device',
        description: 'Navigate back and select Reboot Device. Your MAG box will automatically boot into the VixeoTV portal with TV categories, EPG, and VoD.'
      }
    ],
    troubleshooting: [
      {
        issue: 'Your STB is blocked / Contact provider message',
        solution: 'This indicates your MAC address has not been activated or there is a typo. Contact our WhatsApp support with your MAC address to refresh authorization.'
      }
    ],
    faqs: [
      {
        q: 'Can I change the portal URL later?',
        a: 'Yes, simply return to the inner portal settings by holding the setup key during startup.'
      }
    ]
  }
};
