import React, { useState } from 'react';
import './App.css';
import Result from './components/Result';
import Search from './components/Search';
import locations from './locations.json'

/* The App.js file is acting as our only "Page" component since the funcitonality of the site is so simple. 
Normally we would set up routes to different pages here using react-router-dom. */

function App() {

  const [locationsState, setLocationsState] = useState(locations)

  const [searchResultsState, setSearchResultsState] = useState()

  const handleClick = e => {
    e.preventDefault()
    const searchParam = e.target.attributes.getNamedItem("data-value").value
    const cityStateArr = searchParam.split(', ')
    const searchResults = locationsState.filter(location => location.city.toLowerCase() === cityStateArr[0].toLowerCase())
    setSearchResultsState(searchResults)
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <div className='row'>
          <Search handleClick={handleClick} />
        </div>
        <div className="row">
          {!searchResultsState ? <></> : searchResultsState.map(r =>
            (
              <Result
                key={r.city + ", " + r.state}
                city={r.city}
                state={r.state}
                population={r.population}
                growth={r.growth_from_2000_to_2013}
                lat={r.latitude}
                long={r.longitude}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
