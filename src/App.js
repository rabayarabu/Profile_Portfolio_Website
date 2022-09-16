
import React from 'react';
import Greet from './pages/Greet';
import Name from './pages/Name';
import Contact from './pages/Contact';
import Worklist from './pages/Worklist';
import Home from './pages/home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />

      </Routes>
     
      {/* <Routes>
        <Route path="/" element={<Greet />} /> 
        <Route path="name" element={<Name />}/>  
     </Routes> */}
    </Router>
    {/* <Worklist />
    <Contact />  */}
    </>
    
  );
}

export default App;
