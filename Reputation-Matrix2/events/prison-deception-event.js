export const PRISON_DECEPTION_POSTS = [
    {
        id: 'wah_media_prison_breaking',
        order: 10025,
        characterKey: 'wah_media_collective',
        timestamp: 'Just Now',
        content: `BREAKING: Capital prison chaos erupts. A guard gives FNG Remi and Lario a 'house tour', then catches a disguised lockpicker calling himself 'Archie Writeman'. Dan bolts—twice—locking the Vigilance’s front doors. The All-Seeing Mage arrives, unlocks the prison door without effort, and demands Eager’s magic be drained. Another guard smashes a window and drags Eager out for transport. Sources say a detection device scanned 'Archie Writeman' and found nothing.`,
        image: 'newspaper_prison.png',
        image_alt: "A grainy shot of a barred window, with a guard hauling a prisoner through.",
        likes: 2412,
        comments: [
            { characterKey: 'diamond_city_investigators', text: "We are opening an inquiry. Witnesses, please come forward." }
        ],
        eventId: 'capital_prison_deception'
    },
    {
        id: 'lario_sabotage_prison',
        order: 10024,
        characterKey: 'lario',
        timestamp: 'Just Now',
        content: "So I'm in prison for 'sabotage'. Big deal! At least I'm not a FAKE TOAD. And I'm definitely not the one setting fires. Looking at you, HORSE-MAN.",
        likes: 1180,
        comments: [
            { characterKey: 'waluigi', text: "WAH! Tell us how you REALLY feel, goblin boy!" },
            { characterKey: 'detective_penny', text: "Noted. The 'horse-man' remark has been appended to the arson timeline." }
        ],
        eventId: 'capital_prison_deception'
    },
    {
        id: 'remi_prison_statement',
        order: 10023,
        characterKey: 'remi',
        timestamp: 'Just Now',
        content: `I spoke with Eager. Then the Mage shows up asking to 'drain' him, doors get locked, and a guard drags him through a window. That isn’t justice—it’s panic with badges.`,
        likes: 980,
        comments: [
            { characterKey: 'archie', text: "Panic is a canvas. Sadly, this painter lacks taste." },
            { characterKey: 'bowser', text: "Mages always 'solve' problems by breaking people." }
        ],
        eventId: 'capital_prison_deception'
    },
    {
        id: 'archmage_prison_rationale',
        order: 10022,
        characterKey: 'archmage_theron',
        timestamp: 'Just Now',
        content: `Volatile magical residue must be contained. Draining prevents catastrophic incidents. Interference endangers everyone. The Guild will proceed with established safeguards.`,
        likes: 720,
        comments: [
            { characterKey: 'waluigi', text: "WAH! 'Established safeguards' = glowstick vacuum! Nice science-y words though!" }
        ],
        eventId: 'capital_prison_deception'
    },
    {
        id: 'capital_guard_paul_window',
        order: 10021,
        characterKey: 'capital_guard_paul',
        timestamp: 'Just Now',
        content: `Yes, I smashed the window. Yes, I gave a tour. It's called being friendly. Also: caught 'Archie Writeman' trying a lock. Protocol applied. Eager needed transport.`,
        likes: 312,
        comments: [
            { characterKey: 'lario', text: "Thanks for the logbook. You won’t miss it." },
            { characterKey: 'remi', text: "Friendly has boundaries. Tours aren’t consent." }
        ],
        eventId: 'capital_prison_deception'
    },
    {
        id: 'waluigi_scan_smack',
        order: 10020,
        characterKey: 'waluigi',
        timestamp: 'Just Now',
        content: "WAH! The Mage's fancy beep-beep toy scanned 'Archie Writeman' and found NOTHING! Either the gadget is junk, or the disguise is genius. I vote both!",
        likes: 1290,
        comments: [
            { characterKey: 'kamek', text: "Devices work when calibrated. Yours was not." }
        ],
        eventId: 'capital_prison_deception'
    }
];

export const PRISON_DECEPTION_EVENT = {
    id: 'capital_prison_deception',
    title: "Capital Prison: Deception & Demand",
    order: -1.4,
    locationId: 'poi_capital_prison',
    description: "A flirty guard’s ‘house tour’, a disguised lockpicker, Dan’s door lockdown, the All-Seeing Mage’s demand to drain Eager, and a window smash extraction. Custody and arcana collide in a chaotic standoff.",
    news_ids: ['wah_media_prison_breaking'],
    post_ids: PRISON_DECEPTION_POSTS.filter(p => p.id !== 'wah_media_prison_breaking').map(p => p.id)
};
