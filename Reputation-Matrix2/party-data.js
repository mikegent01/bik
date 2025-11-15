

export const PARTY_LOCATIONS = {
    'midlands_full': [
        // --- Raventree Manor Group (The "Party" & Allies) ---
        // Clustered around the manor coordinates (73.5, 12.0)
        { charKey: 'bowser', x: 73.5, y: 12.0, status: 'Trapped' },
        { charKey: 'waluigi', x: 73.2, y: 12.2, status: 'Trapped' },
        { charKey: 'hjumpik', x: 73.8, y: 11.8, status: 'Trapped' },
        { charKey: 'markop', x: 73.5, y: 12.4, status: 'Engaged' },
        { charKey: 'remi', x: 73.3, y: 11.6, status: 'Disoriented' },
        { charKey: 'archie', x: 73.4, y: 11.9, status: 'Vengeful' },
        
        // Raventree Residents & Liberated Toads
        { charKey: 'green_t', x: 73.5, y: 12.0, status: 'Lost in Mirror' },
        { charKey: 'self_reflection_oracle', x: 73.6, y: 11.9, status: 'Watching' },
        { charKey: 'dan', x: 73.5, y: 12.1, status: 'Incapacitated' },
        { charKey: 'eager', x: 73.7, y: 12.3, status: 'Wounded' },
        { charKey: 'toad_lee', x: 73.6, y: 12.2, status: 'Defending' },
        { charKey: 'ryan', x: 73.4, y: 12.4, status: 'Casting' },
        { charKey: 'roger', x: 73.8, y: 12.0, status: 'Fighting' },
        { charKey: 'speaker_l', x: 73.0, y: 13.0, status: 'Commanding' }, // Outside perimeter

        // --- Imperial Capital Group ---
        { charKey: 'wario', x: 81.5, y: 4.5, status: 'Scheming' },
        { charKey: 'purple_t', x: 81.0, y: 4.0, status: 'Defiant' }, // On the Vigilance
        { charKey: 'lario', x: 87.0, y: 6.0, status: 'Imprisoned' }, // Silent Service HQ
        { charKey: 'lady_toriel', x: 90.5, y: 8.5, status: 'Diplomacy' }, // Diplomatic Quarter
        { charKey: 'bones', x: 78.5, y: 2.5, status: 'Interrogated' }, // Aegis Command
        { charKey: 'the_mole', x: 78.0, y: 3.0, status: 'Debriefing' }, // Aegis Command

        // --- Faction Leaders (Midlands) ---
        { charKey: 'general_marcus_ironhand', x: 78.5, y: 2.5, status: 'Commanding' }, // Aegis Command
        { charKey: 'colonel_vera_steelstorm', x: 78.5, y: 2.8, status: 'Strategizing' },
        { charKey: 'lord_crimson', x: 88.5, y: 10.0, status: 'Hosting' }, // Onyx Embassy
        { charKey: 'high_inquisitor_vale', x: 89.0, y: 14.0, status: 'Praying' }, // Cathedral
        { charKey: 'archmage_theron', x: 77.0, y: 5.0, status: 'Researching' }, // Mages Guild
        { charKey: 'captain_syrup', x: 93.0, y: 52.0, status: 'Docked' }, // Port Noir
        { charKey: 'chief_thornpaw', x: 25.0, y: 15.0, status: 'Meditating' }, // Ironwood
        { charKey: 'alpha_bloodmaw', x: 75.0, y: 86.0, type: 'Hunting' } // Theghdural
    ],
    'mushroom_kingdom_full': [
        // Loyalists
        { charKey: 'captain_toadette', x: 48.0, y: 38.0, status: 'Commanding' },
        { charKey: 'embercap', x: 48.2, y: 38.2, status: 'Holding' },
        { charKey: 'mistveil', x: 47.8, y: 37.8, status: 'Scouting' },
        { charKey: 'dewdrop', x: 48.1, y: 38.1, status: 'Triage' },
        
        // Regency & Villains
        { charKey: 'chancellor_toadsworth', x: 52.0, y: 24.5, status: 'Governing' },
        { charKey: 'fawful', x: 50.5, y: 30.9, status: 'Ruling' },
        { charKey: 'kamek', x: 44.0, y: 28.0, status: 'Scheming' },
        { charKey: 'skull_cap_murphy', x: 46.0, y: 68.0, status: 'Extorting' }
    ],
    'yoshi_dk_islands': [
        { charKey: 'donkey_kong', x: 94.0, y: 4.0, status: 'Enraged' },
        { charKey: 'diddy_kong', x: 94.2, y: 4.2, status: 'Mobilizing' },
        { charKey: 'chunky_kong', x: 93.8, y: 4.1, status: 'Guarding' },
        { charKey: 'king_k_rool', x: 95.0, y: 12.0, status: 'Plotting' }
    ]
};