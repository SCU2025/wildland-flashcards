const cards = {
    "10s": [
    {
        "front": "SO 1",
        "back": "Keep informed on fire weather conditions and forecasts.",
        "image": "./SO1.png"
    },
    {
        "front": "SO 2",
        "back": "Know what your fire is doing at all times.",
        "image": "./SO2.png"
    },
    {
        "front": "SO 3",
        "back": "Base all actions on current and expected fire behavior.",
        "image": "./SO3.png"
    },
    {
        "front": "SO 4",
        "back": "Identify escape routes and safety zones and make them known.",
        "image": "./SO4.png"
    },
    {
        "front": "SO 5",
        "back": "Post lookouts when there is possible danger.",
        "image": "./SO5.png"
    },
    {
        "front": "SO 6",
        "back": "Be alert, keep calm, think clearly, act decisively.",
        "image": "./SO6.png"
    },
    {
        "front": "SO 7",
        "back": "Maintain prompt communications with your forces, your supervisor, and adjoining forces.",
        "image": "./SO7.png"
    },
    {
        "front": "SO 8",
        "back": "Give clear instructions and ensure they are understood.",
        "image": "./SO8.png"
    },
    {
        "front": "SO 9",
        "back": "Maintain control of your forces at all times.",
        "image": "./SO9.png"
    },
    {
        "front": "SO 10",
        "back": "Fight fire aggressively, having provided for safety first.",
        "image": "./SO10.png"
    }
],
    "18s": [
    {
        "front": "WO 1",
        "back": "Fire not scouted and sized up.",
        "image": "./WO1.png"
    },
    {
        "front": "WO 2",
        "back": "In country not seen in daylight.",
        "image": "./WO2.png"
    },
    {
        "front": "WO 3",
        "back": "Safety zones and escape routes not identified.",
        "image": "./WO3.png"
    },
    {
        "front": "WO 4",
        "back": "Unfamiliar with weather and local factors influencing fire behavior.",
        "image": "./WO4.png"
    },
    {
        "front": "WO 5",
        "back": "Uninformed on strategy, tactics, and hazards.",
        "image": "./WO5.png"
    },
    {
        "front": "WO 6",
        "back": "Instructions and assignments not clear.",
        "image": "./WO6.png"
    },
    {
        "front": "WO 7",
        "back": "No communication link with crew members or supervisor.",
        "image": "./WO7.png"
    },
    {
        "front": "WO 8",
        "back": "Constructing line without safe anchor point.",
        "image": "./WO8.png"
    },
    {
        "front": "WO 9",
        "back": "Building fireline downhill with fire below.",
        "image": "./WO9.png"
    },
    {
        "front": "WO 10",
        "back": "Attempting frontal assault on fire.",
        "image": "./WO10.png"
    },
    {
        "front": "WO 11",
        "back": "Unburned fuel between you and the fire.",
        "image": "./WO11.png"
    },
    {
        "front": "WO 12",
        "back": "Cannot see main fire, not in contact with someone who can.",
        "image": "./WO12.png"
    },
    {
        "front": "WO 13",
        "back": "On a hillside where rolling material can ignite fuel below.",
        "image": "./WO13.png"
    },
    {
        "front": "WO 14",
        "back": "Weather is getting hotter and drier.",
        "image": "./WO14.png"
    },
    {
        "front": "WO 15",
        "back": "Wind increases and/or changes direction.",
        "image": "./WO15.png"
    },
    {
        "front": "WO 16",
        "back": "Getting frequent spot fires across the line.",
        "image": "./WO16.png"
    },
    {
        "front": "WO 17",
        "back": "Terrain and fuels make escape to safety zones difficult.",
        "image": "./WO17.png"
    },
    {
        "front": "WO 18",
        "back": "Taking a nap near the fire line.",
        "image": "./WO18.png"
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

let quizMode = false;
let quizScore = 0;
let quizAnswered = false;
let missedCards = [];
let quizQuestions = [];
let currentQuestion = null;

function startQuiz() {
    quizQuestions = [...cards["10s"], ...cards["18s"]];
    shuffleArray(quizQuestions);
    quizMode = true;
    quizScore = 0;
    missedCards = [];
    currentIndex = 0;
    showQuizQuestion();
}

function showQuizQuestion() {
    if (currentIndex >= quizQuestions.length) {
        quizMode = false;
        let result = `Quiz Complete!\nFinal Score: ${quizScore} / ${quizQuestions.length}`;
        if (missedCards.length > 0) {
            result += `\nYou missed ${missedCards.length} cards. Review them now?`;
            if (confirm(result)) {
                currentSet = missedCards;
                currentIndex = 0;
                updateCard();
                return;
            }
        } else {
            alert(result + "\nGreat job!");
        }
        return;
    }

    currentQuestion = quizQuestions[currentIndex];
    const choices = generateChoices(currentQuestion, quizQuestions);

    const frontElem = document.getElementById("cardFront");
    const backElem = document.getElementById("cardBack");

    document.getElementById("cardInner").classList.remove("flipped");

    // Display question with multiple choices
    frontElem.innerHTML = `<div style='font-weight:bold; margin-bottom: 10px;'>${currentQuestion.front}</div>`;
    choices.forEach((choice) => {
        const btn = document.createElement("button");
        btn.textContent = choice;
        btn.style.margin = "5px";
        btn.style.padding = "10px";
        btn.style.fontSize = "14px";
        btn.onclick = () => checkQuizAnswer(choice);
        frontElem.appendChild(btn);
    });

    // Clear back face until user answers
    backElem.innerHTML = `<div style='font-size: 16px; color: #555;'>Tap an answer to see if it's correct</div>`;
}

function checkQuizAnswer(selected) {
    const correct = currentQuestion.back;
    const backElem = document.getElementById("cardBack");

    backElem.innerHTML = `<div style="font-size: 16px;"><strong>Correct Answer:</strong><br>${correct}</div>`;

    if (selected === correct) {
        quizScore++;
    } else {
        missedCards.push(currentQuestion);
    }

    document.getElementById("cardInner").classList.add("flipped");

    setTimeout(() => {
        currentIndex++;
        showQuizQuestion();
    }, 2500);
}

function generateChoices(correctCard, allCards) {
    const choices = [correctCard.back];
    while (choices.length < 4) {
        const rand = allCards[Math.floor(Math.random() * allCards.length)].back;
        if (!choices.includes(rand)) choices.push(rand);
    }
    return shuffleArray(choices);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let quizScore = 0;
let quizAnswered = false;
let missedCards = [];
let quizQuestions = [];
let currentQuestion = null;

function startQuiz() {
    quizQuestions = [...cards["10s"], ...cards["18s"]];
    shuffleArray(quizQuestions);
    quizMode = true;
    quizScore = 0;
    missedCards = [];
    currentIndex = 0;
    showQuizQuestion();
}

function showQuizQuestion() {
    if (currentIndex >= quizQuestions.length) {
        quizMode = false;
        let result = `Quiz Complete!\nFinal Score: ${quizScore} / ${quizQuestions.length}`;
        if (missedCards.length > 0) {
            result += `\nYou missed ${missedCards.length} cards. Review them now?`;
            if (confirm(result)) {
                currentSet = missedCards;
                currentIndex = 0;
                updateCard();
                return;
            }
        } else {
            alert(result + "\nGreat job!");
        }
        return;
    }

    currentQuestion = quizQuestions[currentIndex];
    const choices = generateChoices(currentQuestion, quizQuestions);
    const frontElem = document.getElementById("cardFront");
    const backElem = document.getElementById("cardBack");

    document.getElementById("cardInner").classList.remove("flipped");
    backElem.innerHTML = "";

    frontElem.innerHTML = `<div style='font-weight:bold;'>${currentQuestion.front}</div><br>`;
    choices.forEach((choice, index) => {
        const btn = document.createElement("button");
        btn.textContent = choice;
        btn.style.margin = "5px";
        btn.onclick = () => checkQuizAnswer(choice);
        frontElem.appendChild(btn);
    });
}

function checkQuizAnswer(selected) {
    const correct = currentQuestion.back;
    const backElem = document.getElementById("cardBack");
    backElem.innerHTML = `<div>${correct}</div>`;
    document.getElementById("cardInner").classList.add("flipped");

    if (selected === correct) {
        quizScore++;
    } else {
        missedCards.push(currentQuestion);
    }

    setTimeout(() => {
        currentIndex++;
        showQuizQuestion();
    }, 2000);
}

function generateChoices(correctCard, allCards) {
    const choices = [correctCard.back];
    while (choices.length < 4) {
        const rand = allCards[Math.floor(Math.random() * allCards.length)].back;
        if (!choices.includes(rand)) choices.push(rand);
    }
    return shuffleArray(choices);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let quizScore = 0;
let quizAnswered = false;
let missedCards = [];

function startQuiz() {
    shuffleCards();
    quizMode = true;
    quizScore = 0;
    quizAnswered = false;
    missedCards = [];
    alert("Quiz started! Tap a card to see the answer and track your score.");
}

function flipCard() {
    if (quizMode && !quizAnswered) {
        document.getElementById("cardInner").classList.toggle("flipped", true);
        quizAnswered = true;
        const userCorrect = confirm("Did you get it right?");
        if (userCorrect) {
            quizScore++;
        } else {
            missedCards.push(currentSet[currentIndex]);
        }
        alert(`Score: ${quizScore} / ${currentIndex + 1}`);
    } else if (!quizMode) {
        isFlipped = !isFlipped;
        document.getElementById("cardInner").classList.toggle("flipped", isFlipped);
    }
}

function nextCard() {
    if (currentSet.length === 0) return;
    currentIndex = (currentIndex + 1) % currentSet.length;
    quizAnswered = false;

    if (quizMode && currentIndex === 0) {
        quizMode = false;
        let result = `Quiz Complete!\nFinal Score: ${quizScore} / ${currentSet.length}`;
        if (missedCards.length > 0) {
            result += `\nYou missed ${missedCards.length} cards. Review them now?`;
            if (confirm(result)) {
                currentSet = missedCards;
                currentIndex = 0;
                updateCard();
                quizMode = false;
                return;
            }
        } else {
            alert(result + "\nGreat job!");
        }
    }

    updateCard();
}
let quizScore = 0;
let quizAnswered = false;

function startQuiz() {
    shuffleCards();
    quizMode = true;
    quizScore = 0;
    quizAnswered = false;
    alert("Quiz started! Tap a card to see the answer and track your score.");
}

function flipCard() {
    if (quizMode && !quizAnswered) {
        document.getElementById("cardInner").classList.toggle("flipped", true);
        quizAnswered = true;
        const userCorrect = confirm("Did you get it right?");
        if (userCorrect) quizScore++;
        alert(`Score: ${quizScore} / ${currentIndex + 1}`);
    } else if (!quizMode) {
        isFlipped = !isFlipped;
        document.getElementById("cardInner").classList.toggle("flipped", isFlipped);
    }
}

function nextCard() {
    if (currentSet.length === 0) return;
    currentIndex = (currentIndex + 1) % currentSet.length;
    if (quizMode && currentIndex === 0) {
        alert(`Quiz Complete! Final Score: ${quizScore} / ${currentSet.length}`);
        quizMode = false;
    }
    quizAnswered = false;
    updateCard();
}

function prevCard() {
    if (currentSet.length === 0) return;
    currentIndex = (currentIndex - 1 + currentSet.length) % currentSet.length;
    quizAnswered = false;
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

function resetApp() {
    localStorage.clear();
    location.reload();
}