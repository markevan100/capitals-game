import React from 'react'
import './Country.css'

const Country = props => {
  return (
    <div className="country__container">
      <h1>Country</h1>
      <h2>{props.country}</h2>
    </div>
  )
}

export default Country
