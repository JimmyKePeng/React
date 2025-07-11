import { useEffect, useState } from "react";
import "./style.css";
function TicTacToe() {
  const [board, setBoard] = useState([]);
  const [playerO, setPlayerO] = useState(true);
  const [winner, setWinner] = useState(null);
  // const [counter, setCounter] = useState(9);

  function resetBoard() {
    setBoard(
      Array(3)
        .fill(null)
        .map(() => Array(3).fill(null))
    );
    setWinner(null);
    // setCounter(9);
  }

  function checkWinner(newBoard) {
    for (let i = 0; i < 3; i++) {
      if (
        newBoard[i][i] != null &&
        ((newBoard[i][0] === newBoard[i][1] &&
          newBoard[i][1] == newBoard[i][2]) ||
          (newBoard[0][i] === newBoard[1][i] &&
            newBoard[1][i] == newBoard[2][i]))
      ) {
        setWinner(newBoard[i][i]);
        return;
      }
    }
    if (
      newBoard[1][1] != null &&
      ((newBoard[0][0] === newBoard[1][1] &&
        newBoard[1][1] == newBoard[2][2]) ||
        (newBoard[2][0] === newBoard[1][1] && newBoard[1][1] == newBoard[0][2]))
    )
      setWinner(newBoard[1][1]);
    if (newBoard.every((row) => row.every((square) => square !== null)))
      setWinner("Draw");
    // if (counter === 1) setWinner("Draw");
  }

  function setPosition(rowI, colJ) {
    if (board[rowI][colJ]) return;
    const newBoard = board.map((row, i) =>
      i === rowI
        ? row.map((item, j) => (j === colJ ? (playerO ? "O" : "X") : item))
        : row
    );
    setBoard(newBoard);
    checkWinner(newBoard);
    setPlayerO((prev) => !prev);
    // setCounter((prev) => prev - 1);
  }

  useEffect(() => {
    resetBoard();
  }, []);

  return (
    <div className="TTT-container">
      <div className="board">
        {board.map((row, i) =>
          row.map((item, j) => (
            <button
              onClick={() => setPosition(i, j)}
              className="item"
              key={i + j}
              disabled={winner ? true : false}
            >
              {item}
            </button>
          ))
        )}
      </div>
      {winner === null ? (
        <h1>Next player is {playerO ? "O" : "X"}</h1>
      ) : winner === "Draw" ? (
        <h1>{winner}. Please restart the game</h1>
      ) : (
        <h1> Winner is {winner}. Please restart the game</h1>
      )}
      <button onClick={() => resetBoard()}>Restart</button>
    </div>
  );
}

export default TicTacToe;
