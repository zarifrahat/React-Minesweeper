import React from 'react';
import * as Minesweeper from './minesweeper.js' //access multiple exports using *. Export everything as "Minesweeper" and function w/in the file can be called on Minesweeper. ex Minesweeper.Board
import Board from './Board';



class Game extends React.Component {
    constructor(props) {
        super(props);
        this.board = new Minesweeper.Board(10,5);
        // this.board = "";
        this.updateGame = this.updateGame.bind(this);
        this.state = {
            board: this.board
        }

    }


    updateGame(tileObject, boolean) {

        if (boolean) {
            tileObject.toggleFlag();
        } else {
            tileObject.explore();
        }       
        this.setState({ board: this.state.board });
    }   
    

    
// this.state.board.won()
    render() {
        const printOut = this.state.board.won() ? <h1>You won</h1> : <h1>You haven't won lol.</h1>;
        // const printOut = if(true) {
        //      <h1>You won</h1>
        // } else {
        //       <h1>You lost</h1>
        // }
        // debugger;

        return ( 
            <div>  
                <Board
                board = {this.board}
                updateGame = {this.updateGame} //because this is a method we need to bind it in our constructor
            />
                {printOut}

            </div>
          
        )
    }

}

export default Game;