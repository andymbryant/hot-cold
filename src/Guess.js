import React from 'react';

class Guess extends React.Component {

  render() {
    return (
        <li id="guess-list">{this.props.number}</li>
    );
  }
}

export default Guess
