import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg'; 
import settingsIcon from '../../assets/icons/settings.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="App Logo" className="header-logo" />
        <h1 className="header-title">BeyondChats</h1>
      </div>
      <div className="header-right">
        <button className="icon-button" aria-label="Settings">
          <img src={settingsIcon} alt="Settings" />
        </button>
      </div>
    </header>
  );
};

export default Header;
