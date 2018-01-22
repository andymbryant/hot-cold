import React from 'react';

import Guess from './Guess';

class Game extends React.Component {

    getInput(e) {
        e.preventDefault();
        const guess = this.userInput.value;
        const guesses = this.props.guesses;

        if (isNaN(guess)) {
            alert('Please enter a number between 1 - 100');
            this.userInput.value = '';
        } else if (guess > 100 || guess < 0) {
            alert('Please enter a number between 1 - 100');
            this.userInput.value = '';
        } else if (guess === '') {
            alert('Please enter a number between 1 - 100');
            this.userInput.value = '';
        } else if (guesses.includes(guess)) {
            alert('You already guessed that!');
            this.userInput.value = '';
            return;
        }
        else {
            this.props.checkInput(guess);
            this.props.addGuess(guess);
        }
        this.userInput.value = '';
        console.log('hello');
    }

    //note

  render() {
    const color = this.props.color;
    const divStyle = {
        background: color
    }

    return (
        <div className="game-wrapper">
            <div className="feedback" style={divStyle}>
              <h3>{this.props.feedback}</h3>
            </div>
            <form action="" onSubmit={(e) => this.getInput(e)}>
                <div className="input-wrapper">
                    <input autoComplete="off" id="guessInput" type="text" maxLength="3" placeholder="Number between 1-100" ref={(input) => {this.userInput = input}} />
                    <button type="submit" className="submit">Submit</button>
                </div>
            </form>
            <div className="list-wrapper">
                <ul className="list-of-guesses">
                    {
                        Object
                            .keys(this.props.guesses)
                            .map(key => <Guess key={key} index={key} number={this.props.guesses[key]} />)
                    }
                </ul>
            </div>
        </div>
    );
  }
}

export default Game
