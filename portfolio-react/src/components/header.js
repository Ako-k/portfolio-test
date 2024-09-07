import React from 'react';
import './header.css';
// import { FaAddressBook } from "react-icons/fa";

function Header() {
  return (
    <header>
      <h1><i class="nes-icon user user-icon"></i> My Portfolio <i class="nes-icon user user-icon"></i></h1>

      <a href='/'>Top</a>
      <a href='/about'>About</a>
      <a href='/works'>Works</a>
      <a href='/skills'>Skills</a>
    </header>
  );
}

export default Header;