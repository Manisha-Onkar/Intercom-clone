import React from 'react';
import './Sidebar.css';
import menuIcon from '../../assets/icons/Menu.png';
import UserList from '../UserList/UserList';

const Sidebar = ({ users, selectedUserId, onSelectUser }) => {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <img src={menuIcon} alt="Menu" className="menu-icon" />
        <h2>Chats</h2>
      </header>
      <UserList users={users} selectedUserId={selectedUserId} onSelectUser={onSelectUser} />
    </aside>
  );
};

export default Sidebar;
