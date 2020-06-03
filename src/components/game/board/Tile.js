import React from 'react';
import PropTypes from 'prop-types';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onClick(this.props.row, this.props.col);
    };

    render() {
        return (
            <div className="Board-Tile">
                <button onClick={this.handleClick} className="Board-Tile-Content">
                </button>    
            </div>
        );
    };
};

Tile.propTypes = {
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};
