// This file contains the detailed operational data for The Oathbound Judges' unique system display.

export const OATHBOUND_JUDGES_DETAILS = {
    description: "The Oathbound Judges deliver impartial justice based on cosmic law. Their core philosophy is a constant struggle between two factions: the Truthbearers, who adhere to the absolute letter of the law, and the Arbiters of Intent, who consider the spirit and consequences. This balance determines the direction of cosmic justice.",
    scales_of_justice: {
        balance: -5, // Negative leans Truthbearer, Positive leans Arbiter
        status_text: "The Scales of Justice currently lean towards the Truthbearers' absolute interpretation of the law."
    },
    tribunal: [
        { 
            id: 'korven',
            name: "Judge Eternal Korven", 
            title: "Supreme Arbiter", 
            philosophy: "Truthbearer",
            description: "The ancient and immortal leader of the Truthbearers, known for his unwavering dedication to the absolute letter of the law." 
        },
        { 
            id: 'mira',
            name: "Arbitrix Mira", 
            title: "Lead Arbiter", 
            philosophy: "Arbiter of Intent",
            description: "A younger but profoundly wise judge who champions the belief that the spirit of the law and its consequences matter more than rigid text." 
        },
        { 
            id: 'thorne',
            name: "Justicar Thorne", 
            title: "Enforcer of the Tribunal", 
            philosophy: "Truthbearer",
            description: "The grim and unyielding martial arm of the Judges. Thorne is responsible for executing the Tribunal's sentences, a duty he performs with cold, impartial efficiency." 
        },
        { 
            id: 'valen',
            name: "Loremaster Valen", 
            title: "Keeper of Precedent", 
            philosophy: "Neutral Archivist",
            description: "Valen is not a judge but the keeper of the Citadel's infinite legal archives. He provides historical precedent but offers no opinion, serving the law itself rather than any philosophy." 
        }
    ],
    recent_verdicts: [
        { 
            case: "Case #771: The State vs. Archie Miser", 
            verdict: "A split decision. The Arbiters of Intent found him Innocent, arguing his chaotic actions ultimately served a greater cosmic balance. The Truthbearers, however, found him Guilty on all counts based on the letter of the law and have formally lodged an appeal.", 
            presiding_judge: "Split Tribunal" 
        },
        { 
            case: "Case #772: The Matter of the Fallen Paladin", 
            verdict: "Judgment deferred. Under observation by the Arbiters of Intent.", 
            presiding_judge: "Arbitrix Mira" 
        },
        { 
            case: "Case #773: The Illegitimate State", 
            verdict: "Guilty. His entire kingdom is declared a rogue state operating outside cosmic law.", 
            presiding_judge: "The Full Tribunal (Unanimous)" 
        }
    ]
};