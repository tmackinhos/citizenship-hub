// Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Fake Login
function login() {
    alert("Login successful! Welcome to your dashboard.");
    showPage('dashboard');
}

// Flashcard Logic (I have added 5 to start, you can easily add the other 95 here)
const civicsQuestions = [
    { q: "What is the supreme law of the land?", a: "The Constitution" },
    { q: "What does the Constitution do?", a: "Sets up the government / Defines the government / Protects basic rights of Americans" },
    { q: "The idea of self-government is in the first three words of the Constitution. What are these words?", a: "We the People" },
    { q: "What is an amendment?", a: "A change or addition to the Constitution" },
    { q: "What do we call the first ten amendments to the Constitution?", a: "The Bill of Rights" }
];

let currentCardIndex = 0;

function loadCard() {
    const card = civicsQuestions[currentCardIndex];
    document.getElementById('card-question').innerText = card.q;
    document.getElementById('card-answer').innerText = card.a;
    document.getElementById('flashcard-container').classList.remove('flipped');
}

function flipCard() {
    document.getElementById('flashcard-container').classList.toggle('flipped');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % civicsQuestions.length;
    loadCard();
}

// Initialize first card
window.onload = loadCard;

// Mock AI Interview Logic
function sendMessage() {
    const input = document.getElementById('user-msg');
    const chatBox = document.getElementById('chat-box');
    
    if (input.value.trim() === "") return;

    // Add user message
    chatBox.innerHTML += `<div class="message user">${input.value}</div>`;
    
    // Auto-scroll
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate AI thinking and replying
    setTimeout(() => {
        chatBox.innerHTML += `<div class="message ai"><strong>Officer:</strong> Good. Now, can you tell me why you want to become a US Citizen?</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1500);

    input.value = "";
}
