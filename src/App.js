import React from 'react';
import './App.css';
import Search from './components/Search';

/* The App.js file is acting as our only "Page" component since the funcitonality of the site is so simple. 
Normally we would set up routes to different pages here using react-router-dom */

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
