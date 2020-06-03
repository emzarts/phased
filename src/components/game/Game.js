import React from 'react';
import Board from './board/Board';
import './Game.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inProgress: true,
            currentScore: 0,
            highScore: this.props.highSchore
        }
        this.handleTilePress = this.handleTilePress.bind(this);
    }

    handleTilePress(row, col) {
        // e.preventDefault();
        console.log("wat");
        console.log(row, col);
    }

    render() {
        return (
            <div className="Game">
                <div className="Game-Contents">
                    <Board handleTilePress={this.handleTilePress} />
                </div>
            </div>
        );
    }
};
