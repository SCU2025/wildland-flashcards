const cards = {
    "10s": [
        "1. Keep informed on fire weather conditions and forecasts.",
        "2. Know what your fire is doing at all times.",
        "3. Base all actions on current and expected fire behavior.",
        "4. Identify escape routes and safety zones and make them known.",
        "5. Post lookouts when there is possible danger.",
        "6. Be alert, keep calm, think clearly, act decisively.",
        "7. Maintain prompt communications with your forces, your supervisor, and adjoining forces.",
        "8. Give clear instructions and ensure they are understood.",
        "9. Maintain control of your forces at all times.",
        "10. Fight fire aggressively, having provided for safety first."
    ],
    "18s": [
        "1. Fire not scouted and sized up.",
        "2. In country not seen in daylight.",
        "3. Safety zones and escape routes not identified.",
        "4. Unfamiliar with weather and local factors influencing fire behavior.",
        "5. Uninformed on strategy, tactics, and hazards.",
        "6. Instructions and assignments not clear.",
        "7. No communication link with crew members or supervisor.",
        "8. Constructing line without safe anchor point.",
        "9. Building fireline downhill with fire below.",
        "10. Attempting frontal assault on fire.",
        "11. Unburned fuel between you and the fire.",
        "12. Cannot see main fire, not in contact with someone who can.",
        "13. On a hillside where rolling material can ignite fuel below.",
        "14. Weather is getting hotter and drier.",
        "15. Wind increases and/or changes direction.",
        "16. Getting frequent spot fires across the line.",
        "17. Terrain and fuels make escape to safety zones difficult.",
        "18. Taking a nap near the fire line."
    ]
};

let currentSet = [];
let currentIndex = 0;
let showingAnswer = false;

function loadSet(setName) {
    currentSet = cards[setName];
    currentIndex = 0;
    showingAnswer = false;
    document.getElementById("cardText").textContent = currentSet[currentIndex];
}

function flipCard() {
    showingAnswer = !showingAnswer;
    const card = document.getElementById("cardText");
    card.textContent = currentSet[currentIndex];
}

function nextCard() {
    if (currentSet.length === 0) return;
    currentIndex = (currentIndex + 1) % currentSet.length;
    document.getElementById("cardText").textContent = currentSet[currentIndex];
}

function prevCard() {
    if (currentSet.length === 0) return;
    currentIndex = (currentIndex - 1 + currentSet.length) % currentSet.length;
    document.getElementById("cardText").textContent = currentSet[currentIndex];
}

function shuffleCards() {
    for (let i = currentSet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentSet[i], currentSet[j]] = [currentSet[j], currentSet[i]];
    }
    currentIndex = 0;
    document.getElementById("cardText").textContent = currentSet[currentIndex];
}