import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import Tile from './tile/Tile';

const ColorTile = {
    0: 'Empty',
    1: 'Red',
    2: 'Yellow',
    3: 'Green', 
    4: 'Blue',
    5: 'Purple'
}

const TileColor = {
    EMPTY: 0,
    RED: 1,
    YELLOW: 2,
    GREEN: 3,
    BLUE: 4,
    PURPLE: 5 
};

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interval_sec: .5,
            boardState: Array(this.props.height).fill().map(() => Array(this.props.width).fill(TileColor.EMPTY)),
        }
        this.clearBoard = this.clearBoard.bind(this);
        this.setTile = this.setTile.bind(this);
        this.createBoardTiles = this.createBoardTiles.bind(this);
    };

    clearBoard() {
        this.setState(
            {
                boardState: Array(this.props.height).fill().map(() => Array(this.props.width).fill(TileColor.EMPTY)),
            }
        );
    }

    componentDidMount() {
        const rows = this.props.height;
        const cols = this.props.width;
        setInterval(() => {
            this.clearBoard();
            let row = Math.floor(Math.random() * rows);
            let col = Math.floor(Math.random() * cols);
            this.setTile(row, col, 1);
        }, 1000 * this.state.interval_sec);
    };


    setTile(row, col, color) {
        let boardState = this.state.boardState;
        boardState[row][col] = color;
        this.setState(
            {
                boardState: boardState
            }
        );
    }

    createBoardTiles = () => {
        let board = []
        let boardState = this.state.boardState;
        console.log(boardState);
        
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
