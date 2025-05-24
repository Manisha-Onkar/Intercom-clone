import React from 'react';
import './UserList.css';

const UserList = ({ users, selectedUserId, onSelectUser }) => {
  return (
    <ul className="user-list" role="listbox" aria-label="User chat list">
      {users.map(user => (
        <li
          key={user.id}
          role="option"
          aria-selected={user.id === selectedUserId}
          className={`user-item ${user.id === selectedUserId ? 'selected' : ''}`}
          onClick={() => onSelectUser(user.id)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onSelectUser(user.id);
            }
          }}
        >
          <img src={user.avatar} alt={`${user.name} avatar`} className="user-avatar" />
          <div className="user-info">
            <p className="user-name">{user.name}</p>
            <p className="last-message">{user.lastMessage}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
