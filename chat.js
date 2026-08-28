/* ========================================
   RESET
======================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
}

body {
    font-family: Arial, sans-serif;
    background: #f4eef0;
    color: #333;
    overflow: hidden;
}


/* ========================================
   LOGIN SCREEN
======================================== */

.login-screen {
    position: fixed;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    background: linear-gradient(
        135deg,
        #541027,
        #8a2948
    );

    z-index: 100;
}

.login-box {
    width: 100%;
    max-width: 380px;

    background: #ffffff;

    padding: 40px 30px;

    border-radius: 24px;

    text-align: center;

    box-shadow:
        0 20px 60px rgba(0, 0, 0, 0.25);
}

.heart {
    font-size: 52px;
    margin-bottom: 10px;
}

.login-box h1 {
    color: #68152f;
    font-size: 30px;
    margin-bottom: 8px;
}

.login-box p {
    color: #888;
    margin-bottom: 25px;
}

.login-box input {
    width: 100%;
    height: 50px;

    padding: 0 15px;

    border: 1px solid #ddd;
    border-radius: 12px;

    outline: none;

    font-size: 16px;

    margin-bottom: 12px;
}

.login-box input:focus {
    border-color: #711832;
}

.login-box button {
    width: 100%;
    height: 50px;

    border: none;
    border-radius: 12px;

    background: #711832;
    color: white;

    font-size: 16px;
    font-weight: bold;

    cursor: pointer;
}


/* ========================================
   CHAT APP
======================================== */

.chat-app {
    position: fixed;

    inset: 0;

    width: 100%;
    height: 100dvh;

    max-width: 700px;

    margin: 0 auto;

    background: #ffffff;

    display: flex;
    flex-direction: column;

    overflow: hidden;
}


/* ========================================
   HEADER
======================================== */

.chat-header {
    flex: 0 0 70px;

    width: 100%;

    background: #711832;
    color: white;

    display: flex;

    align-items: center;
    justify-content: space-between;

    padding: 10px 15px;

    position: relative;

    z-index: 5;
}

.profile {
    display: flex;

    align-items: center;

    gap: 11px;

    min-width: 0;
}

.avatar {
    width: 44px;
    height: 44px;

    flex-shrink: 0;

    background: white;

    color: #711832;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 21px;
}

.profile h2 {
    font-size: 18px;

    line-height: 1.2;
}

#onlineStatus {
    display: block;

    margin-top: 3px;

    font-size: 11px;

    opacity: 0.8;
}

.logout-btn {
    flex-shrink: 0;

    border: none;

    background: rgba(255, 255, 255, 0.16);

    color: white;

    padding: 8px 11px;

    border-radius: 8px;

    cursor: pointer;
}


/* ========================================
   MESSAGE AREA
======================================== */

.messages {
    flex: 1 1 auto;

    width: 100%;

    min-height: 0;

    overflow-y: auto;

    overflow-x: hidden;

    padding: 18px 14px 15px;

    background: #faf7f8;

    display: flex;

    flex-direction: column;
}


/* ========================================
   WELCOME
======================================== */

.welcome-message {
    width: 100%;

    margin: auto;

    text-align: center;

    color: #aaa;

    padding: 30px;
}

.welcome-message div {
    font-size: 38px;

    margin-bottom: 8px;
}

.welcome-message p {
    font-size: 14px;
}


/* ========================================
   MESSAGE
======================================== */

.message {
    width: 100%;

    display: flex;

    margin-bottom: 9px;
}

.message.mine {
    justify-content: flex-end;
}

.message-content {
    max-width: min(75%, 480px);

    padding: 9px 13px;

    background: #eeeeee;

    color: #333;

    border-radius: 17px;

    word-break: break-word;

    overflow-wrap: anywhere;
}

.message.mine .message-content {
    background: #711832;

    color: white;

    border-bottom-right-radius: 5px;
}

.message:not(.mine) .message-content {
    border-bottom-left-radius: 5px;
}

.sender-name {
    font-size: 10px;

    font-weight: bold;

    margin-bottom: 3px;

    opacity: 0.65;
}

.message-text {
    font-size: 15px;

    line-height: 1.4;

    white-space: pre-wrap;
}

.message-time {
    font-size: 9px;

    opacity: 0.6;

    margin-top: 4px;

    text-align: right;
}


/* ========================================
   INPUT AREA
======================================== */

.message-form {
    flex: 0 0 auto;

    width: 100%;

    display: flex;

    align-items: center;

    gap: 8px;

    padding: 10px 12px;

    background: white;

    border-top: 1px solid #eeeeee;

    padding-bottom:
        calc(10px + env(safe-area-inset-bottom));
}

.message-form input {
    flex: 1;

    min-width: 0;

    height: 46px;

    padding: 0 16px;

    border: 1px solid #dddddd;

    border-radius: 24px;

    outline: none;

    font-size: 15px;

    background: #fafafa;
}

.message-form input:focus {
    border-color: #711832;

    background: white;
}

.message-form button {
    flex: 0 0 46px;

    width: 46px;
    height: 46px;

    border: none;

    border-radius: 50%;

    background: #711832;

    color: white;

    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
}

.message-form button:disabled {
    opacity: 0.5;

    cursor: not-allowed;
}


/* ========================================
   SCROLLBAR
======================================== */

.messages::-webkit-scrollbar {
    width: 5px;
}

.messages::-webkit-scrollbar-thumb {
    background: #d0c4c8;

    border-radius: 10px;
}


/* ========================================
   HIDDEN
======================================== */

.hidden {
    display: none !important;
}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

    .chat-header {
        flex-basis: 64px;

        padding: 8px 12px;
    }

    .avatar {
        width: 40px;
        height: 40px;

        font-size: 19px;
    }

    .profile h2 {
        font-size: 16px;
    }

    .logout-btn {
        font-size: 12px;

        padding: 7px 9px;
    }

    .messages {
        padding: 14px 10px;
    }

    .message-content {
        max-width: 82%;

        padding: 9px 12px;
    }

    .message-text {
        font-size: 14px;
    }

    .message-form {
        padding-left: 8px;
        padding-right: 8px;
    }
}
