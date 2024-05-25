import React from 'react';
import './header.css';
import { FaAddressBook } from "react-icons/fa";

function Header() {
  return (
    <header>
      <h1><FaAddressBook /> My Portfolio <FaAddressBook /></h1>

    </header>
  );
}

export default Header;