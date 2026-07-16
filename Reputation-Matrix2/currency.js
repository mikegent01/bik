// currency.js — Player-intuitive currency system v2
// No complex market clicks by default. Tiered, gold-equivalent first.
// Data source: ./data/currencies.json (intuitive) + fallback to embedded.
// Also loads banking.json for bank accounts.

export const CURRENCIES = {
  gold: { id:"gold", name:"Gold Piece", icon:"💰", base_value:1.0, tier:1, category:"core", type:"Metal", volatility:"steady", liquidity:"universal", acceptance_default:"high", acceptance:{default:"high"}, home_faction:null, short:"Universal reserve. 1 gold = 10 silver = 100 copper.", description:"Universal trade gold. Banks accept because weight, purity, greed are internationally understood.", issuer:"Many mints", spendable_in:["everywhere"] },
  silver: { id:"silver", name:"Silver Piece", icon:"🪙", base_value:0.1, tier:1, category:"core", type:"Metal", volatility:"steady", liquidity:"universal", acceptance_default:"high", acceptance:{default:"high"}, home_faction:null, short:"Everyday coin. 1 silver = 10 copper.", description:"Everyday trade silver. Common for wages, road expenses. Farmers trust coin they can bite.", issuer:"Many mints", spendable_in:["markets"] },
  copper: { id:"copper", name:"Copper Bit", icon:"🟤", base_value:0.01, tier:1, category:"core", type:"Metal", volatility:"steady", liquidity:"universal", acceptance_default:"high", acceptance:{default:"high"}, home_faction:null, short:"Small change. Bread, candles, ferry tips.", description:"Low-value street currency.", issuer:"Local mints", spendable_in:["street"] },
  midland_ducat: { id:"midland_ducat", name:"Midland Ducat", icon:"🦁", base_value:0.9, tier:1, category:"imperial", type:"Fiat", volatility:"steady", liquidity:"wide", acceptance_default:"medium", acceptance:{default:"medium", regal_empire:"high", iron_legion:"high"}, home_faction:"regal_empire", short:"Regal Empire standard. Stable, boring — works.", description:"Regal Empire main bank coin: stable, standardized.", issuer:"Regal Treasury", spendable_in:["regal_empire","banks"] },
  imperial_crown: { id:"imperial_crown", name:"Imperial Crown", icon:"👑", base_value:1.1, tier:1, category:"imperial", type:"Fiat", volatility:"steady", liquidity:"wide", acceptance_default:"medium", acceptance:{default:"medium", the_empire:"high"}, home_faction:"the_empire", short:"Heavy state coin. Strong foreign exchange.", description:"Heavy state coin backed by army, tax office.", issuer:"Empire Treasury", spendable_in:["empire","banks"] },
  dwarf_oathgold: { id:"dwarf_oathgold", name:"Oathgold", icon:"⛏️", base_value:4.0, tier:1, category:"imperial", type:"Metal", volatility:"steady", liquidity:"wide", acceptance_default:"medium", acceptance:{default:"medium", kingdoms_of_the_dwarves_wh:"high"}, home_faction:"kingdoms_of_the_dwarves_wh", short:"Dwarven oath-stamped gold. Premium. 1=4 gold.", description:"Dwarven gold stamped with oath marks.", issuer:"Dwarven holds", spendable_in:["banks"] },
  mora: { id:"mora", name:"Mora", icon:"🪨", base_value:1.3, tier:1, category:"imperial", type:"Fiat", volatility:"steady", liquidity:"wide", acceptance_default:"medium", acceptance:{default:"medium", teyvat_hegemony:"high"}, home_faction:"teyvat_hegemony", short:"Teyvat common mint. Trusted foreign.", description:"Teyvat common mint coin.", issuer:"Liyue mint", spendable_in:["teyvat","banks"] },
  mushroom_coin: { id:"mushroom_coin", name:"Mushroom Coin", icon:"🍄", base_value:0.5, tier:2, category:"regional", type:"Fiat", volatility:"shaky", liquidity:"regional", acceptance_default:"low", acceptance:{default:"low", mushroom_regency:"high", peach_loyalists:"medium"}, home_faction:"mushroom_regency", short:"Old Regency coin. Politically strained but works.", description:"Old Mushroom Regency coin still circulates.", issuer:"Mushroom Regency", spendable_in:["mushroom_kingdom"] },
  peach_crown: { id:"peach_crown", name:"Peach Crown", icon:"🍑", base_value:1.4, tier:2, category:"regional", type:"Restoration Fiat", volatility:"volatile", liquidity:"regional", acceptance_default:"low", acceptance:{default:"low", peach_loyalists:"high"}, home_faction:"peach_loyalists", short:"Rebel restoration coin. Strong in Loyalist banks.", description:"Restoration coin issued by Peach Loyalists.", issuer:"Peach Loyalist Treasury", spendable_in:["peach_loyalists"] },
  toad_bond: { id:"toad_bond", name:"Toad Bond", icon:"🤝", base_value:0.75, tier:2, category:"regional", type:"Community Bond", volatility:"shaky", liquidity:"regional", acceptance_default:"low", acceptance:{default:"low", liberated_toads:"high"}, home_faction:"liberated_toads", short:"Rebuilding bond for food, medicine, shelter.", description:"Rebuilding bond issued by Liberated Toad councils.", issuer:"Liberated Toad councils", spendable_in:["liberated_toads"] },
  relief_stamp: { id:"relief_stamp", name:"Relief Stamp", icon:"🎟️", base_value:0.2, tier:2, category:"regional", type:"Voucher", volatility:"steady", liquidity:"local", acceptance_default:"low", acceptance:{default:"low", liberated_toads:"high"}, home_faction:"liberated_toads", short:"Ration & shelter voucher.", description:"Ration and shelter voucher used by displaced Toad communities.", issuer:"Liberated Toad relief", spendable_in:["relief"] },
  beanbean_bean: { id:"beanbean_bean", name:"Beanbean Bean", icon:"🫘", base_value:0.55, tier:2, category:"regional", type:"Fiat", volatility:"steady", liquidity:"regional", acceptance_default:"low", acceptance:{default:"low", beanbean_kingdom:"high"}, home_faction:"beanbean_kingdom", short:"Bean-shaped coin. Reliable.", description:"Bean-shaped regional coin.", issuer:"Beanbean Treasury", spendable_in:["beanbean"] },
  wario_coin: { id:"wario_coin", name:"Wario Coin", icon:"🟡", base_value:1.2, tier:2, category:"private", type:"Private Fiat", volatility:"managed", liquidity:"regional", acceptance_default:"low", acceptance:{default:"low", wario_land:"high"}, home_faction:"wario_land", short:"Wario face gold coin. 1.2 gold.", description:"Private gold-weight coin stamped with Wario's face.", issuer:"Wario", spendable_in:["wario_land"] },
  bowser_bux: { id:"bowser_bux", name:"Bowser Bux", icon:"🐢", base_value:0.4, tier:2, category:"private", type:"Military Scrip", volatility:"managed", liquidity:"regional", acceptance_default:"refused", acceptance:{default:"refused", koopa_troop:"high"}, home_faction:"koopa_troop", short:"Koopa military scrip. Backed by fortresses.", description:"Koopa military scrip.", issuer:"Koopa Treasury", spendable_in:["koopa"] },
  banana_medallion: { id:"banana_medallion", name:"Banana Medallion", icon:"🏅", base_value:2.4, tier:2, category:"regional", type:"Trade Token", volatility:"seasonal", liquidity:"regional", acceptance_default:"low", acceptance:{default:"low", dk_crew:"high"}, home_faction:"dk_crew", short:"Kong Island token. Doesn't rot.", description:"Durable Kong Island token representing stored banana value.", issuer:"Kong trade houses", spendable_in:["dk_isles","ports"] },
  doubloon: { id:"doubloon", name:"Syrup Doubloon", icon:"🏴‍☠️", base_value:1.8, tier:2, category:"regional", type:"Pirate Coin", volatility:"volatile", liquidity:"port", acceptance_default:"low", acceptance:{default:"low", syrup_pirates:"high"}, home_faction:"syrup_pirates", short:"Pirate port heavy coin.", description:"Heavy coin used in pirate ports.", issuer:"Syrup pirates", spendable_in:["ports"] },
  arcane_shard: { id:"arcane_shard", name:"Arcane Shard", icon:"💎", base_value:3.0, tier:3, category:"guild", type:"Magical Commodity", volatility:"volatile", liquidity:"specialized", acceptance_default:"low", acceptance:{default:"low", mages_guild:"high"}, home_faction:"mages_guild", short:"Crystallized magic. Graded.", description:"Crystallized magical energy used in enchanting.", issuer:"Mages' Guild", spendable_in:["mages_guild","labs"] },
  guild_seal: { id:"guild_seal", name:"Guild Seal", icon:"🔮", base_value:5.0, tier:3, category:"guild", type:"Service Credit", volatility:"steady", liquidity:"specialized", acceptance_default:"low", acceptance:{default:"low", mages_guild:"high"}, home_faction:"mages_guild", short:"Mages Guild credit for components. 5 gold.", description:"Stamped Mages' Guild credit.", issuer:"Mages' Guild", spendable_in:["mages_guild"] },
  kivotos_credit: { id:"kivotos_credit", name:"Kivotos Credit", icon:"💠", base_value:1.2, tier:3, category:"digital", type:"Digital Fiat", volatility:"steady", liquidity:"networked", acceptance_default:"low", acceptance:{default:"low", general_student_union:"high"}, home_faction:"general_student_union", short:"Academy-city credit.", description:"Stable academy-city credit.", issuer:"General Student Union", spendable_in:["kivotos","digital"] },
  credstick: { id:"credstick", name:"Credstick", icon:"💳", base_value:1.1, tier:3, category:"digital", type:"Digital", volatility:"stable until offline", liquidity:"networked", acceptance_default:"low", acceptance:{default:"low", internet_federation:"high"}, home_faction:"internet_federation", short:"Encrypted portable digital value.", description:"Encrypted portable digital value.", issuer:"Internet Federation", spendable_in:["internet"] },
  spirit_bead: { id:"spirit_bead", name:"Spirit Bead", icon:"📿", base_value:2.2, tier:3, category:"cultural", type:"Cultural Token", volatility:"steady", liquidity:"regional", acceptance_default:"low", acceptance:{default:"low", rakasha_tribes:"high"}, home_faction:"rakasha_tribes", short:"Rakasha bead. Maker mark matters.", description:"Rakasha bead of shell, bone, amber.", issuer:"Rakasha artisans", spendable_in:["rakasha"] },
  toad_whistle: { id:"toad_whistle", name:"Courier Whistle", icon:"📯", base_value:0.3, tier:3, category:"cultural", type:"Service Token", volatility:"steady", liquidity:"local", acceptance_default:"low", acceptance:{default:"low", toad_network:"high"}, home_faction:"toad_network", short:"Toad courier priority token.", description:"Toad Network token redeemable for courier priority.", issuer:"Toad Network", spendable_in:["toad_network"] },
  soul_coin: { id:"soul_coin", name:"Soul Coin", icon:"😈", base_value:20.0, tier:4, category:"occult", type:"Occult Coin", volatility:"volatile", liquidity:"black market", acceptance_default:"refused", acceptance:{default:"refused", onyx_hand:"medium"}, home_faction:null, short:"Lower-plane coin with trapped soul. +20 gold but moral cost.", description:"Lower-plane coin containing trapped soul.", issuer:"Infernal creditors", spendable_in:["occult"] },
  blood_vial: { id:"blood_vial", name:"Blood Vial", icon:"🩸", base_value:2.5, tier:4, category:"occult", type:"Occult Commodity", volatility:"volatile", liquidity:"black market", acceptance_default:"refused", acceptance:{default:"refused", onyx_hand:"high"}, home_faction:"onyx_hand", short:"Sealed preserved blood. Vampire markets only.", description:"Sealed vial of preserved blood used in vampire markets.", issuer:"Onyx Hand", spendable_in:["vampire"] },
  warpstone: { id:"warpstone", name:"Warpstone Token", icon:"☢️", base_value:10.0, tier:4, category:"occult", type:"Hazard Commodity", volatility:"wild", liquidity:"black market", acceptance_default:"refused", acceptance:{default:"refused", skaven:"high"}, home_faction:"skaven", short:"Refined chaos token. Illegal, corrupting, valuable.", description:"Refined token of magical chaos.", issuer:"Skaven under-markets", spendable_in:["black market"] },
  broker_mark: { id:"broker_mark", name:"Broker Mark", icon:"🕶️", base_value:7.0, tier:4, category:"syndicate", type:"Info Credit", volatility:"volatile", liquidity:"black market", acceptance_default:"refused", acceptance:{default:"refused", freelancer_underworld:"high"}, home_faction:"freelancer_underworld", short:"Underworld mark for info, silence.", description:"Underworld mark redeemable for information.", issuer:"The Broker", spendable_in:["freelancer_den"] },
  wario_points: { id:"wario_points", name:"Wario Points", icon:"⭐", base_value:1.0, tier:2, category:"private", type:"Shop Credit", volatility:"managed", liquidity:"closed", acceptance_default:"refused", acceptance:{default:"refused", wario_land:"high"}, home_faction:"wario_land", short:"Wario shop closed-loop credit.", description:"Quest-board points spendable at Wario's shop.", issuer:"Wario Quest Board", spendable_in:["wario_shop"] },
  // legacy support
  coconut_bar: { id:"coconut_bar", name:"Coconut Bar", icon:"🥥", base_value:1.1, tier:2, category:"regional", type:"Commodity Bar", volatility:"seasonal", liquidity:"port", acceptance_default:"low", acceptance:{default:"low", dk_crew:"high"}, home_faction:"dk_crew", short:"Pressed coconut oil bar.", description:"Pressed coconut oil and fiber value.", issuer:"Kong dock cooperatives", spendable_in:["ports"] },
  kremling_koin: { id:"kremling_koin", name:"Kremling Koin", icon:"🐊", base_value:0.6, tier:4, category:"syndicate", type:"Illicit Coin", volatility:"volatile", liquidity:"black market", acceptance_default:"refused", acceptance:{default:"refused", kremling_krew:"high"}, home_faction:"kremling_krew", short:"Raider coin. Stolen, suspect.", description:"Crude raider coin.", issuer:"Kremling Krew", spendable_in:["black market"] },
  cargo_share: { id:"cargo_share", name:"Cargo Share", icon:"📦", base_value:3.2, tier:3, category:"private", type:"Cargo Draft", volatility:"wild", liquidity:"port", acceptance_default:"refused", acceptance:{default:"refused", syrup_pirates:"high"}, home_faction:"syrup_pirates", short:"Draft against specific cargo haul.", description:"Draft against specific cargo haul.", issuer:"Captain Syrup", spendable_in:["ports"] },
  transit_stamp: { id:"transit_stamp", name:"Transit Stamp", icon:"🌀", base_value:9.0, tier:3, category:"guild", type:"Travel Credit", volatility:"volatile", liquidity:"specialized", acceptance_default:"refused", acceptance:{default:"refused", mages_guild:"high"}, home_faction:"mages_guild", short:"Planar transit credit. 9 gold.", description:"Regulated planar transit credit.", issuer:"Mages Guild Transit Office", spendable_in:["mages_guild"] },
  data_chit: { id:"data_chit", name:"Data Chit", icon:"💾", base_value:2.6, tier:3, category:"digital", type:"Data Credit", volatility:"steady", liquidity:"networked", acceptance_default:"refused", acceptance:{default:"refused", millennium_science_school:"high"}, home_faction:"millennium_science_school", short:"Millennium Science School chit.", description:"Chit redeemable for compute time, lab hours.", issuer:"Millennium Science School", spendable_in:["kivotos"] },
  tea_chit: { id:"tea_chit", name:"Tea Chit", icon:"🍵", base_value:1.6, tier:4, category:"syndicate", type:"Syndicate Credit", volatility:"managed", liquidity:"black market", acceptance_default:"refused", acceptance:{default:"refused", tea_leaf_syndicate:"high"}, home_faction:"tea_leaf_syndicate", short:"Tea Leaf Syndicate chit. Private-bank.", description:"Coded Tea Leaf Syndicate chit.", issuer:"Tea Leaf Syndicate", spendable_in:["black market"] },
  fey_acorn: { id:"fey_acorn", name:"Promise Acorn", icon:"🌰", base_value:6.0, tier:4, category:"cultural", type:"Fey Credit", volatility:"wild", liquidity:"specialized", acceptance_default:"refused", acceptance:{default:"refused", feywild_courts:"high"}, home_faction:"feywild_courts", short:"Sealed Feywild promise.", description:"Sealed Feywild promise condensed into acorn.", issuer:"Fey courts", spendable_in:["feywild"] },
  court_leaf: { id:"court_leaf", name:"Court Leaf", icon:"🍂", base_value:3.8, tier:4, category:"cultural", type:"Court Favor", volatility:"volatile", liquidity:"specialized", acceptance_default:"refused", acceptance:{default:"refused", feywild_courts:"high"}, home_faction:"feywild_courts", short:"Gilded Feyward court leaf.", description:"Gilded Feyward court leaf used for hospitality debts.", issuer:"Fey courts", spendable_in:["feywild"] },
  autumn_leaf: { id:"autumn_leaf", name:"Autumnwood Mark", icon:"🍃", base_value:0.85, tier:2, category:"cultural", type:"Provincial Fiat", volatility:"seasonal", liquidity:"regional", acceptance_default:"low", acceptance:{default:"low", autumnwood_province:"high"}, home_faction:"autumnwood_province", short:"Provincial mark. Timber, harvest.", description:"Provincial mark used in Autumnwood orchards.", issuer:"Autumnwood Province", spendable_in:["autumnwood"] },
  shadow_obol: { id:"shadow_obol", name:"Shadow Obol", icon:"⚫", base_value:3.5, tier:4, category:"occult", type:"Shadow Scrip", volatility:"shaky", liquidity:"local", acceptance_default:"refused", acceptance:{default:"refused", shadow_estate:"high"}, home_faction:"shadow_estate", short:"Cold Shadow Estate scrip.", description:"Cold Shadow Estate scrip used by servants, hunters.", issuer:"Shadow Estate", spendable_in:["shadow_estate"] },
  vampire_marker: { id:"vampire_marker", name:"Vampire Marker", icon:"🦇", base_value:15.0, tier:4, category:"occult", type:"Favor Credit", volatility:"wild", liquidity:"specialized", acceptance_default:"refused", acceptance:{default:"refused", onyx_hand:"high"}, home_faction:"onyx_hand", short:"Formal favor marker from vampire house.", description:"Formal favor marker from vampire house.", issuer:"Vampire houses", spendable_in:["onyx_hand"] },
  index_token: { id:"index_token", name:"Index Token", icon:"🗂️", base_value:5.5, tier:4, category:"occult", type:"Archive Credit", volatility:"shaky", liquidity:"local", acceptance_default:"refused", acceptance:{default:"refused", shadow_estate:"high"}, home_faction:"shadow_estate", short:"Archivist token for records, leverage.", description:"Archivist token redeemable for indexed records.", issuer:"Shadow Estate archives", spendable_in:["shadow_estate"] },
  astral_pearl: { id:"astral_pearl", name:"Astral Pearl", icon:"🫧", base_value:12.0, tier:3, category:"guild", type:"Planar Commodity", volatility:"volatile", liquidity:"specialized", acceptance_default:"low", acceptance:{default:"low", mages_guild:"high"}, home_faction:null, short:"Pearl formed in astral currents.", description:"Pearl formed in astral currents around divine turbulence.", issuer:"Astral salvagers", spendable_in:["mages_guild"] },
  rupee: { id:"rupee", name:"Rupee", icon:"💚", base_value:0.7, tier:2, category:"foreign", type:"Gem Money", volatility:"seasonal", liquidity:"regional", acceptance_default:"low", acceptance:{default:"low", kingdom_of_gondor:"high"}, home_faction:"kingdom_of_gondor", short:"Cut gemstone currency.", description:"Cut gemstone currency from Hyrulean markets.", issuer:"Hyrulean gem markets", spendable_in:["hyrule"] },
  poke_dollar: { id:"poke_dollar", name:"PokéDollar", icon:"₽", base_value:0.6, tier:2, category:"foreign", type:"Fiat", volatility:"steady", liquidity:"regional", acceptance_default:"low", acceptance:{default:"low", pokemon_league:"high"}, home_faction:"pokemon_league", short:"League-regulated trainer currency.", description:"League-regulated trainer currency used for clinics, travel.", issuer:"Pokémon League", spendable_in:["pokemon"] },
};

export const WALLETS = {
  waluigi: { name:"Waluigi", currencies:{ gold:83, guild_seal:2, archive_writ:1 } },
  archie: { name:"Archie Miser", currencies:{ gold:314, copper:200, soul_coin:3 } },
  bowser: { name:"Bowser", currencies:{ gold:15, bowser_bux:50000, wario_coin:500 } },
  wario: { name:"Wario", currencies:{ gold:25, wario_coin:10000, wario_points:5000 } },
  toad_lee: { name:"Toad Lee", currencies:{ toad_bond:20, relief_stamp:120, peach_crown:5, silver:40, toad_whistle:6 } },
  salam: { name:"Salam", currencies:{ toad_bond:8, relief_stamp:25, silver:30 } },
  markop: { name:"Markop Judi", currencies:{ copper:28, silver:13, gold:21, imperial_crown:20 } },
  remi: { name:"Remi", currencies:{ kivotos_credit:5000, gold:15, silver:1 } },
  hjumpik: { name:"Hjumpik", currencies:{ midland_ducat:421, gold:1, dwarf_oathgold:2 } },
  the_broker: { name:"The Broker", currencies:{ broker_mark:40, gold:300, tea_chit:12 } },
  captain_toadette: { name:"Captain Toadette", currencies:{ peach_crown:150, gold:50, silver:100 } },
  bonnie: { name:"Bonnie (test player)", currencies:{ gold:100, silver:250, midland_ducat:50, mushroom_coin:200, wario_coin:20 } }
};

export let BANKS = []; // loaded from banking.json at runtime

// Helpers — player intuitive
export function goldValue(id, amount=1){ const c=CURRENCIES[id]; return c?c.base_value*amount:0; }
export function acceptLevel(id, factionId){
  if(!factionId||factionId==='universal') return 'high';
  const c=CURRENCIES[id]; if(!c) return 'refused';
  const acc=c.acceptance||{default:'low'};
  if(acc[factionId]) return acc[factionId];
  if(c.home_faction===factionId) return 'high';
  return acc.default||'low';
}
export function penaltyFor(level){ return {high:1.0, medium:1.15, low:1.6, refused:99}[level]||1.2; }
export function convert(fromId,toId,amount=1,marketFaction='universal'){
  const f=CURRENCIES[fromId], t=CURRENCIES[toId];
  if(!f||!t) return 0;
  const base = f.base_value / t.base_value;
  if(!marketFaction||marketFaction==='universal') return base*amount;
  const acc=acceptLevel(fromId,marketFaction);
  const pen=penaltyFor(acc);
  if(pen>=99) return 0;
  return base*amount/pen;
}

// Load banks async — used by currency.html
export async function loadBanks(){
  try{
    const r=await fetch('./banking.json',{cache:'no-cache'});
    if(!r.ok) throw new Error('no banking.json');
    const j=await r.json();
    BANKS=j.bank_accounts||[];
    return j;
  }catch(e){
    return {bank_accounts:[], loans:[], debts:[]};
  }
}

// For backward compat with old code that expected MAP_DATA — no-op
export function getCurrencyAcceptance(key,faction){ return acceptLevel(key,faction); }
export function getExchangeRate(fromKey,toKey,locationId){
  // locationId may be poi id — we map to faction if possible via simple heuristic
  // For now, ignore locationId and use universal unless we have a faction map
  return convert(fromKey,toKey,1,'universal');
}
