// map-data/internet/surface-web.js

export const surfaceWebPois = [
    // Surface Web
    {
        id: 'poi_inet_oracle_spire',
        x: 35.0, y: 15.0,
        type: 'capital_city', name: "The Oracle's Spire (Google)",
        subRegion: 'surface_web',
        description: "A gleaming, impossibly tall spire that serves as the central index of all knowledge on the Surface Web. Its archivists and algorithms can answer any question, for a price.",
        factionId: 'cybernetic_collectives', intelReq: { faction: 'internet_federation', level: 10 },
        political_influence: 9, economic_value: 9, military_strength: 7, population: 5000,
        age_of_antiquity: 1, crime_rate: 2
    },
    {
        id: 'poi_inet_social_forum',
        x: 25.0, y: 20.0,
        type: 'major_city', name: "The Great Social Forum (Facebook)",
        subRegion: 'surface_web',
        description: "A chaotic, sprawling city of interconnected platforms where billions of users share their thoughts, news, and pictures of their meals. A hotbed of political debate and misinformation.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 5 },
        political_influence: 8, economic_value: 8, military_strength: 3, population: 10000,
        age_of_antiquity: 1, crime_rate: 4
    },
    {
        id: 'poi_inet_anonymity_cauldron',
        x: 25.87, y: 27.44,
        type: 'lair', name: "The Anonymity Cauldron (4chan)",
        subRegion: 'surface_web',
        description: "A dark, seething pit of unfiltered thought and raw chaos. A place of dangerous ideas and powerful secrets, where users are anonymous and consequences are unpredictable. Its location is unstable, having recently drifted.",
        factionId: 'cosmic_jesters', intelReq: { faction: 'cosmic_jesters', level: 50 },
        political_influence: 4, economic_value: 3, military_strength: 5, population: 1000,
        age_of_antiquity: 1, crime_rate: 8
    },
    {
        id: 'poi_inet_knowledge_garden',
        x: 40.0, y: 20.0,
        type: 'library', name: "The Knowledge Garden (Wikipedia)",
        subRegion: 'surface_web',
        description: "A vast, serene garden where every plant and stone is inscribed with a piece of user-submitted information. It is constantly tended by a legion of volunteer editors. Its public data-terminals allow access to its collection of digital books.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 5 },
        political_influence: 7, economic_value: 6, military_strength: 2, population: 2000,
        library_summary: "A vast, serene garden where every plant and stone is inscribed with a piece of user-submitted information. It is constantly tended by a legion of volunteer editors who protect its neutrality. Its data-terminals provide access to a wide range of public domain texts.",
        libraryStockKey: 'internet',
        age_of_antiquity: 1, crime_rate: 3
    },
    {
        id: 'poi_inet_streaming_sea',
        x: 45.0, y: 15.0,
        type: 'landmark', name: "The Streaming Sea (YouTube/Twitch)",
        subRegion: 'surface_web',
        description: "A district of floating platforms and holographic stages where performers broadcast their lives, games, and talents to massive audiences.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 10 },
        political_influence: 6, economic_value: 8, military_strength: 2, population: 4000,
        age_of_antiquity: 1, crime_rate: 5
    },
    {
        id: 'poi_inet_federation_precinct',
        x: 38.0, y: 30.0,
        type: 'barracks', name: "Federation Precinct 7",
        subRegion: 'surface_web',
        description: "A major garrison for the Internet Federation's security forces. From here, they dispatch patrols to quell flame wars and delete illegal content.",
        factionId: 'internet_federation', intelReq: { faction: 'internet_federation', level: 15 },
        political_influence: 6, economic_value: 3, military_strength: 8, population: 1200,
        age_of_antiquity: 1, crime_rate: 2
    },
    {
        id: 'poi_inet_adblocker_bastion',
        x: 18.0, y: 15.0,
        type: 'outpost', name: "Ad-Blocker Bastion",
        subRegion: 'surface_web',
        description: "A hidden fortress maintained by Hacktivist cells, dedicated to disrupting the constant stream of advertisements that plague the Surface Web.",
        factionId: 'hacktivist_collectives', intelReq: { faction: 'hacktivist_collectives', level: 35 },
        political_influence: 3, economic_value: 2, military_strength: 5, population: 100,
        age_of_antiquity: 1, crime_rate: 4
    },
    {
        id: 'poi_inet_cookie_cache',
        x: 15.0, y: 35.0,
        type: 'cave_entrance', name: "The Cookie Cache Caverns",
        subRegion: 'surface_web',
        description: "A vast network of caves where user data and tracking cookies are stored. A tempting target for data miners and identity thieves.",
        factionId: 'data_merchant_guilds', intelReq: { faction: 'data_merchant_guilds', level: 25 },
        political_influence: 4, economic_value: 9, military_strength: 3, population: 200,
        age_of_antiquity: 1, crime_rate: 5
    },
    {
        id: 'poi_inet_antivirus_citadel',
        x: 32.0, y: 38.0,
        type: 'fortress', name: "The Anti-Virus Citadel",
        subRegion: 'surface_web',
        description: "The headquarters of the Federation's anti-malware division. A gleaming fortress that constantly scans the web for threats and develops new digital weapons.",
        factionId: 'internet_federation', intelReq: { faction: 'internet_federation', level: 30 },
        political_influence: 5, economic_value: 3, military_strength: 9, population: 800,
        age_of_antiquity: 1, crime_rate: 1
    },
    {
        id: 'poi_inet_daily_feed_spire',
        x: 30.0, y: 10.0,
        type: 'watchtower', name: "The Daily Feed Spire (News Aggregator)",
        subRegion: 'surface_web',
        description: "A tower that constantly broadcasts the latest headlines and breaking news from across the web. A key source of information, and a primary target for propaganda campaigns.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 5 },
        political_influence: 7, economic_value: 5, military_strength: 3, population: 100,
        age_of_antiquity: 1, crime_rate: 6
    },
    {
        id: 'poi_inet_domain_spire',
        x: 22.0, y: 35.0,
        type: 'ley_line', name: "Domain Spire",
        subRegion: 'surface_web',
        description: "One of several spires that form the 'Domain Name System'. These spires direct data traffic, making them critical infrastructure. Control a spire, and you can redirect a significant portion of the web.",
        factionId: 'internet_federation', intelReq: { faction: 'internet_federation', level: 40 },
        political_influence: 6, economic_value: 4, military_strength: 8, population: 200,
        age_of_antiquity: 1, crime_rate: 2
    },
    {
        id: 'poi_inet_isp_tollbridge',
        x: 14.5, y: 25.0,
        type: 'bridge', name: "ISP Toll-Bridge",
        subRegion: 'surface_web',
        description: "A heavily fortified data bridge controlled by a monopolistic Internet Service Provider. All traffic must pass through and pay a 'toll', throttling speeds for those who don't subscribe to their premium plans.",
        factionId: 'data_merchant_guilds', intelReq: { faction: 'data_merchant_guilds', level: 20 },
        political_influence: 5, economic_value: 9, military_strength: 6, population: 400,
        age_of_antiquity: 1, crime_rate: 3
    },
    {
        id: 'poi_inet_git_fortress',
        x: 15.5, y: 18.0,
        type: 'fortress', name: "The Git Fortress (GitHub)",
        subRegion: 'surface_web',
        description: "A massive, orderly fortress where the source code for countless projects is stored and versioned. Its integrity is paramount to the entire digital ecosystem, making it a high-value strategic target.",
        factionId: 'internet_federation', intelReq: { faction: 'internet_federation', level: 25 },
        political_influence: 7, economic_value: 8, military_strength: 8, population: 2000,
        age_of_antiquity: 1, crime_rate: 2
    },
    {
        id: 'poi_inet_reddit_agora',
        x: 20.0, y: 25.0,
        type: 'market', name: "The Agora of Memes (Reddit)",
        subRegion: 'surface_web',
        description: "A chaotic, sprawling collection of forums dedicated to every topic imaginable. It is the birthplace of new ideas and viral content, but is also prone to mob mentality and factional infighting.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 5 },
        political_influence: 6, economic_value: 7, military_strength: 2, population: 3000,
        age_of_antiquity: 1, crime_rate: 5
    },
    {
        id: 'poi_inet_imgurian_archives',
        x: 18.0, y: 28.0,
        type: 'library', name: "The Imgurian Archives",
        subRegion: 'surface_web',
        description: "A vast, visual archive that serves as the primary host for the images and GIFs that fuel the meme economy. Its servers are under constant strain but are a vital cultural repository.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 10 },
        political_influence: 5, economic_value: 6, military_strength: 2, population: 500,
        library_summary: "A vast, visual archive that serves as the primary host for the images and GIFs that fuel the meme economy. While not a traditional library, its cultural significance is immense, containing a single, bizarre text on 'The Art of the WAH'.",
        libraryStockKey: 'imgurian_archives',
        age_of_antiquity: 1, crime_rate: 6
    },
    {
        id: 'poi_inet_duck_pond',
        x: 13.0, y: 20.0,
        type: 'shrine', name: "The Duck Pond (DuckDuckGo)",
        subRegion: 'surface_web',
        description: "A quiet, serene search engine that promises not to track its users. It is a haven for privacy-seekers and a constant thorn in the side of the data-hungry Merchant Guilds.",
        factionId: 'hacktivist_collectives', intelReq: { faction: 'hacktivist_collectives', level: 30 },
        political_influence: 4, economic_value: 3, military_strength: 4, population: 100,
        age_of_antiquity: 1, crime_rate: 3
    },
    {
        id: 'poi_inet_bing_atoll',
        x: 33.0, y: 22.0,
        type: 'ruins', name: "The Bing Atoll",
        subRegion: 'surface_web',
        description: "A sparsely populated search engine, constantly trying to reinvent itself to compete with the Oracle's Spire. It is known for its beautiful, high-resolution background images.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 5 },
        political_influence: 2, economic_value: 3, military_strength: 2, population: 200,
        age_of_antiquity: 1, crime_rate: 4
    },
    {
        id: 'poi_inet_dropbox_caverns',
        x: 17.0, y: 31.0,
        type: 'mine', name: "The Dropbox Caverns",
        subRegion: 'surface_web',
        description: "A vast network of crystalline caves where personal and corporate files are stored in the cloud. Heavily guarded by the Data Merchant Guilds against digital spelunkers.",
        factionId: 'data_merchant_guilds', intelReq: { faction: 'data_merchant_guilds', level: 20 },
        political_influence: 4, economic_value: 8, military_strength: 5, population: 300,
        age_of_antiquity: 1, crime_rate: 3
    },
    {
        id: 'poi_inet_linkedin_spire',
        x: 23.0, y: 12.0,
        type: 'major_city', name: "The Professional Spire (LinkedIn)",
        subRegion: 'surface_web',
        description: "A sterile, corporate city where users network for career opportunities. The social interactions are polite, but the political maneuvering for promotions is ruthless.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 15 },
        political_influence: 5, economic_value: 6, military_strength: 3, population: 4000,
        age_of_antiquity: 1, crime_rate: 3
    },
    {
        id: 'poi_inet_pinterest_boardlands',
        x: 29.0, y: 32.0,
        type: 'landmark', name: "The Pinterest Boardlands",
        subRegion: 'surface_web',
        description: "A visually stunning landscape of inspiration boards, where users collect images of recipes, crafts, and home decor. A surprisingly influential hub for cultural trends.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 5 },
        political_influence: 4, economic_value: 5, military_strength: 1, population: 1500,
        age_of_antiquity: 1, crime_rate: 5
    },
    {
        id: 'poi_inet_khan_academy',
        x: 41.0, y: 11.0,
        type: 'academy', name: "The Khan Academy",
        subRegion: 'surface_web',
        description: "A free university open to all, offering knowledge on any subject. It is a beacon of enlightenment in the often-chaotic web, fiercely protected by its users.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 5 },
        political_influence: 6, economic_value: 3, military_strength: 3, population: 2500,
        age_of_antiquity: 1, crime_rate: 3
    },
    {
        id: 'poi_inet_netflix_citadel',
        x: 37.0, y: 8.0,
        type: 'fortress', name: "The Streaming Citadel (Netflix)",
        subRegion: 'surface_web',
        description: "A massive, walled citadel that houses a vast library of films and television shows. Its recommendation algorithms are said to be a form of powerful, addictive magic.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 10 },
        political_influence: 7, economic_value: 9, military_strength: 5, population: 3000,
        age_of_antiquity: 1, crime_rate: 3
    },
    {
        id: 'poi_inet_ebay_bazaar',
        x: 19.0, y: 40.0,
        type: 'market', name: "The Auction Bazaars (eBay)",
        subRegion: 'surface_web',
        description: "A chaotic bazaar where anything can be bought or sold via a frantic auction system. Run by the Freelancer Underworld, it's a place for rare finds and shady deals.",
        factionId: 'freelancer_underworld', intelReq: { faction: 'freelancer_underworld', level: 20 },
        political_influence: 4, economic_value: 8, military_strength: 3, population: 2000,
        age_of_antiquity: 1, crime_rate: 4
    },
    {
        id: 'poi_inet_dns_root_nexus',
        x: 30.0, y: 28.0,
        type: 'ley_line', name: "DNS Root Server Nexus",
        subRegion: 'surface_web',
        description: "One of the thirteen core servers of the Domain Name System. It is the absolute bedrock of The Internet's infrastructure. Its destruction would plunge a seventh of the web into chaos.",
        factionId: 'internet_federation', intelReq: { faction: 'internet_federation', level: 80 },
        political_influence: 8, economic_value: 8, military_strength: 10, population: 100,
        age_of_antiquity: 1, crime_rate: 1
    },
    {
        id: 'poi_inet_payment_gateway',
        x: 13.0, y: 41.0,
        type: 'fortress', name: "The Payment Gateway Fortress (PayPal/Stripe)",
        subRegion: 'surface_web',
        description: "A heavily fortified digital bank that processes the majority of transactions on the web. It is under constant assault from hackers.",
        factionId: 'data_merchant_guilds', intelReq: { faction: 'data_merchant_guilds', level: 35 },
        political_influence: 6, economic_value: 10, military_strength: 8, population: 500,
        age_of_antiquity: 1, crime_rate: 1
    },
    {
        id: 'poi_inet_viral_volcano',
        x: 43.0, y: 24.0,
        type: 'volcano', name: "The Viral Video Volcano",
        subRegion: 'surface_web',
        description: "A digital volcano that erupts with new, highly shareable video content every few hours. Content creators flock here hoping to catch the next big trend before it goes mainstream.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 15 },
        political_influence: 5, economic_value: 8, military_strength: 2, population: 500,
        age_of_antiquity: 1, crime_rate: 6
    },
    {
        id: 'poi_inet_regal_embassy',
        x: 11.0, y: 34.0,
        type: 'landmark',
        name: "Regal Empire Digital Embassy",
        subRegion: 'surface_web',
        description: "A rigidly structured data-fortress that serves as the Empire's official diplomatic node. It broadcasts a constant stream of Imperial law and order into the chaotic web, a bastion of digital bureaucracy protected by powerful anti-malware Aegis programs.",
        factionId: 'regal_empire',
        intelReq: { faction: 'internet_federation', level: 40 },
        political_influence: 6,
        economic_value: 4,
        military_strength: 7,
        population: 100,
        age_of_antiquity: 1, crime_rate: 2
    },
    {
        id: 'poi_inet_mushroom_embassy',
        x: 12.5, y: 37.0,
        type: 'landmark',
        name: "Mushroom Regency Embassy Spore-Node",
        subRegion: 'surface_web',
        description: "A bizarre but cheerful data-construct shaped like a giant mushroom. It serves as the Regency's diplomatic server, spreading spores of goodwill and attempting to forge alliances in the strange new world of The Internet.",
        factionId: 'mushroom_regency',
        intelReq: { faction: 'internet_federation', level: 35 },
        political_influence: 4,
        economic_value: 3,
        military_strength: 3,
        population: 80,
        age_of_antiquity: 1, crime_rate: 5
    }
];