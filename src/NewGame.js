import React from 'react';

class NewGame extends React.Component {

  render() {
    return (
        <button onClick={this.props.newGame}>Start Over</button>
    );
  }
}

export default NewGame
