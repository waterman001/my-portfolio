import React from 'react';
import './App.css';
import Home from "./new/Components/Home"
import Projects from "./new/Components/Projects";
import ContactME from "./new/Components/ContactMe";
import Navbar from "./new/Components/Navbar/Navbar"


function App() {
  return (
   <div> 
 
   <Navbar />
      <Home title="home" id="home" />
      <Projects title="projects" id="projects" />
      <ContactME title="contact" id="contact" />
      
     </div>
  );
}

export default (App);
