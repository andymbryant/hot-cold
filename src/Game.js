import React from 'react';

class Game extends React.Component {

    getInput(e) {
        e.preventDefault();
        const guess = this.userInput.value;

        if (isNaN(guess)) {
            alert('Please enter a number');
            this.userInput.value = '';
        } else if (guess > 100 || guess < 0) {
            alert('Please enter a number between 1 - 100');
            this.userInput.value = '';
        } else {
            this.props.checkInput(guess);
            this.props.addGuess(guess);
        }
        this.userInput.value = '';
    }

  render() {
    const guesses = this.props.guesses;

    return (
        <div>
            <div className="feedback">
              <h3>{this.props.feedback}</h3>
            </div>
            <form action="" onSubmit={(e) => this.getInput(e)}>
                <input autocomplete="off" id="guessInput" type="text" maxLength="3" placeholder="Number between 1-100" ref={(input) => {this.userInput = input}} />
            </form>
        </div>
    );
  }
}

export default Game
