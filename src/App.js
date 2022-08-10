
import React from 'react';
import Greet from './pages/Greet';
import Name from './pages/Name';
import Contact from './pages/Contact';
import About from './pages/About';
import Instagram from './pages/Instagram';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";





function App() {
  return (
    <>
    <Greet name="rabu"/>
    <Router>
      <Routes>
        <Route path="/" element={<Name />} />
             <Route path="?instagram" element={<Instagram />}></Route>
        <Route path="about" element={<About />}/>
        
      </Routes>
    </Router>
    <Contact />
    
    </>
    
  );
}

export default App;
