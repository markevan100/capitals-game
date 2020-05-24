import React from 'react'
import './MainContainer.css'
import Country from './Country/Country'
import Capital from './Capital/Capital'

const MainContainer = () => {
  return (
    <div className="main-container__container">
      <Country />
      <Capital />
    </div>
  )
}

export default MainContainer;
