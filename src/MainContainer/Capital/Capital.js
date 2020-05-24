import React, { Component } from 'react'
import './Capital.css'

class Capital extends Component {
  state = {
    guess: '',
    answer: 'Ankara',
    correct: false,
    incorrect: false
  }

  submitHandler = e => {
    e.preventDefault();
    if (this.state.guess === this.state.answer) {
      this.setState({correct: true, incorrect: false})
    } else {
      this.setState({incorrect: true, correct: false})
    }
  }

  changeHandler = e => {
    this.setState({guess: e.target.value});
  }

  render() {
    return (
      <div className="capital__container">
        <h1>Capital </h1>
        <form onSubmit={this.submitHandler}>
          <input type='text' onChange={this.changeHandler}/>
        </form>
        { this.state.incorrect ?
          <div className="capital__answer-container capital__incorrect">
            Sorry, the capital is {this.state.answer}.
          </div> : null }
        { this.state.correct ?
          <div className="capital__answer-container capital__correct">
            You're right, the capital is {this.state.answer}!
          </div> : null }
      </div>
    );
  }
}


export default Capital
