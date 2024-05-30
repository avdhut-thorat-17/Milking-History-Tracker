import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import History from './components/History';
// import AddRecord from './components/AddRecord';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<History />} />
        {/* <Route path="/add-record" element={<AddRecord />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
