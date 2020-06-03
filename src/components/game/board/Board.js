import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import Tile from './Tile';

 const ColorTile = {
     0: 'Empty',
     1: 'Red',
     2: 'Yellow',
     3: 'Green', 
     4: 'Blue',
     5: 'Purple'
 }

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.createBoardTiles = this.createBoardTiles.bind(this);
    };

    createBoardTiles = () => {
        let board = []
        let boardState = this.props.boardState;
        
        for (let rows = 0; rows < this.props.height; rows++) {
            let row = []
            for (let cols = 0; cols < this.props.width; cols++) {
                row.push(<Tile color={ColorTile[boardState[rows][cols]]} key={rows + ' ' + cols} onClick={this.props.handleTilePress} row={rows} col={cols} />)
            }
            board.push(<div key={rows} className="Board-Row">{row}</div>)
        }
        return board;
    };

    render() {
        return (
            <div className="Game-Board">
                {this.createBoardTiles()}
            </div>
        );
    }
    
};

Board.defaultProps = {
    width: 4,
    height: 5
};

Board.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    handleTilePress: PropTypes.func,
    boardState: PropTypes.array
};
