import React from 'react';

const HamburgerIcon = ({ toggleMenu, isMenuOpen }) => {
  return (
    <>
      <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`hamburger-icon-2 ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default HamburgerIcon;
