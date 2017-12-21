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
- score, e.g. [2, 3]
- current player
- computer move
- player move
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
  render() {
    return (
      <div className='player'>
         <Col>Player's move</Col>
         <Button bsSize='small'>Rock</Button>
         <Button bsSize='small'>Paper</Button>
         <Button bsSize='small'>Scissors</Button>
      </div>
    );
  }
}

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false
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

class App extends Component {
  render() {
    return (
      <Grid className='grid'>
        <Header />
        <Computer />
        <Player />
        <Status />
        <Footer />
      </Grid>
    );
  }
}

export default App;
