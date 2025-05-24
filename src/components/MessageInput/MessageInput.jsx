import React, { useState } from 'react';
import './MessageInput.css';
import sendIcon from '../../assets/icons/send.svg';
import attachmentIcon from '../../assets/icons/Attachment.png';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="message-input-container">
      <button className="icon-button">
        <img src={attachmentIcon} alt="Attach" />
      </button>
      <textarea
        className="message-input"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
      />
      <button className="icon-button" onClick={handleSend}>
        <img src={sendIcon} alt="Send" />
      </button>
    </div>
  );
};

export default MessageInput;
