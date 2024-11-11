import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tesla from './Tesla.jsx';
import TeslaHome from './Teslahome.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeslaHome />} />
        <Route path="/models" element={<Tesla />} />
      </Routes>
    </Router>
  );
}

export default App;
