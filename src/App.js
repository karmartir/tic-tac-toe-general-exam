import React, {useEffect, useState} from 'react';
import './App.css'
import Board from "./component/Board";

const App = () => {
    const initialState = new Array(9).fill(null);
    const [board, setBoard] = useState(initialState);
    const [isNextX, setIsNextX] = useState(true);
    const [winner, setWinner] = useState('');
    const [isDraw, setIsDraw] = useState(false);

    const toggle = isNextX ? 'X' : 'O';

    const colorToggle = (toggle) => {
        return toggle ? 'red' : 'blue'
    }
    const nextMove = (index) => {
        if (board[index] === null) {
            setBoard(board.map((el, ind) => ind === index ? toggle : el))
            setIsNextX(!isNextX)
        }
    }

    const checkWinner = () => {
        const winningNumbers = [
            [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
        ]
        for(let i =0; i < winningNumbers.length; i++){
            const[a, b, c] = winningNumbers[i]
            if(board[a] === board[b] && board[a] === board[c] && board[a] !== null){
                setWinner(board[a])
                setIsDraw(false)
            }
        }
        if(!board.includes(null)) {
            setIsDraw(true)
        }
    }

    useEffect(() => {
       checkWinner()
    }, );

    const gameReset = () => {
        setBoard(initialState);
        setIsNextX(true)
        setWinner('')
        setIsDraw(false)
    }
    return (
        <div className="App">
            <h1>Tic Tac Toe game</h1>

            <Board
                board={board}
                winner={winner}
                isDraw={isDraw}
                nextMove={nextMove}
                colorToggle={colorToggle}
            />
            <br/>
            <br/>
            <span className='next-move'>{!winner && !isDraw && `The next move is for ${toggle}`}</span>
            <span className='winner'>{winner && `Congratulations!!! The winner is a ${winner}`}</span>
            <span className='is-draw'>{isDraw && `Its a Draw`}</span>
            <br/>
            <br/>
            <button className='reset-button' onClick={() => gameReset()}>Start new game</button>
        </div>
    );
};

export default App;