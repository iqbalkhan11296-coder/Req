// ================================
// CHAT SETTINGS
// ================================

let currentUser = localStorage.getItem("chatUser");

const loginScreen = document.getElementById("loginScreen");
const chatApp = document.getElementById("chatApp");

const nameInput = document.getElementById("nameInput");
const loginBtn = document.getElementById("loginBtn");

const logoutBtn = document.getElementById("logoutBtn");

const messagesDiv = document.getElementById("messages");
const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");


// ================================
// LOGIN
// ================================

function showChat() {

    loginScreen.classList.add("hidden");
    chatApp.classList.remove("hidden");

    loadMessages();

    messageInput.focus();
}


function showLogin() {

    chatApp.classList.add("hidden");
    loginScreen.classList.remove("hidden");

    nameInput.value = "";
}


// Login button

loginBtn.addEventListener("click", () => {

    const name = nameInput.value.trim();

    if (!name) {
        alert("Please enter your name ❤️");
        return;
    }

    currentUser = name;

    localStorage.setItem(
        "chatUser",
        currentUser
    );

    showChat();
});


// Press Enter to login

nameInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        loginBtn.click();
    }

});


// Logout

logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("chatUser");

    currentUser = null;

    showLogin();

});


// ================================
// LOAD MESSAGES
// ================================

async function loadMessages() {

    const { data, error } = await db
        .from("messages")
        .select("*")
        .order("created_at", {
            ascending: true
        });

    if (error) {

        console.error(
            "Error loading messages:",
            error
        );

        return;
    }

    messagesDiv.innerHTML = "";

    if (!data || data.length === 0) {

        messagesDiv.innerHTML = `
            <div class="welcome-message">
                <div>❤️</div>
                <p>Start our conversation...</p>
            </div>
        `;

        return;
    }

    data.forEach(message => {
        displayMessage(message);
    });

    scrollToBottom();
}


// ================================
// DISPLAY MESSAGE
// ================================

function displayMessage(message) {

    const isMine =
        message.sender === currentUser;

    const messageDiv =
        document.createElement("div");

    messageDiv.className =
        "message " +
        (isMine ? "mine" : "");


    const content =
        document.createElement("div");

    content.className =
        "message-content";


    const sender =
        document.createElement("div");

    sender.className =
        "sender-name";

    sender.textContent =
        isMine ? "You" : message.sender;


    const text =
        document.createElement("div");

    text.className =
        "message-text";

    text.textContent =
        message.message;


    const time =
        document.createElement("div");

    time.className =
        "message-time";

    time.textContent =
        formatTime(message.created_at);


    content.appendChild(sender);
    content.appendChild(text);
    content.appendChild(time);

    messageDiv.appendChild(content);

    messagesDiv.appendChild(messageDiv);
}


// ================================
// SEND MESSAGE
// ================================

messageForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();

        const text =
            messageInput.value.trim();

        if (!text) {
            return;
        }

        if (!currentUser) {
            alert("Please login first.");
            return;
        }


        // Disable button while sending

        const sendBtn =
            document.getElementById("sendBtn");

        sendBtn.disabled = true;


        const { error } = await db
            .from("messages")
            .insert([
                {
                    sender: currentUser,
                    message: text
                }
            ]);


        if (error) {

            console.error(
                "Error sending message:",
                error
            );

            alert(
                "Message could not be sent."
            );

        } else {

            messageInput.value = "";

        }


        sendBtn.disabled = false;

        messageInput.focus();
    }
);


// ================================
// REAL-TIME MESSAGES
// ================================

db.channel("chat-room")

    .on(
        "postgres_changes",
        {
            event: "INSERT",
            schema: "public",
            table: "messages"
        },
        (payload) => {

            // Remove welcome message

            const welcome =
                messagesDiv.querySelector(
                    ".welcome-message"
                );

            if (welcome) {
                welcome.remove();
            }

            displayMessage(payload.new);

            scrollToBottom();
        }
    )

    .subscribe();


// ================================
// TIME FORMAT
// ================================

function formatTime(dateString) {

    const date =
        new Date(dateString);

    return date.toLocaleTimeString(
        [],
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    );
}


// ================================
// SCROLL
// ================================

function scrollToBottom() {

    messagesDiv.scrollTop =
        messagesDiv.scrollHeight;
}


// ================================
// AUTO LOGIN
// ================================

if (currentUser) {

    showChat();

}
