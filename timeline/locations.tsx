// FIX: Corrected import path for types to './types' to match the flat project structure.
import { Location } from './types';
import { LOCATIONS_DATA_S2 } from './locations.s2';

const LOCATIONS_DATA_S1: Location[] = [
  {
    id: 'castle',
    name: "Mega X's Castle / The Warzone",
    description: "The initial target of the raid. After being forcibly ejected from the backrooms, the team returns to this location to find it a ruined warzone, with the castle destroyed. All their items are lost upon arrival, marking a grim new beginning.",
    firstAppearanceEpisode: 1,
    lastAppearanceEpisode: 32
  },
  {
    id: 'ship',
    name: "The Ship",
    description: "Mega X's escape vehicle. The team pursues him here, finds an unconscious 'Bloodless', and rigs the ship to explode.",
    firstAppearanceEpisode: 2,
    lastAppearanceEpisode: 2
  },
  {
    id: 'labyrinth',
    name: "The Looping Labyrinth (The Backrooms)",
    description: "A bizarre, repetitive environment where the group is trapped. It features strange phenomena, a collapsing structure, and areas explicitly linked to Bloodless.",
    firstAppearanceEpisode: 3,
    lastAppearanceEpisode: 22
  },
  {
    id: 'bnr_safe_room',
    name: "The BNR Safe Room",
    description: "A room within the collapsing labyrinth containing a safe marked 'BNR,' providing a major clue about the antagonist Bloodless.",
    firstAppearanceEpisode: 4,
    lastAppearanceEpisode: 4
  },
  {
    id: 'pink_feminine_peach_area',
    name: "The 'Pink Feminine Peach' Area",
    description: "A distinct new territory within the labyrinth that the group navigates to, marking a shift from the previous environment's textures.",
    firstAppearanceEpisode: 5,
    lastAppearanceEpisode: 5
  },
  {
    id: 'creepy_research_area',
    name: "The Creepy Research Area",
    description: "A newer, more menacing area populated by hostile 'researchers employees,' indicating a deeper, more dangerous level of the labyrinth.",
    firstAppearanceEpisode: 6,
    lastAppearanceEpisode: 6
  },
  {
    id: 'pipe_dreams',
    name: "Level 2: Pipe Dreams",
    description: "A dangerous area described as 'one hell on to the next.' It's a confusing network of passages where the group was beset by auditory threats and temporarily separated.",
    firstAppearanceEpisode: 8,
    lastAppearanceEpisode: 8
  },
  {
    id: 'fnaf_zone',
    name: "Level 3: The FNAF Zone",
    description: "A dark, deteriorating level reminiscent of the game 'Five Nights at Freddy's,' featuring a security desk and ominous ventilation sounds. The environment is hostile and unsettling.",
    firstAppearanceEpisode: 9,
    lastAppearanceEpisode: 9
  },
  {
    id: 'office',
    name: "Level 4: The Office",
    description: "A significant departure from previous levels, resembling a furnished office building with working lights and a strange, constant music. It houses a camp of scientists and disappointing water dispensers.",
    firstAppearanceEpisode: 11,
    lastAppearanceEpisode: 11
  },
  {
    id: 'event_hall',
    name: "Level 4: The Event Hall",
    description: "An area accessible via an elevator from the office level. It features a red carpet and evokes the feeling of a 'big time event.' It contains strange, operatic monologues and various containers.",
    firstAppearanceEpisode: 12,
    lastAppearanceEpisode: 12
  },
  {
    id: 'sausage_warehouse_tree',
    name: "The Sausage Warehouse Tree",
    description: "A bizarre and massive tree-like structure located somewhere in the Backrooms where Rose was found wandering after her disappearance.",
    firstAppearanceEpisode: 13,
    lastAppearanceEpisode: 13
  },
  {
    id: 'darkness',
    name: "Level 6: The Darkness (Level !)",
    description: "An intensely dark level where light is of little use and home to 'Smilers' and giant spiders. Monsters are known to fall from the sky here. The team successfully escaped this level in Episode 19 by building ladders to the surface.",
    firstAppearanceEpisode: 13,
    lastAppearanceEpisode: 19
  },
  {
    id: 'snack_rooms',
    name: "Level ?: The Snack Rooms",
    description: "A strange level featuring a bar, snack-filled vending machines, and treacherous, slippery floors. The area is also filled with weak glass barriers and an unusual number of fire extinguishers.",
    firstAppearanceEpisode: 14,
    lastAppearanceEpisode: 14
  },
  {
    id: 'hallway',
    name: "Level ?: The Nice Hallway",
    description: "A deceptively pleasant hallway that is part of an 'endless loop' filled with moths and the lingering threat of dog-like creatures. Its seemingly safe appearance masks the psychological weariness it inflicts.",
    firstAppearanceEpisode: 15,
    lastAppearanceEpisode: 15
  },
  {
    id: 'titanic',
    name: "Level 10: The Frozen Ocean & Titanic",
    description: "An impossible level compared to the Bermuda Triangle. It's a freezing ocean containing the RMS Titanic. The physics here are altered, causing bullets to fly at much lower speeds. It is supposedly home to the 'Troll' or 'Merchant'.",
    firstAppearanceEpisode: 16,
    lastAppearanceEpisode: 18
  },
  {
    id: 'spider_gauntlet',
    name: "Level ?: The Spider Gauntlet",
    description: "A hazardous passage, likely within Level !, characterized by wet clay floors. The team was forced to run a gauntlet here, culminating in a violent ambush by giant spiders emerging from the walls.",
    firstAppearanceEpisode: 18,
    lastAppearanceEpisode: 18
  },
  {
    id: 'ambush_hallway',
    name: "The White & Blue Hallway",
    description: "A modern, sterile hallway where the team was ambushed by large, red, spider-like monsters that emerged from the walls. A player, Matt, was critically injured here.",
    firstAppearanceEpisode: 20,
    lastAppearanceEpisode: 20
  },
  {
    id: 'poison_safe_room',
    name: "The Poisoned Safe Room",
    description: "A temporary safe room containing beds, pools of water, and a hidden 'Aqua Key.' The team discovered one of the water sources was poisonous before being abruptly teleported away.",
    firstAppearanceEpisode: 20,
    lastAppearanceEpisode: 20
  },
  {
    id: 'slaughter_ravine',
    name: "The Ravine of Slaughter",
    description: "A dark, rocky deathtrap swarming with giant spiders, skeletons, flying moths, and deadly new 'Howler' creatures. The team suffered heavy losses here before escaping by building up a cliff face.",
    firstAppearanceEpisode: 20,
    lastAppearanceEpisode: 22
  },
  {
    id: 'lando_shop',
    name: "Lando's Hidden Shop",
    description: "A bizarre shop run by a man named Lando, discovered after escaping the ravine. Its inventory includes absurdities like 'Fried Air' and a 'Stinky Sock,' and it has a strict no-firearms policy.",
    firstAppearanceEpisode: 20,
    lastAppearanceEpisode: 20
  },
  {
    id: 'pool_room',
    name: "The Pool Room",
    description: "A vast, sterile maze of white tiled rooms where the team delivers items to 'Lando the Troll.' The shop becomes a deadly trap that kills Kymar and leads to a disorienting chase, culminating in the team being forcibly teleported out of the backrooms.",
    firstAppearanceEpisode: 20,
    lastAppearanceEpisode: 32
  },
  {
    id: 'circus_village',
    name: "The Surreal Circus Village",
    description: "A bizarre village with a massive circus tent at its center. This area is patrolled by Mega X Guards and Royalty, serving as a hostile transition zone.",
    firstAppearanceEpisode: 21,
    lastAppearanceEpisode: 21
  },
  {
    id: 'circus_tent',
    name: "The Grand Circus Tent",
    description: "The site of a major boss battle against a gigantic clown on a lava-surrounded stage. The chaotic interior is designed to overwhelm intruders.",
    firstAppearanceEpisode: 21,
    lastAppearanceEpisode: 21
  },
  {
    id: 'hospital_ward',
    name: "The Hospital Ward",
    description: "A sterile, hospital-like room that the survivors fled to after the circus battle. This area adds to the disorienting and surreal nature of the world.",
    firstAppearanceEpisode: 21,
    lastAppearanceEpisode: 21
  },
  {
    id: 'circus_trailers',
    name: "The Circus Trailers",
    description: "An area outside the main circus tent filled with trailers. It served as a brief, chaotic escape route for the surviving players.",
    firstAppearanceEpisode: 21,
    lastAppearanceEpisode: 21
  },
  {
    id: 'surreal_cyan_forest',
    name: "The Surreal Cyan Forest",
    description: "An otherworldly forest with a cyan sky, dark trees, and red mushrooms. It's an ambush site where conventional navigation tools fail.",
    firstAppearanceEpisode: 22,
    lastAppearanceEpisode: 22
  },
  {
    id: 'unfinished_barn',
    name: "The Unfinished Barn",
    description: "A large, partially constructed barn where Kymar was reunited with the group. They escaped by using TNT to blast open a wall, revealing a teleporter.",
    firstAppearanceEpisode: 23,
    lastAppearanceEpisode: 23
  },
  {
    id: 'highway_tunnel',
    name: "The Sterile Highway Tunnel",
    description: "A long, ominous highway tunnel with drab yellow walls and fluorescent lights. It contains several side rooms with doors marked by a red 'X'.",
    firstAppearanceEpisode: 23,
    lastAppearanceEpisode: 23
  },
  {
    id: 'train_station',
    name: "The Modern Train Station",
    description: "A dark, empty train station of grey concrete and stone. Kymar recognized it as his last location before getting lost. The team was trapped here by invisible walls before a train arrived.",
    firstAppearanceEpisode: 23,
    lastAppearanceEpisode: 23
  },
  {
    id: 'endless_train_car',
    name: "The Endless Train Car",
    description: "The interior of an impossibly long train car with a red carpet and blue seats, where the entire team was unexpectedly reunited and is now trapped.",
    firstAppearanceEpisode: 22,
    lastAppearanceEpisode: 24
  },
  {
    id: 'shopping_mall',
    name: "The Endless Shopping Mall",
    description: "A vast, sterile, and eerily empty multi-level shopping mall. It contains numerous storefronts, including a bookstore with blank books and a pool of contaminated water, and serves as the setting for a bizarre quest to craft items for a troll. It also houses a clothing and dye shop run by an NPC called 'The Florist.'",
    firstAppearanceEpisode: 24,
    lastAppearanceEpisode: 26
  },
  {
    id: 'marketplace',
    name: "The Medieval Marketplace",
    description: "A large, medieval-style marketplace where the team first encounters the deceptive trickster, Jeremy.",
    firstAppearanceEpisode: 26,
    lastAppearanceEpisode: 26
  },
  {
    id: 'quartz_bridge',
    name: "The Quartz Bridge",
    description: "A high, white quartz bridge overlooking a city. This is the site of Jeremy's initial betrayal after he is pushed off and teleports back unharmed.",
    firstAppearanceEpisode: 26,
    lastAppearanceEpisode: 26
  },
  {
    id: 'prismarine_passage',
    name: "The Prismarine Passage",
    description: "A narrow, watery passage lined with teal-colored prismarine blocks. This dark, winding corridor leads to the Grand Library and inflicts a continuous 'Frostbite' damage effect.",
    firstAppearanceEpisode: 27,
    lastAppearanceEpisode: 27
  },
  {
    id: 'grand_library',
    name: "The Grand Library",
    description: "A massive, multi-level library with wooden floors and countless bookshelves. It serves as an ambush point for Mega X gunners and other hostiles, like the 'Pink Cat-Man.'",
    firstAppearanceEpisode: 27,
    lastAppearanceEpisode: 27
  },
  {
    id: 'sewer_system',
    name: "The Sewer System",
    description: "A network of dark, sewer-like tunnels that connect various parts of the vast complex. They are often hazardous, with some sections causing a 'Frostbite' effect.",
    firstAppearanceEpisode: 27,
    lastAppearanceEpisode: 27
  },
  {
    id: 'sterile_rooms',
    name: "The Sterile Modern Complex",
    description: "A series of interconnected, sterile white-tiled rooms and vertical shafts. This area is prone to glitches and ambushes, and was ultimately torn apart by a series of massive explosions that revealed a lava pit beneath the floor.",
    firstAppearanceEpisode: 28,
    lastAppearanceEpisode: 29
  },
  {
    id: 'rooftop_terrace',
    name: "The Rooftop Terrace",
    description: "An open-air rooftop area with surreal views of floating buildings. It features a luxurious section with a sandy beach and a swimming pool, but also serves as a deadly ambush point for Mega X soldiers.",
    firstAppearanceEpisode: 28,
    lastAppearanceEpisode: 29
  },
  {
    id: 'airship',
    name: "The Airship",
    description: "A massive, blimp-like airship floating in the distance, visible from the rooftop terrace. According to Jeremy, it holds the third and final key required for the group's escape.",
    firstAppearanceEpisode: 28,
    lastAppearanceEpisode: 28
  },
  {
    id: 'floating_city',
    name: "The Floating Medieval City",
    description: "A massive, intricate medieval city floating on an island over a sea of lava, connected by a long stone-brick bridge. It serves as an ambush point for Mega X Royal Guards and houses a mysterious command block teleporter.",
    firstAppearanceEpisode: 29,
    lastAppearanceEpisode: 29
  },
  {
    id: 'crimson_dimension',
    name: "The Crimson Flesh Dimension",
    description: "A surreal, hellish dimension resembling the Nether's Crimson Forest. The landscape is made of red 'flesh' blocks and massive crimson trees. The group is led on a wild goose chase here by a skeleton troll to a fake grave, and ultimately find the last scavenger hunt item in a chest revealed by a TNT explosion.",
    firstAppearanceEpisode: 29,
    lastAppearanceEpisode: 31
  },
  {
    id: 'church',
    name: "The Church",
    description: "A derelict church that serves as a recurring location. Once a shelter in the warzone run by a manipulative priest, it becomes a fortified sanctuary against a zombie horde in Season 2, where the team fights a skeletal boss on the roof.",
    firstAppearanceEpisode: 1,
    lastAppearanceEpisode: 51
  },
  {
    id: 'sky_highway',
    name: "The Sky Highway",
    description: "A massive, surreal highway suspended high in the sky. First seen in the distance, it becomes the only clear path forward for the group to reach the village they have been tasked with attacking after they escape the backrooms.",
    firstAppearanceEpisode: 1,
    lastAppearanceEpisode: 32
  },
  // ADD: The target village set by the priest in the outside world
  {
    id: 'target_village',
    name: "The Target Village",
    description: "A fortified settlement beyond the Sky Highway. The priest orders a suicide mission to attack it; the team plans to play along to acquire weapons and gear first.",
    firstAppearanceEpisode: 32,
    lastAppearanceEpisode: 32
  },
];

export const LOCATIONS_DATA: Location[] = [...LOCATIONS_DATA_S1, ...LOCATIONS_DATA_S2];