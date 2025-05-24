// /* intercom-clone/
// ├── public/
// │   └── index.html
// ├── src/
// │   ├── assets/                 # Static files (images, icons)
// │   ├── components/             # All UI components
// │   │   ├── Sidebar/
// │   │   │   ├── Sidebar.jsx
// │   │   │   └── Sidebar.css
// │   │   ├── Header/
// │   │   │   ├── Header.jsx
// │   │   │   └── Header.css
// │   │   ├── UserList/
// │   │   │   ├── UserList.jsx
// │   │   │   └── UserList.css
// │   │   ├── ChatWindow/
// │   │   │   ├── ChatWindow.jsx
// │   │   │   └── ChatWindow.css
// │   │   ├── MessageInput/
// │   │   │   ├── MessageInput.jsx
// │   │   │   └── MessageInput.css
// │   │   └── Shared/             # Reusable UI (Button, Modal, etc.)
// │   │       ├── Button.jsx
// │   │       ├── Button.css
// │   │       ├── Modal.jsx
// │   │       └── Modal.css
// │   ├── context/                # App-level state (optional)
// │   │   ├── ChatContext.js
// │   ├── data/                   # Dummy data
// │   │   ├── users.js
// │   │   ├── messages.js
// │   ├── pages/
//     ├── chat.jsx
//     ├── chat.css        # Main layout: sidebar + content
// │   │   ├── Dashboard.jsx       # Main layout: sidebar + content
// │   │   └── Chat.jsx            # Full chat interface
// │   ├── App.jsx
// │   ├── App.css                 # Global app layout styles
// │   ├── index.js
// │   └── index.css               # Reset, base styles, responsiveness
// ├── .gitignore
// ├── package.json
// ├── README.md
// └── vite.config.js / webpack config (depending on setup) */ ok so i create this structure of my project assignment  

import React from 'react';
import './ChatWindow.css';
import emptyChatIllustration from '../../assets/illustrations/empty-chat.svg';
import MessageInput from '../MessageInput/MessageInput';
import messages from '../../data/messages';  

const ChatWindow = ({ user }) => {
  if (!user) {
    return (
      <div className="chat-empty">
        <img src={emptyChatIllustration} alt="No chat selected" />
        <p>Select a user to start chatting</p>
      </div>
    );
  }

  const userMessages = messages[user.id] || [];

  const handleSendMessage = (message) => {
    console.log(`Send to ${user.name}:`, message);
    
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <img src={user.avatar} alt={user.name} className="chat-user-avatar" />
        <h3 className="chat-user-name">{user.name}</h3>
      </div>

      <div className="chat-body">
        {userMessages.length === 0 ? (
          <p className="chat-placeholder">No messages yet. Start the conversation!</p>
        ) : (
          userMessages.map((msg) => (
            <p
              key={msg.id}
              className={`chat-message ${msg.sender === 'You' ? 'sent' : 'received'}`}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          ))
        )}
      </div>

      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
