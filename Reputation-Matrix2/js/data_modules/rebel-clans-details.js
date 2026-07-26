// This file contains the detailed operational data for the Rebel Clans' unique system display.

export const REBEL_CLANS_DETAILS = {
    description: "The Rebel Clans operate from hidden camps, their War Council constantly assessing threats and opportunities. They maintain a list of known allies and enemies, and are not afraid to authorize covert operations to weaken their primary foe: The Regal Empire.",
    relations: {
        allies: ["The Unchained", "Liberated Toads"],
        enemies: ["Regal Empire", "Iron Legion"]
    },
    assassination_plots: [
        {
            id: 'plot_1',
            target: 'Lady Elara Veridia',
            target_title: 'Speaker of the Diet',
            rationale: "Veridia is the political heart of Imperial traditionalism. Her removal would cause chaos in the Diet and weaken the hardliners' influence.",
            method: 'Poisoned wine shipment from a "secret admirer".',
            status: 'Planning',
            intel_required: {
                target: 20,
                method: 60,
                status: 40
            }
        },
        {
            id: 'plot_2',
            target: 'Prefect Valerius',
            target_title: 'Administrator of "The Boiling Pot"',
            rationale: "Valerius is a competent administrator in a key occupied territory. His elimination would inspire a local uprising and disrupt Imperial supply lines.",
            method: 'Incite a riot and use the chaos to strike during his public address.',
            status: 'Information Gathering',
            intel_required: {
                target: 10,
                method: 40,
                status: 20
            }
        },
        {
            id: 'plot_3',
            target: 'Master Engineer Tiber',
            target_title: 'Artillery Chief, Siege Engineers',
            rationale: "Tiber is the mind behind the Empire's most destructive siege weapons. Removing him would cripple their ability to assault rebel strongholds.",
            method: 'Sabotage a prototype weapon during a live-fire test.',
            status: 'On Hold - High Risk',
            intel_required: {
                target: 50,
                method: 80,
                status: 30
            }
        }
    ]
};