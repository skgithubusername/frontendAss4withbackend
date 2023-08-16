
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Login from './components/Login';
import Pricing from './components/Pricing';
import './components/styles.css'; 
import Home from './components/Home';
function App() {
  return (
    <Router>
      
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Pricing" element={<Pricing />} />

          
        </Routes>
      </main>

     
    </Router>
  );
}





export default App;
