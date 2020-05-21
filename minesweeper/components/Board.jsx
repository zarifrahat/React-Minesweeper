import React from 'react';
import Tile from './Tile';


export default class Board extends React.Component {
    
    constructor(props) {
        super(props);
        this.updateGame = this.props.updateGame.bind(this);
    }


    render() {
        // debugger
       const currentBoard = this.props.board.grid.map((row, i)=> {
        //    debugger

            let changedRow=  row.map((tile, j)=>{
                // debugger
                   return (
                       <Tile
                        tile= {tile}
                        key={[i, j]}
                        updateGame={this.updateGame}
                       />
                    )
            })
           return (<div className="row" key={i}>{changedRow}</div>)
         
        });
        return(
            <div className="outer-div">
                {currentBoard}
            </div>
            
            
        )
    };
};


// const allBreeds = this.breeds.map((breed, index) => {
//     return (
//         <DogDetail
//             addVote={this.addVote}
//             breed={breed}
//             key={index} />
//     )
// });