import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import users from '../data/users';  
import './Dashboard.css';

function Dashboard() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const selectedUser = users.find(user => user.id === selectedUserId);

  return (
    <div className="dashboard">
      <Header />
      <div className="main-content" style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
        <Sidebar
          users={users}
          selectedUserId={selectedUserId}
          onSelectUser={setSelectedUserId}
        />
        <ChatWindow user={selectedUser} />
      </div>
    </div>
  );
}

export default Dashboard