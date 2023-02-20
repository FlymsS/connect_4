import { useState, useRef, useEffect } from "react";
import Board from "../board/Board";
import styles from "./game.module.css";

export default function Game() {

  const [player, setPlayer] = useState(1);
  const [plays, setPlays] = useState(
    [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],])
  const handleClickColumn = (column) => {
    if(plays[0][column] != 0) return;
    for(let i=5; i>=0; i--){
      if(plays[i][column] == 0){
        plays[i][column] = player;
        setPlays([...plays]);
        break;
      }
    }
    checkWiner();
    player == 1 ? setPlayer(2) : setPlayer(1);
  }
  const checkWiner = () => {
    // Check horizontal
    for(let i=0; i<6; i++){
      for(let j=0; j<4; j++){
        if(plays[i][j] != 0 && plays[i][j] == plays[i][j+1] && plays[i][j] == plays[i][j+2] && plays[i][j] == plays[i][j+3] && plays[i][j+3] == player){
          alert("player "+player+" win");
          return;
        }
      }
    }
    // Check Vertical
    for(let i=0; i<7; i++){
      for(let j=0; j<3; j++){
        if(plays[j][i] != 0 && plays[j][i] == plays[j+1][i] && plays[j][i] == plays[j+2][i] && plays[j][i] == plays[j+3][i] && plays[j+3][i] == player){
          alert("player "+player+" win");
          return;
        }
      }
    }
    // Check Diagonal1
    for(let i=0; i<4; i++){
      for(let j=0; j<3; j++){
        if(plays[j][i] != 0 && plays[j][i] == plays[j+1][i+1] && plays[j][i] == plays[j+2][i+2] && plays[j][i] == plays[j+3][i+3] && plays[j+3][i+3] == player){
          alert("player "+player+" win");
          return;
        }
      }
    }
    // Check Diagonal2
    for(let i=0; i<4; i++){
      for(let j=3; j<6; j++){
        if(plays[j][i] != 0 && plays[j][i] == plays[j-1][i+1] && plays[j][i] == plays[j-2][i+2] && plays[j][i] == plays[j-3][i+3] && plays[j-3][i+3] == player){
          alert("player "+player+" win");
          return;
        }
      }
    }
  }
  return (
    <div className={styles.container}>
      <Board 
        player={player} 
        plays={plays}
        handleClickColumn={handleClickColumn}
      />
      <div
        className={player ? styles.pieceRed : styles.pieceRed}
      ></div>
    </div>
  );
}

