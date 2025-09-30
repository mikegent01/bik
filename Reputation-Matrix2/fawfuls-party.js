const TIMELINE_DATA = [
    {
        time: "19:00 - Arrival",
        title: "Welcoming of Fools",
        icon: "icon_quests.png",
        description: "All guests of sufficient evilness are to arrive. Fawful will greet them with chortles and condescension. Minions will provide appetizers that may or may not be sentient.",
        isCurrent: false,
    },
    {
        time: "20:00 - Entertainment",
        title: "Beanish Brilliance Showcase",
        icon: "faction_fawful.png",
        description: "Fawful will deliver a monologue of magnificent length detailing his genius. This will be followed by a demonstration of a new, probably dangerous, invention.",
        isCurrent: false,
    },
    {
        time: "21:00 - The Main Event",
        title: "Dinner is Served!",
        icon: "faction_peach_loyalists.png",
        description: "The main course, consisting of captured Peach Loyalist soldiers, will be presented to the guests. It will be a meal of victory and fury! Their despair will be the most delicious sauce!",
        isCurrent: false,
    },
    {
        time: "22:00 - Gloating",
        title: "Post-Dinner Monologue",
        icon: "icon_focus.png",
        description: "After the guests have feasted on failure, Fawful will deliver a second, even more brilliant monologue. He will detail the next phase of his glorious plan for domination.",
        isCurrent: true,
    },
    {
        time: "23:00 - Finale",
        title: "The Grand Departure",
        icon: "icon_dossier.png",
        description: "Guests will be 'encouraged' to depart, basking in the glow of Fawful's genius. The castle's defense systems will be put on high alert to ensure no one overstays their welcome.",
        isCurrent: false,
    }
];

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    let html = '';
    TIMELINE_DATA.forEach((event, index) => {
        const side = index % 2 === 0 ? 'left' : 'right';
        const currentClass = event.isCurrent ? 'current-event' : '';
        html += `
            <div class="timeline-event ${side} ${currentClass}">
                <div class="timeline-content">
                    <div class="timeline-header">
                         <img src="${event.icon}" alt="Event Icon" class="timeline-icon">
                         <div class="timeline-title-group">
                            <h4>${event.title}</h4>
                            <span class="timeline-time">${event.time}</span>
                         </div>
                    </div>
                    <p>${event.description}</p>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}


function init() {
    renderTimeline();
}

init();