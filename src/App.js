
import React from 'react';
import Greet from './pages/Greet';
import Name from './pages/Name';
import Contact from './pages/Contact';
import Worklist from './pages/Worklist';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";





function App() {
  return (
    <>
    {/* <Greet name="rabu"/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Greet />} />
        <Route path="name" element={<Name />}/>
        
      </Routes>
    </Router>
    <Contact />
    <Worklist />
    
    </>
    
  );
}

export default App;
