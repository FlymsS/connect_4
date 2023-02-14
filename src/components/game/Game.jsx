import { useState } from "react";
import Board from "../board/Board";
import styles from "./game.module.css";

export default function Game() {
  const [player, setPlayer] = useState(false);

  const handlePlayer = () => {
    setPlayer(!player);
  };

  const handleDrag = (e) => {
    console.log(e)
  }

  return (
    <div className={styles.container}>
      <Board />
      <div
        className={player ? styles.pieceRed : styles.pieceRed}
        draggable="true"
        onDragStart={handleDrag}
      ></div>
    </div>
  );
}
