#!/usr/bin/env python3
"""Expand Snowdin Bone-Line family-tree articles into full multi-section
dossiers (1,000-1,500 words each), replace stock dossier fields with
per-member content, and fill in intel-gated secrets.

Content lives in tools/data/:
  - boneline_articles_*.py  (id -> long-form Markdown article)
  - boneline_secrets.py     (id -> [ {intel, text}, ... ])

The long-form article is written to `description` in data/characters.json
(the lore source of truth) and mirrored into the `summary` field of the
member object in family-tree.js, following the same convention as
sync_boneline_lore_to_family_tree.py. Achievements/controversies/
relationships are replaced with per-member content, and member secrets are
replaced where SECRETS provides them. Run tools/sync_family_tree_secrets.py
afterward to mirror secrets back into characters.json.

Articles use light Markdown: paragraphs separated by blank lines and `## `
section headings, rendered by formatSummaryHTML() in family-tree.js.
Safe to re-run: all replacements are idempotent.
"""
from __future__ import annotations
import importlib.util
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TREE = ROOT / 'family-tree.js'
CHARACTERS = ROOT / 'data' / 'characters.json'
DATA_DIR = Path(__file__).resolve().parent / 'data'
START = 'snowdinBoneLine: {'
END = '    successionOrder: ['


def load_module(path: Path, name: str):
    spec = importlib.util.spec_from_file_location(name, path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def load_articles() -> dict:
    merged = {}
    for path in sorted(DATA_DIR.glob('boneline_articles_*.py')):
        mod = load_module(path, path.stem)
        merged.update(mod.ARTICLES)
    adjust_path = DATA_DIR / 'boneline_adjust.py'
    if adjust_path.exists():
        mod = load_module(adjust_path, 'boneline_adjust')
        for ident, extra in getattr(mod, 'APPEND', {}).items():
            merged[ident] = merged[ident].rstrip() + '\n\n' + extra.strip()
        for trim_attr in ('TRIM', 'TRIM2'):
            for ident, pairs in getattr(mod, trim_attr, {}).items():
                for old, new in pairs:
                    count = merged[ident].count(old)
                    assert count == 1, f'{trim_attr} anchor for {ident} matched {count} times: {old[:60]!r}'
                    merged[ident] = merged[ident].replace(old, new)
    return merged


def load_secrets() -> dict:
    mod = load_module(DATA_DIR / 'boneline_secrets.py', 'boneline_secrets')
    return mod.SECRETS

# ---------------------------------------------------------------------------
# Per-member dossier fields for family-tree.js
# ---------------------------------------------------------------------------
DOSSIER = {
"sans": dict(
    achievements=[
        "First to recognize the Mount Ebott expedition's forbidden Iron Legion protocols before Snowdin's guard understood the risk",
        "Maintains the sentry routes, spare meals, and careful silences that quietly protect the entire Bone-Line",
        "Keeps the household's old maintenance map of a sealed lower-Ebott relay",
    ],
    controversies=[
        "Refuses to explain how he appears at the end of roads no one saw him walk",
        "Knows substantially more about the Gaster Branch than he has ever shared with the registry",
    ],
    relationships=[
        {"person": "Papyrus", "type": "Brother", "notes": "Protected, teased, and translated for in equal measure; the quiet center of Sans's logistics."},
        {"person": "Wing Gaster", "type": "Unresolved Kin", "notes": "The subject of the sealed wing-sigil folder; Sans treats the name with a care he shows nothing else."},
        {"person": "Sans of the Dark World", "type": "Parallel Counterpart", "notes": "The only person in any world who gets the jokes; their visits end in conversations Sans has with no one else."},
    ],
),
"papyrus": dict(
    achievements=[
        "Holds Snowdin's puzzle corridor with zero recorded prisoners taken and many recorded enemies fed",
        "Built Spaghetti Friday into neutral ground for refugees, loyalists, and deserters from several campaigns",
        "Accepts every adoption claim presented to the household, with a 100% success rate to date",
    ],
    controversies=[
        "His recipe ledger contains markings he insists are noodle notes; the relief network disagrees",
        "Accepted a star's adoption claim on the strength of volume alone",
    ],
    relationships=[
        {"person": "Sans", "type": "Brother", "notes": "Sets a place for him at every meal of his life; considers Sans's laziness a brilliant strategy."},
        {"person": "Dedan", "type": "Patrol Partner", "notes": "The outer door's two halves: Dedan's suspicion and Papyrus's invitation."},
        {"person": "S' a Real Star", "type": "Adopted Kin", "notes": "Accepted the adoption claim instantly; considers it his finest diplomatic hour."},
    ],
),
"grandpa_semi": dict(
    achievements=[
        "Maintains the cedar chest, the household's oldest and least readable archive",
        "Preserved the sealed Wing Gaster folder intact through multiple crises",
        "Coined the household rule: you do not have to understand someone to leave them a seat",
    ],
    controversies=[
        "Refuses to classify Prunsel, a decision the registry has never forgiven",
        "Keeps entries deliberately unfinished, which archivists call sabotage and the family calls wisdom",
    ],
    relationships=[
        {"person": "Sans", "type": "Grandson (Household)", "notes": "Taught him the strategy of listening, pausing, and saying less."},
        {"person": "Papyrus", "type": "Grandson (Household)", "notes": "Taught him to save every invitation because someone might still say yes."},
        {"person": "Wing Gaster", "type": "Sealed Record", "notes": "Custodian of the wing-sigil folder; opens it only by household consensus."},
    ],
),
"lazybones": dict(
    achievements=[
        "Coordinates the household's invisible logistics: snacks, scarves, and cover stories",
        "Has answered household questions before they were fully asked, on multiple documented occasions",
        "Maintains perfect awareness of every family movement from a horizontal position",
    ],
    controversies=[
        "Refuses to explain any method behind their accuracy",
        "The registry suspects them of knowing things no sentry report contains; they decline comment, with eyes closed",
    ],
    relationships=[
        {"person": "Speen Kind of Down Lately", "type": "Cousin", "notes": "Keeps tea ready for him at all hours; the quiet corner is their joint project."},
        {"person": "Sans", "type": "Cousin", "notes": "The household's two best nappers; mutual respect, minimal words."},
        {"person": "Baby Bones", "type": "Household Kin", "notes": "The only person Baby Bones cannot wake, which Baby Bones considers a challenge."},
    ],
),
"baby_bones": dict(
    achievements=[
        "Named Pet Rock into full family membership in a single declarative rattle",
        "Conscripted Quantity as a family of uncles, binding in perpetuity",
        "Has successfully interrupted every category of household meeting on record",
    ],
    controversies=[
        "Genealogical placement unresolvable: too many relatives claim them at once",
        "Evacuation drills have been permanently re-paced to short legs, over the objections of no one",
    ],
    relationships=[
        {"person": "Papyrus", "type": "Guardian", "notes": "Prepares tiny plates, declares every demand reasonable, answers all questions with yes."},
        {"person": "Garbage Brother", "type": "Household Kin", "notes": "Source of the famous rattle; consulted on all salvage of a rattling nature."},
        {"person": "Pretty Soon", "type": "Household Kin", "notes": "The person who answers, convincingly, when Baby Bones asks if absent relatives are coming home."},
    ],
),
"dirty_brother": dict(
    achievements=[
        "Keeps Snowdin warm through every failure of its enchanted heating infrastructure",
        "Maintains the boiler-route network the relief effort uses when the surface is watched",
        "Preserved an ancient furnace rune the campaign's scholars are still arguing about",
    ],
    controversies=[
        "The rune's resemblance to Fawful-era machinery remains unresolved; he refuses supervised sketches",
        "Enjoys the 'cursed' rumors about the green sparks and will not correct them",
    ],
    relationships=[
        {"person": "Cursive", "type": "Cousin", "notes": "Writes his repair requests in calligraphy; the boiler shaft has received the household's most beautiful work orders."},
        {"person": "Will", "type": "Cousin", "notes": "Moves supplies through Dirty Brother's tunnels for Will's inventory; neither calls it smuggling."},
        {"person": "Dedan", "type": "Household Connection", "notes": "Guards the doors above while Dirty Brother maintains the roads below."},
    ],
),
"will": dict(
    achievements=[
        "Authored Snowdin's household evacuation plan, which includes everyone down to Pet Rock",
        "Has quietly fed displaced civilians from several campaign fronts out of one pantry",
        "Has de-escalated a double-digit number of Sans/Papyrus arguments with soup",
    ],
    controversies=[
        "The ledger's anonymous 'G.' deposits remain unexplained and filed that way deliberately",
        "Refuses to distinguish between family and guests in supply calculations",
    ],
    relationships=[
        {"person": "Starman", "type": "Guest of Honor", "notes": "Leaves him a chair at every dinner, expected or not."},
        {"person": "Sans", "type": "Cousin", "notes": "Translates Sans's three-word warnings into actionable pantry decisions."},
        {"person": "Papyrus", "type": "Cousin", "notes": "Spaghetti Friday's silent quartermaster; the noodles appear, Papyrus takes the credit, the arrangement suits both."},
    ],
),
"cursive": dict(
    achievements=[
        "Turned the household's correspondence into a minor art form recipients keep forever",
        "Intercepted a Regency-courier letter before it reached its Snowdin intermediary",
        "Has talked relatives out of feuds and across borders using only stationery",
    ],
    controversies=[
        "The intercepted letter's hiding place is known only to family, which intelligence services find deeply suspicious",
        "His apologies on behalf of others have been described as too beautiful to be sincere",
    ],
    relationships=[
        {"person": "Helvetica", "type": "Cousin / Rival", "notes": "A friendly typographic war that produces Snowdin's best public notices."},
        {"person": "Sans", "type": "Cousin", "notes": "Receives three words, returns a masterpiece; considers it his life's great challenge."},
        {"person": "Papyrus", "type": "Cousin", "notes": "Writes unfailingly polite replies to everyone who has ever been rude to him."},
    ],
),
"has_a_very_special_attack": dict(
    achievements=[
        "Maintained the legend of the very special attack through years of non-demonstration",
        "Has turned every household entrance into a theatrical event, raising morale measurably",
        "Inspired Papyrus's most enthusiastic public encouragements on record",
    ],
    controversies=[
        "No two witnesses describe the attack the same way; the registry lists it as pending demonstration, indefinitely",
        "Sans has developed a documented instinct for vacating the room when announcements begin",
    ],
    relationships=[
        {"person": "Papyrus", "type": "Cousin", "notes": "Declares every version of the attack canon; front-row seat, permanent."},
        {"person": "Sans", "type": "Cousin", "notes": "An audience of one who is somehow never present."},
        {"person": "Times New Roman", "type": "Cousin", "notes": "Requested documentation of the attack nine times; received a dramatic reading."},
    ],
),
"times_new_roman": dict(
    achievements=[
        "Compiles the Bone-Line's indexed chronicle, the archive's most cited and most complained-about volume",
        "Has enforced citation standards against relatives who answer with hugs",
        "Preserved three Gee Lady speeches in full, against his own better judgment",
    ],
    controversies=[
        "Maintains a growing appendix of unresolved citations he calls temporary",
        "His disapproval of 'you had to be there' stories has cost him several good anecdotes, which he resents privately",
    ],
    relationships=[
        {"person": "My Brother?", "type": "Cousin", "notes": "Eleven footnote requests, eleven hugs; the archive's most persistent scholarly conflict."},
        {"person": "Cursive", "type": "Cousin", "notes": "Mutual horror at each other's formatting, mutual respect at each other's results."},
        {"person": "Grandpa Semi", "type": "Elder", "notes": "The only archivist whose unreadable handwriting Times New Roman is not permitted to criticize."},
    ],
),
"prunsel": dict(
    achievements=[
        "Documented presence at every recent dimensional stress site in the Snowdin area",
        "Has never threatened, approached, or harmed a member of the household, on record",
        "Forced the registry to invent a membership category",
    ],
    controversies=[
        "Classification unresolved: transformed cousin or guardian entity; Grandpa Semi forbids the word monster",
        "Its attention appears directed at outsider symbols, including one carried by a Gamma-connected agent; implications under study",
    ],
    relationships=[
        {"person": "Grandpa Semi", "type": "Keeper", "notes": "Refused, on the record, to classify Prunsel as anything but family-adjacent."},
        {"person": "Sans", "type": "Observed Kin", "notes": "Treats all questions about Prunsel with unusual care; the care is itself the answer."},
        {"person": "Wing Gaster", "type": "Unresolved", "notes": "Some entries link the transformation to unfinished science from the Gaster Branch; the folder remains sealed."},
    ],
),
"real_star": dict(
    achievements=[
        "Lights and warms Snowdin's longest nights, at documented cost to the household curtains",
        "Has guided lost relatives home by constellations no one else can see",
        "Achieved full family membership by acclamation, the fastest adoption in registry history",
    ],
    controversies=[
        "Navigation testimony is unfailingly confident and unverifiable; the chronicle lists the method as 'celestial, disputed'",
        "Dimming agreements near fabric have a short half-life",
    ],
    relationships=[
        {"person": "Papyrus", "type": "Adoptive Kin", "notes": "Led the cheering that constituted the adoption; no regrets on either side."},
        {"person": "Pet Rock", "type": "Household Kin", "notes": "The only family member who does not squint at him; he values the company."},
        {"person": "Starman", "type": "Fellow Celestial", "notes": "Two lights the household keeps chairs for; never documented in the same sky."},
    ],
),
"brother_killer": dict(
    achievements=[
        "Redirected a dangerous reputation entirely toward perimeter defense",
        "Walked away from a faction that attempted to weaponize the family registry",
        "Maintains a conditional but credible offer of critical intelligence on a current infiltrator",
    ],
    controversies=[
        "The conflict behind his title is summarized differently by every relative; no canonical account exists",
        "Will speak only to Papyrus, a condition the household has not decided how to feel about",
    ],
    relationships=[
        {"person": "Papyrus", "type": "Brother", "notes": "The only relative he has ever agreed to answer; Papyrus has not yet asked."},
        {"person": "Dedan", "type": "Perimeter Ally", "notes": "Two guarded men who watch the same doors from different angles and rarely discuss it."},
        {"person": "Grandpa Semi", "type": "Elder", "notes": "Keeps the kindest version of the old story in the cedar chest, unsealed, where Brother Killer can find it."},
    ],
),
"my_little_brother": dict(
    achievements=[
        "Recovered a household-record number of misplaced gloves, messages, and small morale emergencies",
        "Has turned 'little brother' into a recognized household profession",
        "Began apprenticeship on the cedar chest filing system",
    ],
    controversies=[
        "Parentage line left blank by consensus; the registry objects, the household does not care",
        "Patrol followership exceeds authorized supervision ratios",
    ],
    relationships=[
        {"person": "Papyrus", "type": "Brother (Adopted, Everyone)", "notes": "Assigns him real tasks immediately; considers the trailing a hiring process."},
        {"person": "Grandpa Semi", "type": "Elder", "notes": "Is teaching him the archive, which is either a promotion or a test of courage."},
        {"person": "My Brother?", "type": "Brother (?)", "notes": "The registry's two unresolved entries; get along on the strength of shared uncertainty."},
    ],
),
"ness": dict(
    achievements=[
        "Recognized the Mount Ebott anomalies as structural rather than ordinary Underground magic",
        "Maintains a route sketch linking Snowdin's signals to a distant refugee corridor",
        "Has told Sans a joke went too far, and survived, multiple times",
    ],
    controversies=[
        "Origins remain unverified; the household has agreed, formally, not to press",
        "His calm in crisis has been described as 'suspiciously experienced'",
    ],
    relationships=[
        {"person": "Sans", "type": "Friend", "notes": "One of the few people Sans accepts corrections from; mutual, dry, durable."},
        {"person": "Baby Bones", "type": "Household Kin", "notes": "Carries them at requested intervals; has never once complained on record."},
        {"person": "Wing Gaster", "type": "Subject of Study", "notes": "Reads the sealed folder's geometry as door-architecture; the household wishes he would stop being right."},
    ],
),
"wing_gaster": dict(
    achievements=[
        "Pioneered the study of darkness as architecture between worlds, per surviving records",
        "Remains the unresolved center of the family's science branch",
        "His file's geometry now cross-references damage patterns across three separate archives",
    ],
    controversies=[
        "Vanished from ordinary history with the witness list deliberately removed from the registry",
        "Every lead on his fate points at a door the household has not agreed to open",
    ],
    relationships=[
        {"person": "Grandpa Semi", "type": "Custodian of Record", "notes": "Keeper of the wing-sigil folder; opens it only by consensus."},
        {"person": "Sans", "type": "Kin (Unresolved)", "notes": "Knows more than he shares; the household reads the silence as warning."},
        {"person": "Prunsel", "type": "Linked (Disputed)", "notes": "Some entries describe a transformation by unfinished science; neither record is closed."},
    ],
),
"my_brother": dict(
    achievements=[
        "Maintains a perfect dinner attendance record despite an unresolved registry citation",
        "Has successfully claimed kinship with relatives who arrived intending to argue",
        "Has kept his question mark through eleven footnote requests",
    ],
    controversies=[
        "No branch can prove him; none will deny him; the archive has no procedure for this",
        "His method of family-by-assertion has begun to work, which worries the archivists most",
    ],
    relationships=[
        {"person": "Times New Roman", "type": "Cousin", "notes": "The footnote war's cheerful side; answers citation requests with hugs and attendance."},
        {"person": "Papyrus", "type": "Brother (Claimed)", "notes": "Admired immediately, adopted informally, documented eventually."},
        {"person": "My Little Brother", "type": "Brother (?)", "notes": "The registry's two open questions; share a talent for belonging without papers."},
    ],
),
"pretty_soon": dict(
    achievements=[
        "Converted 'pretty soon' into the household's official unit of hopeful time",
        "Has delivered, eventually and quietly, multiple plans the registry had written off",
        "Answered Baby Bones's hardest questions without a single false promise",
    ],
    controversies=[
        "His notebook's uncrossed entries are not deadlines, and outside observers keep mistaking them for ones",
        "The registry has formally given up requesting dates from him",
    ],
    relationships=[
        {"person": "Baby Bones", "type": "Household Kin", "notes": "Kneels down, adjusts the scarf, and makes waiting feel inhabited."},
        {"person": "Will", "type": "Cousin", "notes": "Will supplies the supplies; Pretty Soon supplies the patience; the relief network runs on both."},
        {"person": "Grandpa Semi", "type": "Elder", "notes": "The cedar chest records several cases where pretty soon was, in the end, exactly right."},
    ],
),
"helvetica": dict(
    achievements=[
        "Reduced documented public-notice misunderstandings in Snowdin to zero since taking over signage",
        "Co-authors, with Cursive, the town's most legible and most beautiful notices",
        "Produced the only documents Sans has never punned about",
    ],
    controversies=[
        "The typographic rivalry with Cursive occasionally delays notices pending breakfast arguments",
        "Considers the chronicle's current typeface a personal grievance",
    ],
    relationships=[
        {"person": "Cursive", "type": "Cousin / Rival", "notes": "Precision versus flourish; their co-authored notices make both of them insufferably proud."},
        {"person": "Sans", "type": "Cousin", "notes": "Consulted whenever a message cannot afford to be misunderstood; frames the resulting silence as triumph."},
        {"person": "Times New Roman", "type": "Cousin", "notes": "Allies on legibility, divided on serifs; a respectful cold war."},
    ],
),
"gee_lady": dict(
    achievements=[
        "Attended 100% of recorded household birthdays, homecomings, and victory dinners",
        "Has located and retrieved every outsider hovering near a door in living memory",
        "Delivered three speeches considered accurate enough for the chronicle",
    ],
    controversies=[
        "The G's original meaning remains disputed; she changes the story by occasion",
        "No one has ever successfully declined one of her speeches; the registry suspects enchantment, she denies it with frosting",
    ],
    relationships=[
        {"person": "Baby Bones", "type": "Household Kin", "notes": "First audience of every birthday; considers the rattling applause the review that matters."},
        {"person": "Speen Kind of Down Lately", "type": "Nephew", "notes": "Accepts 'okay' from him only with documentation; he finds this exhausting and correct."},
        {"person": "Papyrus", "type": "Nephew", "notes": "The household's two loudest hearts; their joint toasts have broken glass."},
    ],
),
"garbage_brother": dict(
    achievements=[
        "Restored Baby Bones's rattle and Papyrus's emergency strainer from salvage",
        "Solved four documented emergencies with items he 'had lying around'",
        "Embedded 'discarded does not mean worthless' into the family's membership culture",
    ],
    controversies=[
        "His almost-useful shelves have been classified as hoarding or prophecy depending on the week",
        "Dislikes the nickname; the household continues it on his own stated principle",
    ],
    relationships=[
        {"person": "Baby Bones", "type": "Household Kin", "notes": "Chief patron of the workbench; all rattling salvage is reserved for inspection."},
        {"person": "Dirty Brother", "type": "Brother", "notes": "One repairs the warm roads, the other rebuilds what the roads carry; shared workshop, shared soot."},
        {"person": "Pet Rock", "type": "Household Kin", "notes": "Built its padded pocket from a salvaged case; considers it his finest almost-useful success."},
    ],
),
"starman": dict(
    achievements=[
        "Guided a lost party through a total whiteout using a light that casts no shadows",
        "Has arrived before every household crisis he has attended, without documented warning",
        "Earned a permanent chair in Will's dinner rotation",
    ],
    controversies=[
        "Has never been documented casting a shadow, reflection, or explanation",
        "Sans watches the horizon, not the guest, whenever he appears; the registry notes this under 'weather'",
    ],
    relationships=[
        {"person": "Will", "type": "Host", "notes": "The chair is his, expected or not; Will considers this inventory, not hospitality."},
        {"person": "S' a Real Star", "type": "Fellow Celestial", "notes": "Two lights, two chairs, no documented shared sky."},
        {"person": "Sans", "type": "Observed By", "notes": "Watches the horizon when Starman arrives; Starman has never once turned to look back. Or has. The record is unclear."},
    ],
),
"quantity": dict(
    achievements=[
        "Completed multiple many-hands jobs in the time usually required for one",
        "Achieved official family status by Baby Bones decree, the second-fastest adoption on record",
        "Has never once been late to a meal or an emergency, despite internal debate",
    ],
    controversies=[
        "The chronicle cannot decide whether to list them as one member with a committee or several members with a chassis",
        "Internal voting procedures remain undocumented and loud",
    ],
    relationships=[
        {"person": "Baby Bones", "type": "Nephew (All Of Them)", "notes": "Every skull is uncle; the decree is binding and the uncles are honored."},
        {"person": "Papyrus", "type": "Household Kin", "notes": "Builds his puzzles in a single afternoon; he declares each skull a genius, separately."},
        {"person": "Times New Roman", "type": "Cousin", "notes": "Requested a membership precedent; received a chorus. Has not recovered."},
    ],
),
"speen_kind_of_down_lately": dict(
    achievements=[
        "Turned a hard season into the household's standing promise to check in",
        "Has named performed happiness in several relatives, gently, with documented good outcomes",
        "Maintains the quiet corner as the house's most reliable honest-conversation site",
    ],
    controversies=[
        "None. The registry attempted one; the household rejected it unanimously, on record",
    ],
    relationships=[
        {"person": "Lazybones", "type": "Cousin", "notes": "Tea, blankets, and mutual understanding; the corner is their joint project."},
        {"person": "Papyrus", "type": "Cousin", "notes": "Treats an empty seat beside Speen as a personal emergency; fills it immediately."},
        {"person": "Gee Lady", "type": "Aunt", "notes": "Accepts 'okay' from her only with documentation; he finds this exhausting and correct."},
    ],
),
"pet_rock": dict(
    achievements=[
        "Achieved full membership, dinner plate, and evacuation slot by naming alone",
        "Has attended every major household meal without a single complaint",
        "Survived three kitchen fires, unbothered",
    ],
    controversies=[
        "No verified movement on record; the household considers the investigation closed",
        "Outside observers periodically reopen the membership question; the household periodically declines to care",
    ],
    relationships=[
        {"person": "Baby Bones", "type": "Namer", "notes": "Spoke the name; the name became."},
        {"person": "Papyrus", "type": "Provider", "notes": "Prepares the tiny plate every dinner; portions adjusted for no reason anyone will explain."},
        {"person": "Will", "type": "Evacuation Officer", "notes": "Listed between the medicine kit and the noodle reserve; the ordering is deliberate and no one will discuss it."},
    ],
),
"dedan": dict(
    achievements=[
        "Has turned away every undocumented arrival at the household's doors, politely or otherwise",
        "Maintains the household's longest unbroken streak of patience with children",
        "Has stood watch through blizzards, fires, evacuations, and at least one sales call",
    ],
    controversies=[
        "Continues to deny family status despite overwhelming evidence; objections filed as ritual",
        "His gentleness with Baby Bones contradicts his professional reputation, which he refuses to address",
    ],
    relationships=[
        {"person": "Papyrus", "type": "Patrol Partner", "notes": "Suspicion and invitation, guarding one door; neither works without the other."},
        {"person": "Baby Bones", "type": "Household Kin", "notes": "Shoulder transport, on demand, no exceptions."},
        {"person": "Brother Killer", "type": "Perimeter Ally", "notes": "Two guarded men, same doors, different angles; respect without discussion."},
    ],
),
"mystery_man": dict(
    achievements=[
        "Documented at every site the household has agreed to be careful about",
        "Has never been recorded harming, threatening, or speaking to a family member",
        "Inspired the household's standing policy on unfinished people",
    ],
    controversies=[
        "Relationship to the family documented only by sightings, sketches, and absence",
        "The open seat is occupied some nights; no one has ever been assigned the watching",
    ],
    relationships=[
        {"person": "Grandpa Semi", "type": "Keeper of the Open File", "notes": "Refuses to close the entry; an unfinished person is not an erased person."},
        {"person": "Wing Gaster", "type": "Unresolved (Possible)", "notes": "Two records defined by absence; the archive does not link them. The archive has been asked."},
        {"person": "Baby Bones", "type": "Household Kin", "notes": "Has been documented setting out an extra plate. No adult instructed this. No adult corrected it."},
    ],
),
"sans_deltarune": dict(
    achievements=[
        "Identified a contraband merchant symbol as cross-world in origin, advancing the household's current investigation",
        "Enabled multiple plain-speaking sessions with Sans on otherwise unutterable subjects",
        "Maintains a storefront that functions as a neutral meeting point across adjacent stories",
    ],
    controversies=[
        "His ledger contains a date that has not happened in this world; filed under 'cross-world commerce, caution'",
        "His visits end abruptly and without goodbye, by a pattern no one has decoded",
    ],
    relationships=[
        {"person": "Sans", "type": "Parallel Counterpart", "notes": "The other half of the map; conversations between them are the only full sentences Sans speaks about paths."},
        {"person": "Papyrus", "type": "Adoptive Kin (Parallel)", "notes": "Fed immediately on arrival, per household law; expressed surprise, then pleasure, then hunger."},
        {"person": "Cursive", "type": "Cousin", "notes": "His cross-world correspondence matches no known courier hand, which Cursive finds professionally thrilling."},
    ],
),
}

# ---------------------------------------------------------------------------
# family-tree.js surgery helpers
# ---------------------------------------------------------------------------

def find_member_block(section: str, ident: str) -> tuple[int, int]:
    m = re.search(r'"id":\s*"' + re.escape(ident) + r'"', section)
    if not m:
        raise KeyError(ident)
    start = section.rfind('{', 0, m.start())
    depth = 0; quoted = False; escaped = False
    for i in range(start, len(section)):
        ch = section[i]
        if quoted:
            if escaped: escaped = False
            elif ch == '\\': escaped = True
            elif ch == '"': quoted = False
            continue
        if ch == '"': quoted = True
        elif ch == '{': depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                return start, i + 1
    raise ValueError(f'Unclosed member object for {ident}')

def replace_summary(block: str, article: str) -> str:
    literal = json.dumps(article, ensure_ascii=False)
    new, n = re.subn(r'("summary":\s*)"(?:\\.|[^"\\])*"',
                     lambda m: m.group(1) + literal, block, count=1)
    if n != 1:
        raise ValueError('summary field not found')
    return new

def replace_array_field(block: str, field: str, value) -> str:
    m = re.search(r'"' + field + r'":\s*\[', block)
    if not m:
        raise ValueError(f'{field} field not found')
    start = m.end() - 1
    depth = 0; quoted = False; escaped = False
    for i in range(start, len(block)):
        ch = block[i]
        if quoted:
            if escaped: escaped = False
            elif ch == '\\': escaped = True
            elif ch == '"': quoted = False
            continue
        if ch == '"': quoted = True
        elif ch == '[': depth += 1
        elif ch == ']':
            depth -= 1
            if depth == 0:
                end = i + 1
                break
    else:
        raise ValueError(f'Unclosed array for {field}')
    literal = json.dumps(value, ensure_ascii=False)
    return block[:m.start()] + f'"{field}": ' + literal + block[end:]

def main():
    articles = load_articles()
    secrets = load_secrets()
    missing = set(DOSSIER) - set(articles)
    assert not missing, f'ARTICLES missing for: {missing}'
    assert set(secrets) <= set(articles), 'SECRETS references unknown member ids'

    # 1) Update family-tree.js member objects
    source = TREE.read_text(encoding='utf8')
    a = source.index(START); b = source.index(END, a)
    section = source[a:b]
    updated = 0; secrets_updated = 0
    for ident, article in articles.items():
        start, end = find_member_block(section, ident)
        block = section[start:end]
        block = replace_summary(block, article)
        dossier = DOSSIER[ident]
        block = replace_array_field(block, 'achievements', dossier['achievements'])
        block = replace_array_field(block, 'controversies', dossier['controversies'])
        block = replace_array_field(block, 'relationships', dossier['relationships'])
        if ident in secrets:
            block = replace_array_field(block, 'secrets', secrets[ident])
            secrets_updated += 1
        section = section[:start] + block + section[end:]
        updated += 1
    TREE.write_text(source[:a] + section + source[b:], encoding='utf8')

    # 2) Mirror long-form articles into data/characters.json descriptions
    chars = json.loads(CHARACTERS.read_text(encoding='utf8'))
    synced = 0
    for char in chars:
        article = articles.get(char.get('id'))
        if article and char.get('description') != article:
            char['description'] = article
            synced += 1
    CHARACTERS.write_text(json.dumps(chars, ensure_ascii=False, indent=2) + '\n', encoding='utf8')

    print(f'Expanded {updated} Bone-Line family-tree dossiers in family-tree.js.')
    print(f'Replaced stock secrets for {secrets_updated} members.')
    print(f'Mirrored long-form articles into {synced} characters.json records.')
    print('Next: run tools/sync_family_tree_secrets.py to mirror secrets into characters.json.')

if __name__ == '__main__':
    main()
