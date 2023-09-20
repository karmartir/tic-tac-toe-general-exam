import React from 'react';
import '../App.css'
import Cell from "./Cell";

const Board = ({board, winner, isDraw, nextMove, colorToggle}) => {

    return (
        <div className='board'>
            {board.map((el, index) =>
            <Cell
                key={index}
                el={el}
                index={index}
                board={board}
                winner={winner}
                isDraw={isDraw}
                nextMove={nextMove}
                colorToggle={colorToggle}

            />
            )}
        </div>
    );
};

export default Board;