import React from 'react';


export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        // this.updateGame = this.props.updateGame.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // debugger;
        // console.log(this.props)

    }

    handleClick(e){
        // debugger;
        let flaggedClick = e.altKey;
        // console.log(this)
        // debugger;
        this.props.updateGame(this.props.tile, flaggedClick);

    }

    render(){
        let state = '';
        let obama = '';
        let tile = "tile ";
        if (this.props.tile.bombed) {
            state = ''; //💣
            obama = 'bombed';
        } else if (this.props.tile.explored) {
            state = this.props.tile.adjacentBombCount();
            obama = 'explored';
        } else if (this.props.tile.flagged) {
            state = '🚩';
            obama = "flagged";
        } else {
            state = '';
            obama = "unexplored";
        }

        return (
            <div className={tile + obama} onClick={this.handleClick}>{state}</div>
            )
    }
}

