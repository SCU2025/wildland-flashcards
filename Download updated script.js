const cards = {
    "10s": [
        { front: "SO 1", back: "Keep informed on fire weather conditions and forecasts." },
        { front: "SO 2", back: "Know what your fire is doing at all times." },
        { front: "SO 3", back: "Base all actions on current and expected fire behavior." },
        { front: "SO 4", back: "Identify escape routes and safety zones and make them known." },
        { front: "SO 5", back: "Post lookouts when there is possible danger." },
        { front: "SO 6", back: "Be alert, keep calm, think clearly, act decisively." },
        { front: "SO 7", back: "Maintain prompt communications with your forces, your supervisor, and adjoining forces." },
        { front: "SO 8", back: "Give clear instructions and ensure they are understood." },
        { front: "SO 9", back: "Maintain control of your forces at all times." },
        { front: "SO 10", back: "Fight fire aggressively, having provided for safety first." }
    ],
    "18s": [
        { front: "WO 1", back: "Fire not scouted and sized up." },
        { front: "WO 2", back: "In country not seen in daylight." },
        { front: "WO 3", back: "Safety zones and escape routes not identified." },
        { front: "WO 4", back: "Unfamiliar with weather and local factors influencing fire behavior." },
        { front: "WO 5", back: "Uninformed on strategy, tactics, and hazards." },
        { front: "WO 6", back: "Instructions and assignments not clear." },
        { front: "WO 7", back: "No communication link with crew members or supervisor." },
        { front: "WO 8", back: "Constructing line without safe anchor point." },
        { front: "WO 9", back: "Building fireline downhill with fire below." },
        { front: "WO 10", back: "Attempting frontal assault on fire." },
        { front: "WO 11", back: "Unburned fuel between you and the fire." },
        { front: "WO 12", back: "Cannot see main fire, not in contact with someone who can." },
        { front: "WO 13", back: "On a hillside where rolling material can ignite fuel below." },
        { front: "WO 14", back: "Weather is getting hotter and drier." },
        { front: "WO 15", back: "Wind increases and/or changes direction." },
        { front: "WO 16", back: "Getting frequent spot fires across the line." },
        { front: "WO 17", back: "Terrain and fuels make escape to safety zones difficult." },
        { front: "WO 18", back: "Taking a nap near the fire line." }
    ]
};

let currentSet = [];
let currentIndex = 0;
let showingBack = false;

function loadSet(setName) {
    currentSet = cards[setName];
    currentIndex = 0;
    showingBack = false;
    updateCardText();
}

function flipCard() {
    showingBack = !showingBack;
    updateCardText();
}

function updateCardText() {
    const card = currentSet[currentIndex];
    const cardText = document.getElementById("cardText");
    cardText.textContent = showingBack ? card.back : card.front;
    cardText.className = showingBack ? "back" : "front";
}

function nextCard() {
    if (currentSet.length === 0) return;
    currentIndex = (currentIndex + 1) % currentSet.length;
    showingBack = false;
    updateCardText();
}

function prevCard() {
    if (currentSet.length === 0) return;
    currentIndex = (currentIndex - 1 + currentSet.length) % currentSet.length;
    showingBack = false;
    updateCardText();
}

function shuffleCards() {
    for (let i = currentSet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentSet[i], currentSet[j]] = [currentSet[j], currentSet[i]];
    }
    currentIndex = 0;
    showingBack = false;
    updateCardText();
}