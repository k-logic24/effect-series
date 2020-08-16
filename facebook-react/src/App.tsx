import React, {ReactComponentElement, useState} from 'react';

import {ReactComponent as PlusIcon} from "./assets/plus.svg";
import {ReactComponent as BellIcon} from "./assets/bell.svg";
import {ReactComponent as MessengerIcon} from "./assets/messanger.svg";
import {ReactComponent as CaretIcon} from "./assets/caret.svg";
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import DropdownMenu from "./components/Dropdown";
import './App.css';

const App = () => {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu/>
      </NavItem>
    </Navbar>
  );
}
export default App;
