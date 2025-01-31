function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    // Display user's message
    displayMessage(userInput, "user");

    // Clear the input field
    document.getElementById("user-input").value = "";

    // Generate bot's response
    const botResponse = getBotResponse(userInput);
    setTimeout(() => {
        displayMessage(botResponse, "robot");
    }, 1000);
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom

    // Adding a typing effect for the bot's response
    if (sender === "robot") {
        messageElement.innerHTML = '<span class="typing-dots">...</span>';
        setTimeout(() => {
            messageElement.textContent = message;
        }, 1500);
    }
}

function getBotResponse(userInput) {
    const lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput.includes("hello") || lowerCaseInput.includes("hi")) {
        return "Hi there! 😊 How can I assist you today?";
    } else if (lowerCaseInput.includes("how are you")) {
        return "I'm doing great, thank you! How about you?";
    } else if (lowerCaseInput.includes("i'm fine") || lowerCaseInput.includes("fine")) {
        return "That's awesome! What's on your mind today?";
    } else if (lowerCaseInput.includes("breakfast")) {
        return "Did you have a tasty breakfast today? 🍽️";
    } else if (lowerCaseInput.includes("lunch")) {
        return "What did you have for lunch today? 🍴";
    } else if (lowerCaseInput.includes("dinner")) {
        return "Have you had dinner yet, or are you planning something delicious soon? 🍝";
    } else if (lowerCaseInput.includes("thanks") || lowerCaseInput.includes("thank you")) {
        return "You're welcome! I'm here if you need anything else. 😊";
    } else if (lowerCaseInput.includes("okay")) {
        return "Got it! Let me know if you need anything else.";
    } else {
        return "Sorry, I didn't quite catch that. Can you try asking something else?";
    }
}

