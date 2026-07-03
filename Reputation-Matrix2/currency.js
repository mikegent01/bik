
import { MAP_DATA } from './map-data.js';
import { LORE_DATA } from './lore.js';

// --- DATA ---

const CURRENCY_DATA = {
    // Core Bank Metals
    gold: { name: "Gold Piece", icon: "icon_gold.png", iconFallback: "💰", base_value: 1.0, home_faction: null, type: "Metal", description: "Universal trade gold. Banks accept it because weight, purity, and greed are internationally understood languages. Gold is slow to move in bulk but excellent for reserves, vault collateral, and settlements between factions that hate each other but still understand math. Backing: assayed gold weight. Bank note: universal bank reserve.", acceptance: { default: "high" }, issuer: "Many mints", backing: "assayed gold weight", legal_status: "universal bank reserve", volatility: "steady", liquidity: "universal" },
    silver: { name: "Silver Piece", icon: "icon_silver.png", iconFallback: "🪙", base_value: 0.1, home_faction: null, type: "Metal", description: "Everyday trade silver. It is common enough for wages and road expenses but stable enough for bank counters to bother counting. Rural banks often prefer silver to exotic scrip because farmers trust a coin they can bite. Backing: assayed silver weight. Bank note: universal small tender.", acceptance: { default: "high" }, issuer: "Many mints", backing: "assayed silver weight", legal_status: "universal small tender", volatility: "steady", liquidity: "universal" },
    copper: { name: "Copper Bit", icon: "icon_copper.png", iconFallback: "🟤", base_value: 0.01, home_faction: null, type: "Metal", description: "Low-value street currency for bread, candles, cart fees, ferry tips, and market change. Banks accept copper reluctantly in sacks, then charge handling fees because bankers believe suffering should be itemized. Backing: copper weight. Bank note: legal small tender.", acceptance: { default: "high" }, issuer: "Local mints", backing: "copper weight", legal_status: "legal small tender", volatility: "steady", liquidity: "universal" },

    // State and Court Money
    midland_ducat: { name: "Midland Ducat", icon: "icon_midland_ducat.png", iconFallback: "🦁", base_value: 0.9, home_faction: "regal_empire", type: "Fiat", description: "The Regal Empire’s main bank coin: stable, standardized, taxable, and boring in the way successful money often is. Imperial banks like it because every coin has a known weight, issue date, and paperwork trail. Backing: imperial tax authority and gold reserves. Bank note: legal tender in imperial courts.", acceptance: { default: "medium", regal_empire: "high", iron_legion: "high", mages_guild: "medium", mushroom_regency: "medium" }, issuer: "Regal Treasury", backing: "imperial tax authority and gold reserves", legal_status: "legal tender in imperial courts", volatility: "steady", liquidity: "wide" },
    imperial_crown: { name: "Imperial Crown", icon: "factions/empire.png", iconFallback: "👑", base_value: 1.1, home_faction: "the_empire", type: "Fiat", description: "A heavy state coin backed by census, army, tax office, and a treasury that thinks confidence is a military doctrine. Midlands banks accept Crowns as strong foreign exchange when the paperwork is clean. Backing: state reserves and military payroll. Bank note: recognized foreign exchange.", acceptance: { default: "medium", the_empire: "high", regal_empire: "medium", iron_legion: "medium" }, issuer: "Empire Treasury", backing: "state reserves and military payroll", legal_status: "recognized foreign exchange", volatility: "steady", liquidity: "wide" },
    archive_writ: { name: "Archive Writ", icon: "icon_currency.png", iconFallback: "📜", base_value: 4.5, home_faction: "regal_empire", type: "Bank Draft", description: "A Regal court writ redeemable for archive fees, sealed copies, transcript searches, and restricted legal documents. Banks treat it like a service draft rather than coin, but it is accepted because courts enforce it. Backing: court service obligations. Bank note: bankable government draft.", acceptance: { default: "low", regal_empire: "high", mages_guild: "medium", freelancer_underworld: "medium" }, issuer: "Regal Chancery", backing: "court service obligations", legal_status: "bankable government draft", volatility: "steady", liquidity: "specialized", vault_sensitive: true },

    // Mushroom and Toad Civic Money
    mushroom_coin: { name: "Mushroom Coin", icon: "icon_mushroom_coin.png", iconFallback: "🍄", base_value: 0.5, home_faction: "mushroom_regency", type: "Fiat", description: "The old Mushroom Regency coin still circulates in markets, inns, warehouses, and tax offices. Its problem is not metal; its problem is trust. Banks accept it, but many now check which political faction stamped the last transfer. Backing: royal treasury remnants. Bank note: politically strained legal tender.", acceptance: { default: "low", mushroom_regency: "high", peach_loyalists: "medium", liberated_toads: "medium", beanbean_kingdom: "medium" }, issuer: "Mushroom Regency", backing: "royal treasury remnants", legal_status: "politically strained legal tender", volatility: "shaky", liquidity: "regional" },
    peach_crown: { name: "Peach Crown", icon: "icon_mushroom_coin.png", iconFallback: "👑", base_value: 1.4, home_faction: "peach_loyalists", type: "Restoration Fiat", description: "A restoration coin issued by Peach Loyalists to pay soldiers, scouts, surgeons, and supply caravans. Loyalist banks honor it at full confidence; Regency banks accept it only when nobody official is watching. Backing: captured stores and restoration claims. Bank note: rebel tender; bankable in Loyalist areas.", acceptance: { default: "low", peach_loyalists: "high", liberated_toads: "medium", mushroom_regency: "low", regal_empire: "medium" }, issuer: "Peach Loyalist Treasury", backing: "captured stores and restoration claims", legal_status: "rebel tender; bankable in Loyalist areas", volatility: "volatile", liquidity: "regional" },
    toad_bond: { name: "Toad Bond", icon: "icon_mushroom_coin.png", iconFallback: "🍄", base_value: 0.75, home_faction: "liberated_toads", type: "Community Bond", description: "A serious rebuilding bond issued by Liberated Toad councils after the Vigilance barrel-trafficking crisis. It funds food, medicine, shelter, tools, prosthetics, and legal defense. Banks that refuse it are usually making a political statement. Backing: donations, recovered cargo, and community repayment. Bank note: bankable community bond in friendly markets.", acceptance: { default: "low", liberated_toads: "high", peach_loyalists: "medium", mushroom_regency: "medium", regal_empire: "low" }, issuer: "Liberated Toad councils", backing: "donations, recovered cargo, and community repayment", legal_status: "bankable community bond in friendly markets", volatility: "shaky", liquidity: "regional", vault_sensitive: true },
    relief_stamp: { name: "Relief Stamp", icon: "icon_mushroom_coin.png", iconFallback: "🎟️", base_value: 0.2, home_faction: "liberated_toads", type: "Voucher", description: "A ration and shelter voucher used by displaced Toad communities. Banks do not love vouchers, but relief banks and Loyalist quartermasters honor them because people need soup before monetary theory. Backing: ration stores and aid ledgers. Bank note: redeemable relief voucher.", acceptance: { default: "low", liberated_toads: "high", peach_loyalists: "high", mushroom_regency: "medium" }, issuer: "Liberated Toad relief offices", backing: "ration stores and aid ledgers", legal_status: "redeemable relief voucher", volatility: "steady", liquidity: "local", vault_sensitive: true },
    decree_strip: { name: "Decree Strip", icon: "icon_currency.png", iconFallback: "⚖️", base_value: 1.25, home_faction: "liberated_toads", type: "Legal Note", description: "A narrow legal note used to pay messengers, advocates, witnesses, and safehouse clerks connected to Speaker L’s resistance network. Bankers treat it as risky but real because witness networks can be stronger than kings. Backing: service promises and witness networks. Bank note: restricted resistance note.", acceptance: { default: "refused", liberated_toads: "high", peach_loyalists: "medium", regal_empire: "low" }, issuer: "Speaker L legal committees", backing: "service promises and witness networks", legal_status: "restricted resistance note", volatility: "volatile", liquidity: "specialized", black_market_relevant: true },
    beanbean_bean: { name: "Beanbean Bean", icon: "icon_currency.png", iconFallback: "🫘", base_value: 0.55, home_faction: "beanbean_kingdom", type: "Fiat", description: "A bean-shaped regional coin accepted along Mushroom trade roads. It is cheerful, annoying to stack, and surprisingly reliable. Banks like the consistency even when they dislike the joke molded into the edge. Backing: regional taxes and crop trade. Bank note: recognized regional tender.", acceptance: { default: "low", beanbean_kingdom: "high", mushroom_regency: "medium", peach_loyalists: "medium" }, issuer: "Beanbean Treasury", backing: "regional taxes and crop trade", legal_status: "recognized regional tender", volatility: "steady", liquidity: "regional" },

    // Private and Military Scrip
    wario_coin: { name: "Wario Coin", icon: "faction_wario.png", iconFallback: "🟡", base_value: 1.2, home_faction: "wario_land", type: "Private Fiat", description: "A private gold-weight coin stamped with Wario’s face. Wario Land banks honor it aggressively; other banks accept it after verifying weight and after sighing at the portrait. Wario insists the portrait increases value. Backing: private hoard reserves. Bank note: bankable private tender.", acceptance: { default: "low", wario_land: "high", freelancer_underworld: "medium", koopa_troop: "medium" }, issuer: "Wario", backing: "private hoard reserves", legal_status: "bankable private tender", volatility: "managed", liquidity: "regional" },
    wario_points: { name: "Wario Points", icon: "icon_quests.png", iconFallback: "🟡", base_value: 1.0, home_faction: "wario_land", type: "Shop Credit", description: "Quest-board points spendable at Wario’s shop economy. These are not XP and not normal coin; banks only honor them if they have a direct Wario settlement account. Wario likes this because it keeps customers trapped in his ecosystem. Backing: future shop inventory. Bank note: closed-loop shop credit.", acceptance: { default: "refused", wario_land: "high", disaster_inc: "medium" }, issuer: "Wario Quest Board", backing: "future shop inventory", legal_status: "closed-loop shop credit", volatility: "managed", liquidity: "closed", black_market_relevant: true, vault_sensitive: true, shop_spendable: true },
    bowser_bux: { name: "Bowser Bux", icon: "faction_koopa_troop.png", iconFallback: "🐢", base_value: 0.4, home_faction: "koopa_troop", type: "Military Scrip", description: "Koopa military scrip backed by fortresses, supply depots, and Bowser’s ability to make refusal feel unwise. Koopa banks accept it cleanly; outside banks apply discounts for political risk and fire damage. Backing: military stores and royal authority. Bank note: bankable in Koopa territory.", acceptance: { default: "refused", koopa_troop: "high", wario_land: "medium", freelancer_underworld: "low" }, issuer: "Koopa Treasury", backing: "military stores and royal authority", legal_status: "bankable in Koopa territory", volatility: "managed", liquidity: "regional", black_market_relevant: true },
    shell_credit: { name: "Shell Credit", icon: "faction_koopa_troop.png", iconFallback: "🐚", base_value: 0.65, home_faction: "koopa_troop", type: "Supply Credit", description: "A Koopa quartermaster credit redeemable for rations, repairs, ammunition, shell polish, and fortress supplies. Banks near Koopa territory accept it because supply credits can be converted into real goods quickly. Backing: warehouse inventory. Bank note: military supply credit.", acceptance: { default: "refused", koopa_troop: "high", wario_land: "medium" }, issuer: "Koopa Quartermasters", backing: "warehouse inventory", legal_status: "military supply credit", volatility: "steady", liquidity: "regional", black_market_relevant: true, vault_sensitive: true },

    // Island and Port Commodities
    banana_medallion: { name: "Banana Medallion", icon: "icon_dk_banana.png", iconFallback: "🏅", base_value: 2.4, home_faction: "dk_crew", type: "Trade Token", description: "A durable Kong Island token representing stored banana value. It exists because actual bananas vanish before long negotiations end. Banks like it more than fruit and less than gold, which is fair. Backing: stored harvest reserves. Bank note: bankable island token.", acceptance: { default: "low", dk_crew: "high", yoshi_clans: "medium", wario_land: "low" }, issuer: "Kong Island trade houses", backing: "stored harvest reserves", legal_status: "bankable island token", volatility: "seasonal", liquidity: "regional" },
    coconut_bar: { name: "Coconut Bar", icon: "icon_dk_banana.png", iconFallback: "🥥", base_value: 1.1, home_faction: "dk_crew", type: "Commodity Bar", description: "Pressed coconut oil and fiber value sealed into cargo bars for port exchange. Coastal banks accept it because it stores better than bananas and sells well to ships, kitchens, soap-makers, and potion shops. Backing: stored coconut oil and cargo demand. Bank note: bankable port commodity.", acceptance: { default: "low", dk_crew: "high", syrup_pirates: "medium", freelancer_underworld: "medium" }, issuer: "Kong dock cooperatives", backing: "stored coconut oil and cargo demand", legal_status: "bankable port commodity", volatility: "seasonal", liquidity: "port" },
    kremling_koin: { name: "Kremling Koin", icon: "icon_kremling_koin.png", iconFallback: "🐊", base_value: 0.6, home_faction: "kremling_krew", type: "Illicit Coin", description: "A crude raider coin. Most banks refuse it openly, but port banks with private rooms may exchange it at punishing rates after checking whether the coins were recently stolen from their own customers. Backing: stolen metal and raider markets. Bank note: black-market exchange only.", acceptance: { default: "refused", kremling_krew: "high", freelancer_underworld: "low", syrup_pirates: "low" }, issuer: "Kremling Krew", backing: "stolen metal and raider markets", legal_status: "black-market exchange only", volatility: "volatile", liquidity: "black market", black_market_relevant: true },
    doubloon: { name: "Syrup Doubloon", icon: "icon_gold.png", iconFallback: "🏴‍☠️", base_value: 1.8, home_faction: "syrup_pirates", type: "Pirate Coin", description: "A heavy coin used in pirate ports, shipyards, taverns, and cargo auctions. Legitimate banks discount it; port banks accept it because pretending pirates do not trade has never stopped pirates from trading. Backing: plunder shares and port trust. Bank note: bankable in ports; suspect inland.", acceptance: { default: "low", syrup_pirates: "high", freelancer_underworld: "medium", wario_land: "medium", regal_empire: "low" }, issuer: "Syrup pirate circles", backing: "plunder shares and port trust", legal_status: "bankable in ports; suspect inland", volatility: "volatile", liquidity: "port" },
    cargo_share: { name: "Cargo Share", icon: "icon_currency.png", iconFallback: "📦", base_value: 3.2, home_faction: "syrup_pirates", type: "Cargo Draft", description: "A draft against a specific cargo haul, prize, or warehouse lot. Banks accept it if the ship, cargo, captain, and dockmaster can all be verified, which means banks accept it less often than pirates claim. Backing: future cargo proceeds. Bank note: conditional port draft.", acceptance: { default: "refused", syrup_pirates: "high", freelancer_underworld: "medium", wario_land: "low" }, issuer: "Captain Syrup’s quartermasters", backing: "future cargo proceeds", legal_status: "conditional port draft", volatility: "wild", liquidity: "port", black_market_relevant: true, vault_sensitive: true },

    // Guild, Academy, and Digital Credits
    arcane_shard: { name: "Arcane Shard", icon: "icon_magic.png", iconFallback: "💎", base_value: 3.0, home_faction: "mages_guild", type: "Magical Commodity", description: "Crystallized magical energy used in enchanting, spellwork, repairs, and academy labs. Guild banks accept shards by grade. Ordinary banks accept them only if a mage signs that they will not explode. Backing: usable magical energy. Bank note: bankable graded component.", acceptance: { default: "low", mages_guild: "high", freelancer_underworld: "medium", shadow_estate: "medium" }, issuer: "Mages' Guild", backing: "usable magical energy", legal_status: "bankable graded component", volatility: "volatile", liquidity: "specialized" },
    guild_seal: { name: "Guild Seal", icon: "icon_magic.png", iconFallback: "🔮", base_value: 5.0, home_faction: "mages_guild", type: "Service Credit", description: "A stamped Mages’ Guild credit redeemable for components, archive access, repairs, tutoring, containment circles, and sanctioned spell services. It is respectable because the Guild says so loudly. Backing: guild labor and component stock. Bank note: bankable guild credit.", acceptance: { default: "low", mages_guild: "high", regal_empire: "medium", freelancer_underworld: "medium" }, issuer: "Mages' Guild", backing: "guild labor and component stock", legal_status: "bankable guild credit", volatility: "steady", liquidity: "specialized", vault_sensitive: true },
    transit_stamp: { name: "Transit Stamp", icon: "icon_magic.png", iconFallback: "🌀", base_value: 9.0, home_faction: "mages_guild", type: "Travel Credit", description: "A regulated planar transit credit used to reserve portal work, stabilize crossings, or pay emergency return fees. Banks treat it like a high-value travel draft because portal access is expensive and measurable. Backing: regulated portal services. Bank note: restricted bankable travel draft.", acceptance: { default: "refused", mages_guild: "high", regal_empire: "medium", feywild_courts: "low" }, issuer: "Mages' Guild Transit Office", backing: "regulated portal services", legal_status: "restricted bankable travel draft", volatility: "volatile", liquidity: "specialized", black_market_relevant: true, vault_sensitive: true },
    kivotos_credit: { name: "Kivotos Credit", icon: "factions/kivotos_gsu.png", iconFallback: "💠", base_value: 1.2, home_faction: "general_student_union", type: "Digital Fiat", description: "A stable academy-city credit used for tuition, cafeterias, weapons maintenance, club budgets, and student government emergencies. Midlands banks accept it only through digital-clearing partners. Backing: academy budgets and digital accounts. Bank note: bankable where digital clearing exists.", acceptance: { default: "low", general_student_union: "high", millennium_science_school: "high", trinity_general_school: "medium", freelancer_underworld: "medium" }, issuer: "General Student Union", backing: "academy budgets and digital accounts", legal_status: "bankable where digital clearing exists", volatility: "steady", liquidity: "networked" },
    data_chit: { name: "Data Chit", icon: "factions/kivotos_gsu.png", iconFallback: "💾", base_value: 2.6, home_faction: "millennium_science_school", type: "Data Credit", description: "A Millennium Science School chit redeemable for compute time, lab hours, robotics parts, and technical services. Banks exchange it when they can verify the ledger; otherwise it is a shiny rectangle with attitude. Backing: compute access and lab inventory. Bank note: bankable digital service credit.", acceptance: { default: "refused", millennium_science_school: "high", general_student_union: "medium", internet_federation: "medium" }, issuer: "Millennium Science School", backing: "compute access and lab inventory", legal_status: "bankable digital service credit", volatility: "steady", liquidity: "networked", black_market_relevant: true, vault_sensitive: true },
    credstick: { name: "Credstick", icon: "icon_currency.png", iconFallback: "💳", base_value: 1.1, home_faction: "internet_federation", type: "Digital", description: "Encrypted portable digital value. Excellent in networked markets, useless in a haunted swamp with no signal. Banks accept credsticks if they can authenticate the ledger and if nobody has chewed the port. Backing: encrypted account balances. Bank note: bankable digital money.", acceptance: { default: "low", internet_federation: "high", millennium_science_school: "high", freelancer_underworld: "medium" }, issuer: "Internet Federation", backing: "encrypted account balances", legal_status: "bankable digital money", volatility: "stable until offline", liquidity: "networked" },

    // Underworld and Syndicate Banking
    tea_chit: { name: "Tea Chit", icon: "icon_currency.png", iconFallback: "🍵", base_value: 1.6, home_faction: "tea_leaf_syndicate", type: "Syndicate Credit", description: "A coded Tea Leaf Syndicate chit. Legal banks refuse it at the counter and sometimes clear it through back doors. Big T and Chai understand the marks; that is the difference between currency and suspicious paper. Backing: syndicate ledgers and favor credit. Bank note: private-bank/black-market credit.", acceptance: { default: "refused", tea_leaf_syndicate: "high", freelancer_underworld: "medium", wario_land: "low" }, issuer: "Tea Leaf Syndicate", backing: "syndicate ledgers and favor credit", legal_status: "private-bank/black-market credit", volatility: "managed", liquidity: "black market", black_market_relevant: true, vault_sensitive: true },
    broker_mark: { name: "Broker Mark", icon: "icon_currency.png", iconFallback: "🕶️", base_value: 7.0, home_faction: "freelancer_underworld", type: "Info Credit", description: "An underworld mark redeemable for information, introductions, silence, or discreet delivery. It is accepted by shadow banks because secrets are liquid assets if the Broker says they are. Backing: verified secrets and underworld trust. Bank note: black-market bankable marker.", acceptance: { default: "refused", freelancer_underworld: "high", tea_leaf_syndicate: "medium", wario_land: "medium" }, issuer: "The Broker", backing: "verified secrets and underworld trust", legal_status: "black-market bankable marker", volatility: "volatile", liquidity: "black market", black_market_relevant: true, vault_sensitive: true },

    // Rakasha, Fey, and Provincial Exchange
    spirit_bead: { name: "Spirit Bead", icon: "icon_magic.png", iconFallback: "📿", base_value: 2.2, home_faction: "rakasha_tribes", type: "Cultural Token", description: "A Rakasha bead of shell, bone, amber, or spirit-touched stone. Banks near Rakasha territory accept bead strands by maker and story mark; foreign banks undervalue them because foreign banks lack manners. Backing: craft value and clan recognition. Bank note: bankable cultural token in local markets.", acceptance: { default: "low", rakasha_tribes: "high", peach_loyalists: "medium", feywild_courts: "medium" }, issuer: "Rakasha artisans", backing: "craft value and clan recognition", legal_status: "bankable cultural token in local markets", volatility: "steady", liquidity: "regional" },
    fey_acorn: { name: "Promise Acorn", icon: "icon_magic.png", iconFallback: "🌰", base_value: 6.0, home_faction: "feywild_courts", type: "Fey Credit", description: "A sealed Feywild promise condensed into an acorn. Banks accept it only in branches that understand fey contracts, and yes, Waluigi knows how that sentence sounds. Backing: binding fey obligation. Bank note: restricted bankable fey contract.", acceptance: { default: "refused", feywild_courts: "high", rakasha_tribes: "medium", mages_guild: "low" }, issuer: "Fey courts", backing: "binding fey obligation", legal_status: "restricted bankable fey contract", volatility: "wild", liquidity: "specialized", black_market_relevant: true, vault_sensitive: true },
    court_leaf: { name: "Court Leaf", icon: "icon_magic.png", iconFallback: "🍂", base_value: 3.8, home_faction: "feywild_courts", type: "Court Favor", description: "A gilded Feyward court leaf used for hospitality debts, formal apologies, and witnessed favors. It is bankable only when provenance is intact, because fey money without context is just a leaf with legal teeth. Backing: court favor and etiquette debt. Bank note: restricted court credit.", acceptance: { default: "refused", feywild_courts: "high", rakasha_tribes: "medium", mages_guild: "low" }, issuer: "Fey courts", backing: "court favor and etiquette debt", legal_status: "restricted court credit", volatility: "volatile", liquidity: "specialized", black_market_relevant: true },
    autumn_leaf: { name: "Autumnwood Mark", icon: "icon_currency.png", iconFallback: "🍂", base_value: 0.85, home_faction: "autumnwood_province", type: "Provincial Fiat", description: "A provincial mark used in Autumnwood orchards, timber markets, harvest tolls, and local court fees. Banks accept it because Lady Toriel’s administration has made local accounts boring, which is praise in finance. Backing: harvest taxes and timber rights. Bank note: local legal tender.", acceptance: { default: "low", autumnwood_province: "high", regal_empire: "medium", feywild_courts: "medium" }, issuer: "Autumnwood Province", backing: "harvest taxes and timber rights", legal_status: "local legal tender", volatility: "seasonal", liquidity: "regional" },

    // Shadow and Occult Banking
    blood_vial: { name: "Blood Vial", icon: "faction_onyx_hand.png", iconFallback: "🩸", base_value: 2.5, home_faction: "onyx_hand", type: "Occult Commodity", description: "A sealed vial of preserved blood used in vampire markets and certain ritual economies. Normal banks refuse it; Crimson Ledger-style banks accept it by potency, age, source, and whether the clerk survives opening the drawer. Backing: ritual potency and vampire demand. Bank note: restricted occult bank commodity.", acceptance: { default: "refused", onyx_hand: "high", shadow_estate: "high", freelancer_underworld: "low" }, issuer: "Onyx Hand blood-keepers", backing: "ritual potency and vampire demand", legal_status: "restricted occult bank commodity", volatility: "volatile", liquidity: "black market", black_market_relevant: true },
    soul_coin: { name: "Soul Coin", icon: "faction_onyx_hand.png", iconFallback: "😈", base_value: 20.0, home_faction: null, type: "Occult Coin", description: "A lower-plane coin containing a trapped soul. It is bankable only in the worst banks, which means it is very bankable somewhere and should make everyone feel worse about economics. Backing: bound soul value. Bank note: banned except occult banks.", acceptance: { default: "refused", onyx_hand: "medium", shadow_estate: "medium", freelancer_underworld: "low" }, issuer: "Infernal creditors", backing: "bound soul value", legal_status: "banned except occult banks", volatility: "volatile", liquidity: "black market", black_market_relevant: true },
    shadow_obol: { name: "Shadow Obol", icon: "faction_onyx_hand.png", iconFallback: "⚫", base_value: 3.5, home_faction: "shadow_estate", type: "Shadow Scrip", description: "Cold Shadow Estate scrip used by servants, hunters, archivists, imps, and other residents of a local economy that considers sunlight an auditing failure. Specialized banks accept it; cheerful banks do not. Backing: local service economy and fear. Bank note: bankable only in Shadowfell markets.", acceptance: { default: "refused", shadow_estate: "high", onyx_hand: "medium", freelancer_underworld: "low" }, issuer: "Shadow Estate ledgers", backing: "local service economy and fear", legal_status: "bankable only in Shadowfell markets", volatility: "shaky", liquidity: "local", black_market_relevant: true },
    vampire_marker: { name: "Vampire Marker", icon: "faction_onyx_hand.png", iconFallback: "🦇", base_value: 15.0, home_faction: "onyx_hand", type: "Favor Credit", description: "A formal favor marker from a vampire house. It is not cash, but old banks understand that enforceable social debt can be priced. The danger is that the price may include you. Backing: enforceable social debt. Bank note: predatory but bankable favor credit.", acceptance: { default: "refused", onyx_hand: "high", shadow_estate: "high", freelancer_underworld: "low" }, issuer: "Vampire houses", backing: "enforceable social debt", legal_status: "predatory but bankable favor credit", volatility: "wild", liquidity: "specialized", black_market_relevant: true, vault_sensitive: true },
    index_token: { name: "Index Token", icon: "icon_currency.png", iconFallback: "🗂️", base_value: 5.5, home_faction: "shadow_estate", type: "Archive Credit", description: "An Archivist token redeemable for indexed records, memory files, auction proofs, and restricted documentation inside Shadow Estate systems. Banks accept it only if they already trade in blackmail. Backing: restricted records and leverage. Bank note: specialized archive credit.", acceptance: { default: "refused", shadow_estate: "high", onyx_hand: "medium", mages_guild: "low" }, issuer: "Shadow Estate archives", backing: "restricted records and leverage", legal_status: "specialized archive credit", volatility: "shaky", liquidity: "local", black_market_relevant: true, vault_sensitive: true },

    // Foreign and Specialist Exchange
    dwarf_oathgold: { name: "Oathgold", icon: "factions/dwarfs.png", iconFallback: "⛏️", base_value: 4.0, home_faction: "kingdoms_of_the_dwarves_wh", type: "Metal", description: "Dwarven gold stamped with enforceable oath marks. Banks love the metal and fear the cultural consequences of mishandling it, which is exactly why Dwarven clients prefer it. Backing: gold weight and oath law. Bank note: premium bank reserve.", acceptance: { default: "medium", kingdoms_of_the_dwarves_wh: "high", regal_empire: "medium", mages_guild: "medium" }, issuer: "Dwarven holds", backing: "gold weight and oath law", legal_status: "premium bank reserve", volatility: "steady", liquidity: "wide" },
    warpstone: { name: "Warpstone Token", icon: "factions/skaven.png", iconFallback: "☢️", base_value: 10.0, home_faction: "skaven", type: "Hazard Commodity", description: "A refined token of magical chaos. Almost every lawful bank refuses it at the counter; arcane black banks buy it through containment windows and charge enough fees to imply moral panic. Backing: dangerous magical power. Bank note: illegal hazardous commodity.", acceptance: { default: "refused", skaven: "high", freelancer_underworld: "low", mages_guild: "refused" }, issuer: "Skaven under-markets", backing: "dangerous magical power", legal_status: "illegal hazardous commodity", volatility: "wild", liquidity: "black market", black_market_relevant: true },
    astral_pearl: { name: "Astral Pearl", icon: "icon_magic.png", iconFallback: "🫧", base_value: 12.0, home_faction: null, type: "Planar Commodity", description: "A pearl formed in astral currents around divine, psychic, or planar turbulence. Mages, navigators, and high-end banks value it because rarity plus utility equals collateral. Backing: rare planar navigation value. Bank note: bankable rare commodity.", acceptance: { default: "low", mages_guild: "high", freelancer_underworld: "medium", regal_empire: "medium" }, issuer: "Astral salvagers", backing: "rare planar navigation value", legal_status: "bankable rare commodity", volatility: "volatile", liquidity: "specialized" },
    rupee: { name: "Rupee", icon: "icon_rupee.png", iconFallback: "💚", base_value: 0.7, home_faction: "kingdom_of_gondor", type: "Gem Money", description: "A cut gemstone currency from Hyrulean-style markets. Banks accept rupees as gem currency after grading color and clarity, then pretend they understood the color-value chart all along. Backing: cut gemstone value. Bank note: bankable foreign gem tender.", acceptance: { default: "low", kingdom_of_gondor: "high", freelancer_underworld: "medium" }, issuer: "Hyrulean gem markets", backing: "cut gemstone value", legal_status: "bankable foreign gem tender", volatility: "seasonal", liquidity: "regional" },
    poke_dollar: { name: "PokéDollar", icon: "icon_pokedollar.png", iconFallback: "₽", base_value: 0.6, home_faction: "pokemon_league", type: "Fiat", description: "League-regulated trainer currency used for clinics, travel, prize payouts, and shops. Banks accept it where League accounts can clear; elsewhere it becomes a novelty until a trainer pays in bulk. Backing: league taxes and clinic economy. Bank note: bankable foreign fiat.", acceptance: { default: "low", pokemon_league: "high", internet_federation: "medium" }, issuer: "Pokémon League", backing: "league taxes and clinic economy", legal_status: "bankable foreign fiat", volatility: "steady", liquidity: "regional" },
    mora: { name: "Mora", icon: "icon_mora.png", iconFallback: "🪨", base_value: 1.3, home_faction: "teyvat_hegemony", type: "Fiat", description: "Teyvat’s common mint coin. It is popular with banks because it has deep trade habits, reliable minting, and enough merchant tradition to make arguments short. Backing: continental trade confidence. Bank note: bankable foreign fiat.", acceptance: { default: "medium", teyvat_hegemony: "high", regal_empire: "medium", freelancer_underworld: "medium" }, issuer: "Liyue minting authorities", backing: "continental trade confidence", legal_status: "bankable foreign fiat", volatility: "steady", liquidity: "wide" },
    toad_whistle: { name: "Courier Whistle", icon: "icon_mushroom_coin.png", iconFallback: "📯", base_value: 0.3, home_faction: "toad_network", type: "Service Token", description: "A Toad Network token redeemable for courier priority, route notes, civic messages, and small delivery favors. Local banks accept batches from known couriers because movement has measurable value. Backing: delivery labor and trusted routes. Bank note: bankable civic service token.", acceptance: { default: "low", toad_network: "high", mushroom_regency: "medium", liberated_toads: "medium", peach_loyalists: "medium" }, issuer: "Toad Network couriers", backing: "delivery labor and trusted routes", legal_status: "bankable civic service token", volatility: "steady", liquidity: "local" },

};

const WALLET_DATA = {
    archie: { name: "Archie Miser", currencies: { gold: 314, copper: 200, soul_coin: 3 } },
    bowser: { name: "Bowser", currencies: { gold: 15, bowser_bux: 50000, wario_coin: 500 } },
    hjumpik: { name: "hjumpik", currencies: { midland_ducat: 421, gold: 1, dwarf_oathgold: 2 } },
    markop: { name: "Markop Judi", currencies: { copper: 28, silver: 13, gold: 21, imperial_crown: 20 } },
    remi: { name: "Remi", currencies: { kivotos_credit: 5000, gold: 15, silver: 1 } },
    wario: { name: "Wario", currencies: { gold: 25, wario_coin: 10000, wario_points: 5000 } },
    waluigi: { name: "Waluigi", currencies: { gold: 83, guild_seal: 2, archive_writ: 1 } },
    toad_lee: { name: "Toad Lee", currencies: { toad_bond: 20, relief_stamp: 120, peach_crown: 5, silver: 40, toad_whistle: 6 } },
    salam: { name: "Salam", currencies: { toad_bond: 8, relief_stamp: 25, silver: 30 } },
    the_broker: { name: "The Broker", currencies: { broker_mark: 40, gold: 300, tea_chit: 12 } }
};

let economicHubs = [];
let selectedMarketId = '';

// --- LOGIC ---

function findPoiById(poiId) {
    for (const mapKey in MAP_DATA) {
        if (MAP_DATA[mapKey].pointsOfInterest) {
            const poi = MAP_DATA[mapKey].pointsOfInterest.find(p => p.id === poiId);
            if (poi) return poi;
        }
    }
    return null;
}

function getLocalCurrency(poi) {
    if (!poi || !poi.factionId) return 'midland_ducat'; // Default to a common currency
    const factionCurrency = Object.keys(CURRENCY_DATA).find(key => CURRENCY_DATA[key].home_faction === poi.factionId);
    return factionCurrency || 'midland_ducat';
}

function getCurrencyAcceptance(currencyKey, marketFactionId) {
    const currency = CURRENCY_DATA[currencyKey];
    if (!currency) return 'refused';
    const factionRules = currency.acceptance;
    // Specific faction rule > Home faction bonus > Default
    if (factionRules[marketFactionId]) return factionRules[marketFactionId];
    if (currency.home_faction === marketFactionId) return 'high';
    return factionRules.default || 'low';
}

function getExchangeRate(fromKey, toKey, locationId) {
    if (fromKey === toKey) return 1;

    const fromCurrency = CURRENCY_DATA[fromKey];
    const toCurrency = CURRENCY_DATA[toKey];
    const poi = findPoiById(locationId);
    
    if (!fromCurrency || !toCurrency || !poi) return 0;
    
    const baseRate = fromCurrency.base_value / toCurrency.base_value;
    
    const economyMod = 1 + ((poi.economic_value || 5) - 5) * 0.05; // -20% to +20%
    
    let factionMod = 1.0;
    if (fromCurrency.home_faction === poi.factionId) factionMod *= 1.05;
    if (toCurrency.home_faction === poi.factionId) factionMod *= 0.95;

    const acceptance = getCurrencyAcceptance(fromKey, poi.factionId);
    const acceptanceValues = { high: 1.0, medium: 1.1, low: 1.5, refused: Infinity };
    const acceptanceMod = acceptanceValues[acceptance] || 1.1;

    const finalRate = (baseRate * economyMod * factionMod) / acceptanceMod;
    
    return isFinite(finalRate) ? finalRate : 0;
}

// --- RENDERING ---

function populateLocationSelector() {
    const selector = document.getElementById('market-selector');
    if (!selector) return;
    const hubTypes = ['capital_city', 'major_city', 'port', 'market', 'trade_post'];
    let allHubs = [];
    for (const mapKey in MAP_DATA) {
        if (MAP_DATA[mapKey].pointsOfInterest) {
            allHubs.push(...MAP_DATA[mapKey].pointsOfInterest.filter(poi => hubTypes.includes(poi.type) && poi.economic_value >= 7));
        }
    }
    // FIX: De-duplicate locations by name
    economicHubs = Array.from(new Map(allHubs.map(hub => [hub.name, hub])).values());
    economicHubs.sort((a, b) => a.name.localeCompare(b.name));

    selector.innerHTML = economicHubs.map(poi => `<option value="${poi.id}">${poi.name}</option>`).join('');
    
    selectedMarketId = economicHubs.find(h => h.id === 'poi_mid_capital_district')?.id || economicHubs[0]?.id || '';
    selector.value = selectedMarketId;
}

function renderMarketRates() {
    const container = document.getElementById('market-rates-container');
    const title = document.getElementById('market-rates-title');
    if (!container || !selectedMarketId) return;

    const marketPoi = findPoiById(selectedMarketId);
    const localCurrencyKey = getLocalCurrency(marketPoi);
    const localCurrency = CURRENCY_DATA[localCurrencyKey];
    title.textContent = `Market Rates in ${marketPoi.name} (vs. 1 ${localCurrency.name})`;

    // Display ALL currencies
    container.innerHTML = Object.keys(CURRENCY_DATA).sort((a,b) => CURRENCY_DATA[a].name.localeCompare(CURRENCY_DATA[b].name))
    .map(key => {
        const currency = CURRENCY_DATA[key];
        if (!currency || key === localCurrencyKey) return ''; // Don't show local currency against itself
        
        const rate = getExchangeRate(key, localCurrencyKey, selectedMarketId);
        const acceptance = getCurrencyAcceptance(key, marketPoi.factionId);

        return `
            <div class="rate-item" data-currency-key="${key}">
                <img src="${currency.icon}" alt="${currency.name}">
                <div class="rate-info">
                    <div class="currency-name">${currency.name}</div>
                    <div class="rate-value">${rate > 0 ? rate.toFixed(3) : 'N/A'}</div>
                </div>
                <div class="acceptance-indicator acceptance-${acceptance}">
                    <div class="acceptance-dot"></div>
                    <span>${acceptance.charAt(0).toUpperCase() + acceptance.slice(1)}</span>
                </div>
            </div>
        `;
    }).join('');
}

function renderConverter() {
    const container = document.getElementById('exchange-rate-converter');
    if (!container) return;
    const sortedCurrencies = Object.entries(CURRENCY_DATA).sort(([,a],[,b]) => a.name.localeCompare(b.name));
    const optionsHTML = sortedCurrencies.map(([key, data]) => `<option value="${key}">${data.name}</option>`).join('');
    container.innerHTML = `
        <div class="converter-row">
            <input type="number" id="convert-from-amount" value="1" min="0">
            <select id="convert-from-currency">${optionsHTML}</select>
        </div>
        <div class="converter-equals">≈</div>
        <div class="converter-row">
            <span id="convert-to-amount">?</span>
            <select id="convert-to-currency">${optionsHTML}</select>
        </div>
    `;
    document.getElementById('convert-from-currency').value = 'gold';
    document.getElementById('convert-to-currency').value = 'midland_ducat';
    updateConverter();
}

function renderWallets() {
    const container = document.getElementById('wallets-container');
    if (!container) return;
    const referenceCurrency = 'midland_ducat';

    container.innerHTML = Object.values(WALLET_DATA).map(wallet => {
        let totalValueInReference = 0;
        const currencyLinesHTML = Object.entries(wallet.currencies).map(([currencyKey, amount]) => {
            const currency = CURRENCY_DATA[currencyKey];
            if (!currency) return '';
            totalValueInReference += amount * (currency.base_value / (CURRENCY_DATA[referenceCurrency]?.base_value || 1));
            return `
                <div class="currency-line-item">
                    <img src="${currency.icon}" alt="${currency.name}">
                    <span class="currency-amount">${amount.toLocaleString()}</span>
                    <span class="currency-name">${currency.name}</span>
                </div>`;
        }).join('');

        return `
            <div class="currency-card wallet-card">
                <h4 class="wallet-header">${wallet.name}</h4>
                <div class="wallet-contents">${currencyLinesHTML}</div>
                <div class="total-value-container">
                    <p>Est. Value in Ducats: <span class="total-value">${totalValueInReference.toFixed(2)}</span></p>
                </div>
            </div>`;
    }).join('');
}

function updateConverter() {
    const fromAmount = parseFloat(document.getElementById('convert-from-amount').value) || 0;
    const fromKey = document.getElementById('convert-from-currency').value;
    const toKey = document.getElementById('convert-to-currency').value;
    const toAmountSpan = document.getElementById('convert-to-amount');
    const rate = getExchangeRate(fromKey, toKey, selectedMarketId);
    const result = fromAmount * rate;
    toAmountSpan.textContent = result > 0 ? result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 }) : 'N/A';
}

function setupEventListeners() {
    const marketSelector = document.getElementById('market-selector');
    const converter = document.getElementById('exchange-rate-converter');
    const tooltip = document.getElementById('currency-tooltip');
    const marketRatesContainer = document.getElementById('market-rates-container');

    if (marketSelector) {
        marketSelector.addEventListener('change', () => {
            selectedMarketId = marketSelector.value;
            renderMarketRates();
            updateConverter();
        });
    }
    if (converter) {
        converter.addEventListener('input', updateConverter);
        converter.addEventListener('change', updateConverter);
    }
    if (marketRatesContainer && tooltip) {
        marketRatesContainer.addEventListener('mouseover', e => {
            const rateItem = e.target.closest('.rate-item');
            if (rateItem) {
                const currency = CURRENCY_DATA[rateItem.dataset.currencyKey];
                tooltip.innerHTML = `
                    <div class="tooltip-title">${currency.name}</div>
                    <div class="tooltip-description">${currency.description}</div>
                    <div class="tooltip-type">Type: ${currency.type}</div>
                `;
                tooltip.classList.add('visible');
            }
        });
        marketRatesContainer.addEventListener('mousemove', e => {
            if (tooltip.classList.contains('visible')) {
                tooltip.style.left = `${e.clientX + 15}px`;
                tooltip.style.top = `${e.clientY + 15}px`;
            }
        });
        marketRatesContainer.addEventListener('mouseout', e => {
            if (e.target.closest('.rate-item')) {
                tooltip.classList.remove('visible');
            }
        });
    }
}

function init() {
    populateLocationSelector();
    renderMarketRates();
    renderConverter();
    renderWallets();
    setupEventListeners();
}

init();
// Image List
// icon_gold.png
// icon_silver.png
// icon_copper.png
// icon_midland_ducat.png
// icon_currency.png
// faction_iron_legion.png
// faction_onyx_hand.png
// faction_moonfang_pack.png
// icon_magic.png
// icon_mushroom_coin.png
// icon_quests.png
// faction_koopa_troop.png
// icon_dk_banana.png
// icon_kremling_koin.png
// factions/kivotos_gsu.png
// factions/empire.png
// factions/dwarfs.png
// factions/skaven.png
// faction_wario.png
// icon_rupee.png
// icon_pokedollar.png
// icon_mora.png

// New campaign currencies use existing icons as fallbacks:
// Wario Points, Freeloader Zero Notes, Wario Mirror Liens, Waluigi Case Marks,
// Disaster Inc. IOUs, Liberated Toad Bonds, Relief Stamps, Shadow Obols,
// Umbral Shards, Vampire Favors, Tea Leaf Chits, Rakasha Spirit Beads,
// Pirate Doubloons, Koopa Shell Credits, Feywild Promise Acorns, Astral Pearls,
// Royal Archive Writs
