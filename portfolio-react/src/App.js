import './App.css';
import React from 'react';
import Header from './components/header.js'
import Top from './components/top/top.js'
import About from './components/about/about.js'
import Skills from './components/skills/skills.js'
import Works from './components/works/works.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
