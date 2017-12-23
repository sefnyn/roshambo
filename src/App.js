/* Pieces of data required

- game status: not started, started, game over, match over
- score
- current player
- computer move
- player move
- game winner
- match winner
- [rock, paper, scissors]

Our state is:
- game started
- game over
- match over
- computer score
- player score
- current player
- computer's move
- player's move
- game winner (calculated)
- match winner (calculated)

*/

import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Grid, Col, Image } from 'react-bootstrap';
import './App.css';

class Header extends Component {
  render() {
    return (
      <Col className='header'>Roshambo <small>Rock, paper, scissors</small></Col>
    );
  }
}

class Computer extends Component {
  render() {
    return (
      <div className='computer'>
         <Col>Computer's move</Col>
         <Button bsSize='small'>?</Button>
      </div>
    );
  }
}

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <div className='player'>
         <Col>Player's move: {this.state.value}</Col>
         <Button bsSize='small' onClick={() => this.setState({value: 'Rock'})} >Rock</Button>
         <Button bsSize='small' onClick={() => this.setState({value: 'Paper'})} >Paper</Button>
         <Button bsSize='small' onClick={() => this.setState({value: 'Scissors'})} >Scissors</Button>
      </div>
    );
  }
}

class Status extends Component {
  constructor(props) {
    super(props);  
    this.state = {
      gameStarted: false,
      gameOver: false,
      matchOver: false
    };
    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    console.log('start button clicked');
    this.setState(prevState => ({
      gameStarted: !prevState.gameStarted
    }));
  }

  render() {
    return (
      <div className='status'>
        <Col className='bestof'>Best of 5 match</Col>
        <Col>Computer: 0</Col>
        <Col>Player: 0</Col>
        <Button className='startbutton' bsSize='small' onClick={this.startGame}>{this.state.gameStarted ? 'Quit' : 'Start game'}</Button>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
        <Col className='footer'>Powered by React</Col>
        <Image className='App-logo' alt='logo' src={logo}/>
      </div>
    );
  }
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: [null, null],
    };
  }

  handleClick(i) {
    const moves = this.state.moves.slice();
    moves[i] = 'X';
    this.setState({moves: moves});
    console.log('Array of moves' + this.state.moves[0] + this.state.moves[1]);
  }

  renderPlayer(i) {
    return (
      <Player
        value={this.state.moves[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: You';
    return (
      <Grid className='grid'>
        <Header />
        <Computer />
        <Player>{this.renderPlayer(0)}</Player>
        <Status>{status}</Status>
        <Footer />
      </Grid>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Game />
    );
  }
}

export default App;
