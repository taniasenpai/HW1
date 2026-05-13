const questions = [
  {
    question: "hello",
    answer: "Hi! How can I help you today?"
  },
  {
    question: "who are you",
    answer: "I am a simple chatbot built with JavaScript."
  },
  {
    question: "projects",
    answer: "You can check my projects page in the navigation menu."
  },
  {
    question: "bye",
    answer: "Goodbye! Have a nice day 😊"
  }
];

const chatBox = document.getElementById("chatBox");
const form = document.getElementById("chatForm");
const input = document.getElementById("userInput");

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.classList.add("message", type);
  msg.textContent = text;

  chatBox.appendChild(msg);

  chatBox.scrollTop = chatBox.scrollHeight;
}

function getAnswer(userText) {
  userText = userText.toLowerCase().trim();

  for (let item of questions) {
    if (userText === item.question) {
      return item.answer;
    }
  }

  return "Sorry, I don't understand that question.";
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const userText = input.value.trim();
if (!userText) return;

  addMessage(userText, "user");

  const botReply = getAnswer(userText);
  addMessage(botReply, "bot");

  input.value = "";
});
addMessage("Hi! Ask me something 😊", "bot");