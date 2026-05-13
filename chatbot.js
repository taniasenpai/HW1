let questions = [
    {
        question: "What do you think about my site?",
        options: {
            a: "I like it, it's so cute! 𐙚 ‧₊˚ ⋅",
            b: "It could use some work.."
        },
        correctAnswer: "a",
        correctResponse: "Super!",
        incorrectResponse: "Okai, I'll keep that in mind."
    },
    {
        question: "Whats your opinion about Tania?",
        options: {
            a: "My favourite person!",
            b: "I HATE her smh"
        },
        correctAnswer: "a",
        correctResponse: "Yay!",
        incorrectResponse: "Your opinion is not valid."
    },
    {
        question: "Do you enjoy music?",
        options: {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Music makes everything better",
        incorrectResponse: "Oh, that's unexpected!"
    },
    {
        question: "Do you like anime?",
        options: {
            a: "Yes",
            b: "NO!"
        },
        correctAnswer: "a",
        correctResponse: "OMG Yay me too",
        incorrectResponse: "You should give it a try."
    },
    {
        question: "Do you prefer cats or dogs?",
        options: {
            a: "Cats",
            b: "Dogs"
        },
        correctAnswer: "a",
        correctResponse: "The only right answer!",
        incorrectResponse: "Bye!"
    }
];

let currentQuestionIndex = 0;

let chatContainer = document.getElementById("chatBox");
let chatForm = document.getElementById("chatForm");
let userInput = document.getElementById("userInput");

// 💬 START MESSAGE
function startChat() {
    let startMsg = document.createElement("div");
    startMsg.classList.add("message", "bot");
    startMsg.innerHTML = `<strong>Bot:</strong> Hi! Let's start the quiz 💬`;
    chatContainer.appendChild(startMsg);

    displayQuestion();
}

startChat();

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];

    let optionsHTML = Object.keys(currentQuestion.options)
        .map(key => `${key}. ${currentQuestion.options[key]}`)
        .join("<br>");

    let botResponse = document.createElement("div");
    botResponse.classList.add("message", "bot");
    botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question}<br>${optionsHTML}`;

    chatContainer.appendChild(botResponse);

    scrollChatContainerToBottom();
}

function scrollChatContainerToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let userResponse = userInput.value.trim().toLowerCase();

    if (!["a", "b"].includes(userResponse)) {
        alert("Please type only 'a' or 'b'");
        return;
    }

    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerHTML = `<strong>You:</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);

    let currentQuestion = questions[currentQuestionIndex];

    let botResponse = document.createElement("div");
    botResponse.classList.add("message", "bot");

    if (userResponse === currentQuestion.correctAnswer) {
        botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.correctResponse}`;
    } else {
        botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.incorrectResponse}`;
    }

    chatContainer.appendChild(botResponse);

    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;

    userInput.value = "";

    displayQuestion();
    scrollChatContainerToBottom();
});