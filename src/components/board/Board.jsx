import React, { Fragment } from "react";
import styles from "./board.module.css";

export default function Board() {
  const x = 7;
  const y = 6;  

  const createBoard = () => {
    let board = [];
    for (let i = 0; i < y; i++) {
      let aux = [];
      for (let j = 0; j < x; j++) {
        aux.push(
          <div className={styles.square} key={j * i}>
            
          </div>
        );
      }
      board.push(
        <div className={styles.row} key={i}>
          {" "}
          {aux}{" "}
        </div>
      );
    }
    return board;
  };
  return (
    <div className={styles.container}>
      <div className={styles.board}>{createBoard()}</div>
    </div>
  );
}
