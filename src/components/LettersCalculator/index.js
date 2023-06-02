import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: 0}

  onChange = event => {
    this.setState({
      lettersCount: event.target.value.length,
    })
  }

  render() {
    const {lettersCount} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="inner-container-slide-left">
            <h1 className="head">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label className="label" htmlFor="input">
                Enter the phrase
              </label>
              <input
                id="input"
                className="user-input"
                type="text"
                placeholder="Enter the phrase"
                onChange={this.onChange}
              />
            </div>
            <button className="button" type="button">
              No.of Letters: {lettersCount}
            </button>
          </div>
          <div className="inner-container-slide-right">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
