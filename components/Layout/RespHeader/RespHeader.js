import React, { useState } from 'react';

import RespHeaderElem from './RespHeader.styles';
import Menu from '../../UI/RespNav/RespMenu';
import { MenuToggleElem } from '../../UI/RespNav/RespMenu.styles';
import Logo from '../../UI/Logo/Logo';

export default () => {
  const [isOpen, toggleMenuState] = useState(false);

  const toggleMenu = () => {
    toggleMenuState(!isOpen);
  };

  return (
    <RespHeaderElem>
      <Logo responsive />
      <MenuToggleElem href="#" aria-label="Open main menu" onClick={toggleMenu}>
        <span className="sr-only">Open main menu</span>
        <img src="assets/svg/icon-menu.svg" alt="Header Logo" />
      </MenuToggleElem>

      <Menu onClose={toggleMenu} isOpen={isOpen} />
    </RespHeaderElem>
  );
};
