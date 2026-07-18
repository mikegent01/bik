// This file contains all side quests related to The Internet region.
export const INTERNET_REQUESTS = {
    'req_inet_oracle_purge': {
        id: 'req_inet_oracle_purge', title: "Request: Purge the Logic Virus", type: 'request', category: 'Requests',
        objective: "A notice from the Data Archivists faction: 'An ancient, self-replicating logic virus is corrupting search results in the Oracle's Spire. We need a team of digital exterminators to enter the Spire's core and purge the corrupted data streams.'",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_oracle_spire'
    },
    'req_inet_meme_injection': {
        id: 'req_inet_meme_injection', title: "Request: An Injection of Nonsense", type: 'request', category: 'Requests',
        objective: "A chaotic notice appears in the Anonymity Cauldron: 'The Cauldron grows stagnant with predictable rage! A new, nonsensical meme must be forged in the Meme-Weavers' Bazaar and injected into the Great Social Forum to stir the pot!'",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_anonymity_cauldron'
    },
    'req_inet_whistleblower_escort': {
        id: 'req_inet_whistleblower_escort', title: "Request: Data Packet Extraction", type: 'request', category: 'Requests',
        objective: "A coded message from The Unchained circulates in the Deep Web: 'Federation defector requires escort. A data packet containing proof of Admin Zero's surveillance overreach must be extracted from the Whistleblower's Sanctuary and delivered to our network.'",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_whistleblower_sanctuary'
    },
    'req_inet_glitch_retrieval': {
        id: 'req_inet_glitch_retrieval', title: "Request: Glitch Retrieval", type: 'request', category: 'Requests',
        objective: "A client in the Glitch Market wants to purchase a specific, stable weaponized glitch that causes enemy firearms to harmlessly shoot confetti. High price for a stable sample.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_glitch_market'
    },
    'req_inet_silk_overpass_delivery': {
        id: 'req_inet_silk_overpass_delivery', title: "Request: A Discreet Package", type: 'request', category: 'Requests',
        objective: "A client on the Silk Overpass needs a package of 'custom code' delivered to a black-hat hacker in the Malware Forge. The package is highly illegal and Federation patrols are on high alert.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_silk_overpass'
    },
    'req_inet_botnet_disruption': {
        id: 'req_inet_botnet_disruption', title: "Request: Disrupt the Herders", type: 'request', category: 'Requests',
        objective: "A hacktivist cell wants to hire a team to disrupt the Botnet Herders' Ranch. The goal is not to destroy it, but to release the botnet, causing chaos across the web.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_botnet_ranch'
    },
    'req_inet_mega_archive_recovery': {
        id: 'req_inet_mega_archive_recovery', title: "Request: Data Recovery", type: 'request', category: 'Requests',
        objective: "A Data Merchant Guild executive has lost a critical data block in a secure vault within the Mega-Archive Isle due to corruption. They need a team to bypass their own security and recover the raw data.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_mega_archive'
    },
    'req_inet_git_backdoor': {
        id: 'req_inet_git_backdoor', title: "Request: Code Insertion", type: 'request', category: 'Requests',
        objective: "A corporate espionage agent wants to hire a team to subtly insert a backdoor into a popular open-source project hosted on the Git Fortress, offering a fortune for a clean, undetected job.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_git_fortress'
    },
    'req_inet_redmond_heist': {
        id: 'req_inet_redmond_heist', title: "Request: The Beta Test", type: 'request', category: 'Requests',
        objective: "A rival corporation will pay anything for a copy of the beta version of the new 'Windows' operating system from the Redmond Sprawling Campus. Industrial espionage at its finest.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_redmond_campus'
    },
    'req_inet_infinite_loop_jailbreak': {
        id: 'req_inet_infinite_loop_jailbreak', title: "Request: Jailbreak", type: 'request', category: 'Requests',
        objective: "An Unchained agent needs a team to plant a 'jailbreak' exploit on the main server of the Infinite Loop Citadel, freeing the devices within from their corporate shackles.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_infinite_loop'
    },
    'req_inet_myspace_tom': {
        id: 'req_inet_myspace_tom', title: "Request: Digital Archaeology", type: 'request', category: 'Requests',
        objective: "A digital historian will pay a handsome sum for the recovery of the original profile data of the legendary user 'Tom' from the haunted Myspace Mausoleum.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_myspace_mausoleum'
    },
    'req_inet_library_zero_book': {
        id: 'req_inet_library_zero_book', title: "Request: A Real Book", type: 'request', category: 'Requests',
        objective: "A conspiracy theorist believes there is one book in the Library of Zero that isn't empty or redacted. He will pay for any book retrieved from the library that contains actual, readable text.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_library_zero'
    },
    'req_inet_fanfic_delete': {
        id: 'req_inet_fanfic_delete', title: "Request: Reputation Management", type: 'request', category: 'Requests',
        objective: "An embarrassed Imperial noble wants a team to find and delete all 'shipping' fan-fiction written about him in the Fan-Fiction Scriptorium. He demands absolute discretion.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_fanfic_scriptorium'
    },
    'req_inet_imgur_origin': {
        id: 'req_inet_imgur_origin', title: "Request: Meme Genealogy", type: 'request', category: 'Requests',
        objective: "A user in the Reddit Agora will pay to know the true origin of a legendary, ancient meme. The trail leads back to the earliest servers of the Imgurian Archives.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_imgurian_archives'
    },
    'req_inet_unseen_spell': {
        id: 'req_inet_unseen_spell', title: "Request: Forbidden Knowledge", type: 'request', category: 'Requests',
        objective: "A Mages' Guild scholar, operating off the books, wants a copy of a forbidden technomancy spell, 'Summon Blue Screen of Death', from the Unseen Library.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_unseen_library'
    },
    'req_inet_social_forum_flame_war': {
        id: 'req_inet_social_forum_flame_war', title: "Request: A Distraction", type: 'request', category: 'Requests',
        objective: "A politician needs a distraction from a recent scandal. He's hiring a team to start a massive, pointless 'flame war' about whether pineapple belongs on pizza in the Great Social Forum.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_social_forum'
    },
    'req_inet_knowledge_garden_edit_war': {
        id: 'req_inet_knowledge_garden_edit_war', title: "Request: Settle an Edit War", type: 'request', category: 'Requests',
        objective: "A user in the Knowledge Garden wants to correct a persistent, incorrect fact, but the page is locked by a powerful admin. He needs someone to bypass the lock or convince the admin.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_knowledge_garden'
    },
    'req_inet_streaming_sea_bodyguard': {
        id: 'req_inet_streaming_sea_bodyguard', title: "Request: Bodyguards Needed", type: 'request', category: 'Requests',
        objective: "A popular streamer needs bodyguards for a live event in a dangerous part of the web known for 'stream snipers' and hecklers.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_streaming_sea'
    },
    'req_inet_federation_precinct_jailbreak': {
        id: 'req_inet_federation_precinct_jailbreak', title: "Request: Jailbreak", type: 'request', category: 'Requests',
        objective: "A captured hacktivist in Federation Precinct 7 needs a team to cause a major distraction (like a DDoS attack) so he can escape during the confusion.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_federation_precinct'
    },
    'req_inet_cookie_cache_heist': {
        id: 'req_inet_cookie_cache_heist', title: "Request: The Golden Cookie", type: 'request', category: 'Requests',
        objective: "A data merchant wants a sample of a particularly valuable user's cookie data from the Cookie Cache Caverns. This user is a high-ranking Imperial noble.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_cookie_cache'
    },
    'req_inet_antivirus_heist': {
        id: 'req_inet_antivirus_heist', title: "Request: The Ultimate Antivirus", type: 'request', category: 'Requests',
        objective: "A black-hat hacker will pay a fortune for the source code of the Federation's latest anti-virus software from the heavily guarded Anti-Virus Citadel.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_antivirus_citadel'
    },
    'req_inet_domain_spire_hijack': {
        id: 'req_inet_domain_spire_hijack', title: "Request: A Message to the World", type: 'request', category: 'Requests',
        objective: "A hacktivist cell wants to temporarily hijack a Domain Spire to redirect traffic from a major corporate site to their own propaganda page.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_domain_spire'
    },
    'req_inet_isp_toll_bridge_demolition': {
        id: 'req_inet_isp_toll_bridge_demolition', title: "Request: For Net Neutrality!", type: 'request', category: 'Requests',
        objective: "A group of independent users wants a team to blow up the ISP Toll-Bridge to restore net neutrality to the region. They offer payment in cryptocurrency.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_isp_tollbridge'
    },
    'req_inet_reddit_agora_moderator': {
        id: 'req_inet_reddit_agora_moderator', title: "Request: Moderator War", type: 'request', category: 'Requests',
        objective: "A moderator of a large forum in the Reddit Agora needs help dealing with a hostile takeover by a rival moderator team that is using bots to downvote all content.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_reddit_agora'
    },
    'req_inet_dropbox_caverns_password': {
        id: 'req_inet_dropbox_caverns_password', title: "Request: Lost Password", type: 'request', category: 'Requests',
        objective: "A user has forgotten the password to his own encrypted files in the Dropbox Caverns. He needs a team of expert crackers to break into his own data.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_dropbox_caverns'
    },
    'req_inet_linkedin_spire_doxxing': {
        id: 'req_inet_linkedin_spire_doxxing', title: "Request: Headhunting", type: 'request', category: 'Requests',
        objective: "A corporate headhunter needs the private contact information of a rival company's top engineer from the Professional Spire. This is a simple, if unethical, data grab.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_linkedin_spire'
    },
    'req_inet_viral_volcano_marketing': {
        id: 'req_inet_viral_volcano_marketing', title: "Request: Going Viral", type: 'request', category: 'Requests',
        objective: "A marketing executive wants to ensure their client's video is the next one to erupt from the Viral Video Volcano. This may require 'discouraging' other contenders.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_viral_volcano'
    },
    'req_inet_regal_embassy_hack': {
        id: 'req_inet_regal_embassy_hack', title: "Request: Delete the File", type: 'request', category: 'Requests',
        objective: "A rebel spy needs a team to hack into the Regal Empire Digital Embassy's servers and delete his file before his cover is blown.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_regal_embassy'
    },
    'req_inet_mushroom_embassy_debug': {
        id: 'req_inet_mushroom_embassy_debug', title: "Request: Debugging an Embassy", type: 'request', category: 'Requests',
        objective: "The Mushroom Regency needs technical support. Their embassy server has been infected with a strange, giggling virus, and their own IT Toads are stumped.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_mushroom_embassy'
    },
    'req_inet_payment_gateway_heist': {
        id: 'req_inet_payment_gateway_heist', title: "Request: The Big Score", type: 'request', category: 'Requests',
        objective: "A master thief is planning a heist on the Payment Gateway Fortress and is hiring a team of experts for the job. The payout could set them up for life.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_inet_payment_gateway'
    }
};