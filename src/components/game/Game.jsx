import { useState, useRef, useEffect } from "react";
import Board from "../board/Board";
import styles from "./game.module.css";
import Scores from "../scores/scores";
import Swal from "sweetalert2";

export default function Game() {
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  const [player, setPlayer] = useState(1);
  const inicialTable = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  const [plays, setPlays] = useState(inicialTable);

  const handleClickColumn = (column) => {
    if (plays[0][column] != 0) return;
    for (let i = 5; i >= 0; i--) {
      if (plays[i][column] == 0) {
        plays[i][column] = player;
        setPlays([...plays]);
        break;
      }
    }
    const aux = checkWiner();
    if (aux) setPlays(inicialTable);
    player == 1 ? setPlayer(2) : setPlayer(1);
  };

  const showMessageWinner = () => {
    const pn = player == 1 ? player1Name : player2Name;
    Swal.fire({
      title: "Ganador",
      text: "Felicidades " + pn + " ganaste esta partida!",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };
  const checkWiner = () => {
    // Check horizontal
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        if (
          plays[i][j] != 0 &&
          plays[i][j] == plays[i][j + 1] &&
          plays[i][j] == plays[i][j + 2] &&
          plays[i][j] == plays[i][j + 3] &&
          plays[i][j + 3] == player
        ) {
          showMessageWinner();
          return true;
        }
      }
    }
    // Check Vertical
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 3; j++) {
        if (
          plays[j][i] != 0 &&
          plays[j][i] == plays[j + 1][i] &&
          plays[j][i] == plays[j + 2][i] &&
          plays[j][i] == plays[j + 3][i] &&
          plays[j + 3][i] == player
        ) {
          showMessageWinner();
          return true;
        }
      }
    }
    // Check Diagonal1
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (
          plays[j][i] != 0 &&
          plays[j][i] == plays[j + 1][i + 1] &&
          plays[j][i] == plays[j + 2][i + 2] &&
          plays[j][i] == plays[j + 3][i + 3] &&
          plays[j + 3][i + 3] == player
        ) {
          showMessageWinner();
          return true;
        }
      }
    }
    // Check Diagonal2
    for (let i = 0; i < 4; i++) {
      for (let j = 3; j < 6; j++) {
        if (
          plays[j][i] != 0 &&
          plays[j][i] == plays[j - 1][i + 1] &&
          plays[j][i] == plays[j - 2][i + 2] &&
          plays[j][i] == plays[j - 3][i + 3] &&
          plays[j - 3][i + 3] == player
        ) {
          showMessageWinner();
          return true;
        }
      }
    }
    return false;
  };
  return (
    <div className={styles.container}>
      <Scores
        setPlayer1={setPlayer1}
        setPlayer2={setPlayer2}
        player1={player1}
        player2={player2}
        setPlayer1Name={setPlayer1Name}
        setPlayer2Name={setPlayer2Name}
        player1Name={player1Name}
        player2Name={player2Name}
      />
      <Board
        player={player}
        plays={plays}
        handleClickColumn={handleClickColumn}
      />
      <div className={player ? styles.pieceRed : styles.pieceRed}></div>
    </div>
  );
}
