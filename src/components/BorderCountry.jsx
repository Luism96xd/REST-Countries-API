import React from 'react'
import { Link } from 'react-router-dom';

const BorderCountry = ({name}) => {
  debugger
  return (
    <Link className="App-link" to={`/alpha/${name}`}>
      <button key={`${name}_border`} className="light-button">{name}</button>
    </Link>
  )
}

export default BorderCountry;