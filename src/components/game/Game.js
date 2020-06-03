import React from 'react';
import PropTypes from 'prop-types';
import Board from './board/Board';
import './Game.css';

const TileColor = {
    EMPTY: 0,
    RED: 1,
    YELLOW: 2,
    GREEN: 3,
    BLUE: 4,
    PURPLE: 5 
 };

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inProgress: true,
            currentScore: 0,
            interval_sec: .5,
            boardState: Array(this.props.rows).fill().map(() => Array(this.props.cols).fill(TileColor.EMPTY)),
            highScore: this.props.highSchore
        }
        this.handleTilePress = this.handleTilePress.bind(this);
        this.clearBoard = this.clearBoard.bind(this);
        this.setTile = this.setTile.bind(this);
    }

    clearBoard() {
        this.setState(
            {
                boardState: Array(this.props.rows).fill().map(() => Array(this.props.cols).fill(TileColor.EMPTY)),
            }
        );
    }

    setTile(row, col, color) {
        let boardState = this.state.boardState;
        boardState[row][col] = color;
        this.setState(
            {
                boardState: boardState
            }
        );
    }

    componentDidMount() {
        const rows = this.props.rows;
        const cols = this.props.cols;
        setInterval(() => {
            console.log('Interval triggered');
            this.clearBoard();
            let row = Math.floor(Math.random() * rows);
            let col = Math.floor(Math.random() * cols);
            console.log(row, col);
            this.setTile(row, col, 1);
        }, 1000 * this.state.interval_sec);


    };

    handleTilePress(row, col) {
        console.log(row, col);
        console.log(this.state.boardState[row][col]);
    }

    render() {
        return (
            <div className="Game">
                <div className="Game-Contents">
                    <Board boardState={this.state.boardState} height={this.props.rows} width={this.props.cols} handleTilePress={this.handleTilePress} />
                </div>
            </div>
        );
    }
};

Game.propTypes = {
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired
};
