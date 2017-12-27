/* Pieces of data required

- game status: not started, started, game over, match over
- score
- current player
- computer move
- player move
- game winner
- match winner
- moves/objects = [rock, paper, scissors]

Our state is:
- game started
- game over
- match over
- score [player, computer]
- current player
- board [playerMove, computerMove]
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
         <Col>Computer:</Col>
         <Button bsSize='small' disabled>?</Button>
      </div>
    );
  }
}
/*
class PlayerPanel extends Component {
  render() {
    return (
      <div className='player'>
        <Col>Player: {this.props.value}</Col>
        <Player value={'Rock'} />
        <Player value={'Paper'} />
        <Player value={'Scissors'} />
      </div>
    );
  }
}
*/

class Player extends Component {
  render() {
    return (
      <div>
        <Button className='player-button' bsSize='small' onClick={() => this.props.onClick()}>
          {this.props.value}
        </Button>
      </div>
    );
  }
}

function Status(props) {
  console.log('Score ' + props.score);
  return (
    <div className='status'>
      <Col className='bestof'>Best of 5 match</Col>
      <Col>Computer: {props.score[0]}</Col>
      <Col>Player: {props.score[1]}</Col>
      <Col>Draw: {props.score[2]}</Col>
      <Col>Next move: {props.nextMove}</Col>
    </div>
  );
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
      board: [null, null],
      score: [0, 0, 0],
      computerIsNext: false
    };
  }

  handleClick(move) {
    const board = this.state.board.slice();
    board[0] = move;
    this.setState({
      board: board,
      computerIsNext: !this.state.computerIsNext,
    });
    console.log('Board array: ' + this.state.board);
  }

  renderComputer() {
    return (
      <Computer 
        value={this.state.board[1]}
      />
    );
  }

  renderPlayerPanel(move) {
    return (
      <div className='player'>
        <Col>Player: {this.state.board[0]}</Col>
        <Player value={'Rock'}     onClick={() => this.handleClick('Rock')}/>
        <Player value={'Paper'}    onClick={() => this.handleClick('Paper')}/>
        <Player value={'Scissors'} onClick={() => this.handleClick('Scissors')}/>
      </div>
    );
  }

  render() {
    const nextMove = (this.state.computerIsNext ? 'Computer' : 'Player');
    return (
      <Grid className='grid'>
        <Header />
        <div>
          {this.renderComputer()}
        </div>
        <div>
          {this.renderPlayerPanel()}
        </div>
        <Status score={this.state.score} nextMove={nextMove}/>
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
