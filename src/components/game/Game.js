import React from 'react';
import PropTypes from 'prop-types';
import Board from './board/Board';
import './Game.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inProgress: true,
            currentScore: 0,
            interval_sec: .5,
            highScore: this.props.highSchore
        }
        this.handleTilePress = this.handleTilePress.bind(this);
    }

    handleTilePress(row, col) {
        console.log(row, col);
        console.log(this.state.boardState[row][col]);
    }

    render() {
        return (
            <div className="Game">
                <div className="Game-Contents">
                    <Board height={this.props.rows} width={this.props.cols} handleTilePress={this.handleTilePress} />
                </div>
            </div>
        );
    }
};

Game.propTypes = {
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired
};
