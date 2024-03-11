// App.js
import React from 'react';
import Dashboard from './components/Dashboard';
import DistributorCard from './components/DistributorCard'; // Correct the path
import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard /> {/* Render your Dashboard component */}
    </div>
  );
}

export default App;
