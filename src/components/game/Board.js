import React from 'react';
import PropTypes from 'prop-types';

const Board = ({width, height}) => {
    return (
        <div className="Game-Board">
            
        </div>
    );
};

Board.defaultProps = {
    width: 4,
    height: 5
};

Board.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};

export default Board;