import React from 'react'
import './Capital.css'

const Capital = props => {


  return (
    <div className="capital__container">
      <h1>Capital </h1>
      <form onSubmit={props.submitted}>
        <input type='text' value={props.guess} onChange={props.changed}/>
      </form>
      { props.incorrect ?
        <div className="capital__answer-container capital__incorrect">
          Sorry, the capital is {props.capital}.
        </div> : null }
      { props.correct ?
        <div className="capital__answer-container capital__correct">
          You're right, the capital is {props.capital}!
        </div> : null }
    </div>
  );
}

export default Capital;
