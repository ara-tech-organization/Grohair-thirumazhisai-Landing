import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import GrohairLanding from './components/GrohairLanding';
import ThankYou from './components/ThankYou';
import PrivacyPolicy from './components/PrivacyPolicy';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GrohairLanding />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
