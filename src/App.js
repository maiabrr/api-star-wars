import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:resource/:id" element={<SearchResult />} />
      </Routes>
    </Router>
  );
}

export default App;
