import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import locations from './locations.json'

/* The App.js file is acting as our only "Page" component since the funcitonality of the site is so simple. 
Normally we would set up routes to different pages here using react-router-dom */

function App() {

  const [locationsState, setLocationsState] = useState(locations)

  const handleClick = e => {
    e.preventDefault()
    const searchParam = e.target.attributes.getNamedItem("data-value").value
    const cityStateArr = searchParam.split(', ')
    const searchResults = locationsState.filter(location => location.city.toLowerCase() === cityStateArr[0].toLowerCase())
    console.log(searchResults)
  }

  return (
    <div className="App">
      <Search handleClick={handleClick} />
    </div>
  );
}

export default App;
