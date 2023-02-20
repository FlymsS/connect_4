import React, { Fragment, useState } from "react";
import styles from "./board.module.css";

export default function Board({plays, player, handleClickColumn}) {
  const [columnMouseUp, setColumnMouseUp] = useState();
  
  const x = 7;
  const y = 6;

  const onMouseMove = (e, id) => {
    setColumnMouseUp(id);
  };
  const onMouseOut = () => {
    setColumnMouseUp(null);
  }

  const getClass = (i,j) => {
    if(plays[i][j] == 1) return styles.red;
    if(plays[i][j] == 2) return styles.yellow;
    if(plays[i][j] == 0 && columnMouseUp !== j) 
      return styles.square;
    if(plays[i][j] == 0 && columnMouseUp == j)
      return styles.next;
    //columnMouseUp == j? styles.next :
  }

  const createBoard = () => {
    let board = [];
    for (let i = 0; i < y; i++) {
      let aux = [];
      for (let j = 0; j < x; j++) {
        aux.push(
          <div
            onMouseOver={(e) => onMouseMove(e, j)}
            className={getClass(i,j)}
            onClick={() => handleClickColumn(j)}
            key={j + i}
          ></div>
        );
      }
      board.push(
        <div id={i} className={styles.row} key={i}>
          {" "}
          {aux}{" "}
        </div>
      );
    }
    return board;
  };
  return (
    <div className={styles.container}  onMouseOut ={onMouseOut}>
      <div className={styles.board}>{createBoard()}</div>
    </div>
  );
}
