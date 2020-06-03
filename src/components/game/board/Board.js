import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import Tile from './Tile';


export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.createBoardTiles = this.createBoardTiles.bind(this);
    };

    createBoardTiles = () => {
        let board = []

        for (let rows = 0; rows < this.props.height; rows++) {
            let row = []
            for (let cols = 0; cols < this.props.width; cols++) {
                row.push(<Tile key={rows + ' ' + cols} onClick={this.props.handleTilePress} row={rows} col={cols} />)
            }
            board.push(<div key={rows} className="Board-Row">{row}</div>)
        }
        console.log(board);
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
    height: PropTypes.number
};
