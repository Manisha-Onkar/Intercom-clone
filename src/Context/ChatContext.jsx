
import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [messages, setMessages] = useState({}); 

  const selectUser = (userId) => {
    setSelectedUserId(userId);
  };

  const sendMessage = (userId, message) => {
    setMessages((prev) => ({
      ...prev,
      [userId]: [...(prev[userId] || []), message],
    }));
  };

  return (
    <ChatContext.Provider
      value={{
        selectedUserId,
        messages,
        selectUser,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};


export const useChat = () => useContext(ChatContext);
