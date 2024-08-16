import React from 'react';
import './header.css';
import { FaAddressBook } from "react-icons/fa";

function Header() {
  return (
    <header>
      <h1><FaAddressBook /> My Portfolio <FaAddressBook /></h1>

      <a href='/'>Top</a>
      <a href='/about'>About</a>
      <a href='/works'>Works</a>
      <a href='/skills'>Skills</a>
    </header>
  );
}

export default Header;