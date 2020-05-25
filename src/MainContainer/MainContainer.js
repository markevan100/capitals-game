import React, { Component } from 'react'
import './MainContainer.css'
import Country from './Country/Country'
import Capital from './Capital/Capital'

class MainContainer extends Component {
  state = {
    info: [
      {country: 'Turkey',
       capital: 'Ankara'},
      {country: 'Bangladesh',
       capital: 'Dhaka'},
      {country: 'India',
       capital: 'New Delhi'}
     ],
    capital: '',
    correct: false,
    country: '',
    guess: '',
    incorrect: false,
    score: 0,
    turn: 0
  }

  componentWillMount() {
    this.setUpTurn()
  }

  setUpTurn = () => {
    const randomNumber = Math.floor(Math.random() * Math.floor(3))
    const info = this.state.info[randomNumber]
    this.setState({ country: info['country'], capital: info['capital'], correct: false, incorrect: false })
    console.log(this.state)
  }

  submitHandler = e => {
    e.preventDefault();
    this.setState({ guess: '' })
    if (this.state.guess === this.state.capital) {
      this.setState({ correct: true, score: this.state.score + 1, turn: this.state.turn + 1 })
    } else {
      this.setState({ incorrect: true })
    }
  }

  changeHandler = e => {
    this.setState({ guess: e.target.value });
  }

  render() {
    return (
      <>
        <div className="main-container__container">
          <Country
            country={this.state.country} />
          <Capital
            changed={this.changeHandler}
            submitted={this.submitHandler}
            guess={this.state.guess}
            capital={this.state.capital}
            correct={this.state.correct}
            incorrect={this.state.incorrect} />
        </div>
        <button onClick={this.setUpTurn}>Next</button>
        <div className="main-container__score">
          Your score is: {this.state.score} / {this.state.turn}
        </div>
      </>
    )
  }
}

export default MainContainer;
