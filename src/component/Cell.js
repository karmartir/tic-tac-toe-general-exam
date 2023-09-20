import React from 'react';

const Cell = ({isDraw, winner, el, index, nextMove, colorToggle}) => {
const toggle = {
    color: el === 'X' ? 'blue' : colorToggle(el),
    backgroundColor: isDraw ? '#675436' : (winner && '#f1cb99')
}

    return (
        <button
            disabled={winner}
            className={`cell ${
                el === 'X' ? 'shaking-x' : el === 'O' ? 'shaking-o-vertical' : ''
            }`}
            style={toggle}
            onClick={() => nextMove(index)}
        >

            {el}
        </button>
    );
};

export default Cell;