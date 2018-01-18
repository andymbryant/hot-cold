import React from 'react';

import NewGame from './NewGame';
import Game from './Game';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            correctAnswer: Math.round(Math.random() * 100) + 1,
            feedback: 'Make a guess!',
            color: 'white',
            guesses: []
        };

        this.newGame = this.newGame.bind(this);
        this.checkInput = this.checkInput.bind(this);
        this.addGuess = this.addGuess.bind(this);
    }

    newGame() {
        this.setState({
            correctAnswer: Math.round(Math.random() * 100) + 1,
            feedback: 'Make a guess!',
            color: 'white',
            guesses: []
        })
    }

    checkInput(guess) {
        const guesses = this.state.guesses;
        const { correctAnswer } = this.state;
        console.log(`The correct answer is ${correctAnswer}`);
        console.log(`The guess is: ${guess}`)
        if (guess == correctAnswer) {
            this.setState({
                feedback: 'You win! Click above to play again.'
            });
        }
        else if ( Math.abs(guess - correctAnswer) < 10) {
            this.setState({
                feedback: 'Hot',
                color: '#ff8916'
            });

        }
        else if ( Math.abs(guess - correctAnswer) < 25 && Math.abs(guess - correctAnswer) < 11) {
            this.setState({
                feedback: 'Getting Warmer...',
                color: '#ffd630'
            });
        }
        else {
            this.setState({
                feedback: 'Cold',
                color: '#0084ff'
            });
        }
    }

    addGuess(guess) {
        const guesses = this.state.guesses;
        if (guesses.includes(guess)) {
            return
        }
        this.setState({
            guesses: [...this.state.guesses, guess]
        });
    }

    winner

    render() {
        return (
            <main>
                <h1 className="title">Hot and Cold</h1>
                <div className="main-game">
                    <Game color={this.state.color} correctAnswer={this.state.correctAnswer} guesses={this.state.guesses} feedback={this.state.feedback} checkInput={this.checkInput} addGuess={this.addGuess} winner={this.winner}/>
                </div>
                <NewGame newGame={this.newGame}/>
            </main>
        );
    }
}

export default App;
