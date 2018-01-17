import React from 'react';

import NewGame from './NewGame';
import Game from './Game';
import Guess from './Guess'

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            correctAnswer: Math.round(Math.random() * 100) + 1,
            feedback: 'Make a guess!',
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
            guesses: []
        })
    }

    checkInput(guess) {
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
                feedback: 'Hot'
            });

        } else {
            this.setState({
                feedback: 'Cold'
            });
        }
    }

    addGuess(guess) {
        const guesses = this.state.guesses;
        this.setState({
            guesses: [...this.state.guesses, guess]
        });
    }

    winner

    render() {
        return (
            <main>
                <h1>Hot and Cold</h1>
                <NewGame newGame={this.newGame}/>
                <div className="main-game">
                    <Game correctAnswer={this.state.correctAnswer} guesses={this.state.guesses} feedback={this.state.feedback} checkInput={this.checkInput} addGuess={this.addGuess} winner={this.winner}/>
                        <ul className="list-of-guesses">
                            {
                                Object
                                    .keys(this.state.guesses)
                                    .map(key => <Guess key={key} index={key} number={this.state.guesses[key]} />)
                            }
                        </ul>
                </div>
            </main>
        );
    }
}

export default App;
