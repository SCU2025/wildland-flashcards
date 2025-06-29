const cards = {
    "10s": [
    {
        "front": "SO 1",
        "back": "Keep informed on fire weather conditions and forecasts.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/so1.png"
    },
    {
        "front": "SO 2",
        "back": "Know what your fire is doing at all times.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/so2.png"
    },
    {
        "front": "SO 3",
        "back": "Base all actions on current and expected fire behavior.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/so3.png"
    },
    {
        "front": "SO 4",
        "back": "Identify escape routes and safety zones and make them known.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/so4.png"
    },
    {
        "front": "SO 5",
        "back": "Post lookouts when there is possible danger.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/so5.png"
    },
    {
        "front": "SO 6",
        "back": "Be alert, keep calm, think clearly, act decisively.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/so6.png"
    },
    {
        "front": "SO 7",
        "back": "Maintain prompt communications with your forces, your supervisor, and adjoining forces.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/so7.png"
    },
    {
        "front": "SO 8",
        "back": "Give clear instructions and ensure they are understood.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/so8.png"
    },
    {
        "front": "SO 9",
        "back": "Maintain control of your forces at all times.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/so9.png"
    },
    {
        "front": "SO 10",
        "back": "Fight fire aggressively, having provided for safety first.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/so10.png"
    }
],
    "18s": [
    {
        "front": "WO 1",
        "back": "Fire not scouted and sized up.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo1.png"
    },
    {
        "front": "WO 2",
        "back": "In country not seen in daylight.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo2.png"
    },
    {
        "front": "WO 3",
        "back": "Safety zones and escape routes not identified.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo3.png"
    },
    {
        "front": "WO 4",
        "back": "Unfamiliar with weather and local factors influencing fire behavior.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo4.png"
    },
    {
        "front": "WO 5",
        "back": "Uninformed on strategy, tactics, and hazards.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo5.png"
    },
    {
        "front": "WO 6",
        "back": "Instructions and assignments not clear.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo6.png"
    },
    {
        "front": "WO 7",
        "back": "No communication link with crew members or supervisor.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo7.png"
    },
    {
        "front": "WO 8",
        "back": "Constructing line without safe anchor point.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo8.png"
    },
    {
        "front": "WO 9",
        "back": "Building fireline downhill with fire below.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo9.png"
    },
    {
        "front": "WO 10",
        "back": "Attempting frontal assault on fire.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo10.png"
    },
    {
        "front": "WO 11",
        "back": "Unburned fuel between you and the fire.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo11.png"
    },
    {
        "front": "WO 12",
        "back": "Cannot see main fire, not in contact with someone who can.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo12.png"
    },
    {
        "front": "WO 13",
        "back": "On a hillside where rolling material can ignite fuel below.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo13.png"
    },
    {
        "front": "WO 14",
        "back": "Weather is getting hotter and drier.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo14.png"
    },
    {
        "front": "WO 15",
        "back": "Wind increases and/or changes direction.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo15.png"
    },
    {
        "front": "WO 16",
        "back": "Getting frequent spot fires across the line.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo16.png"
    },
    {
        "front": "WO 17",
        "back": "Terrain and fuels make escape to safety zones difficult.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo17.png"
    },
    {
        "front": "WO 18",
        "back": "Taking a nap near the fire line.",
        "image": "https://raw.githubusercontent.com/SCU2025/wildland-flashcards/main/wo18.png"
    }
]
};

let currentSet = [];
let currentIndex = 0;
let isFlipped = false;

function loadSet(setName) {
    currentSet = cards[setName];
    currentIndex = 0;
    isFlipped = false;
    updateCard();
}

function flipCard() {
    isFlipped = !isFlipped;
    document.getElementById("cardInner").classList.toggle("flipped", isFlipped);
}

function updateCard() {
    const card = currentSet[currentIndex];
    document.getElementById("cardFront").textContent = card.front;

    const backElem = document.getElementById("cardBack");
    backElem.innerHTML = "";
    const text = document.createElement("div");
    text.textContent = card.back;
    backElem.appendChild(text);

    if (card.image) {
        const img = document.createElement("img");
        img.src = card.image;
        img.alt = card.front + " illustration";
        img.style.maxWidth = "100%";
        img.style.maxHeight = "100%";
        img.style.marginTop = "10px";
        img.style.objectFit = "contain";
        backElem.appendChild(img);
    }

    document.getElementById("cardInner").classList.remove("flipped");
    isFlipped = false;
}

function nextCard() {
    if (currentSet.length === 0) return;
    currentIndex = (currentIndex + 1) % currentSet.length;
    updateCard();
}

function prevCard() {
    if (currentSet.length === 0) return;
    currentIndex = (currentIndex - 1 + currentSet.length) % currentSet.length;
    updateCard();
}

function shuffleCards() {
    for (let i = currentSet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentSet[i], currentSet[j]] = [currentSet[j], currentSet[i]];
    }
    currentIndex = 0;
    updateCard();
}