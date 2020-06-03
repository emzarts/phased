import React from 'react';
import Board from './board/Board';
import './Game.css';

export default (props) => {
    return (
        <div className="Game">
            <div className="Game-Contents">
                <Board />
            </div>
        </div>
    );
};
