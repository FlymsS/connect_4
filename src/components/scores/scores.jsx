import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import styles from "./scores.module.css";

export default function Scores({
  player1,
  player2,
  setPlayer1Name,
  setPlayer2Name,
  player1Name,
  player2Name,
}) {

  const captureNames = async () => {
    await Swal.fire({
      title: "Ingresa los nombres de los jugadores",
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Jugador 1">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Jugador 2">',
      focusConfirm: false,
      preConfirm: () => {
        setPlayer1Name(document.getElementById("swal-input1").value);
        setPlayer2Name(document.getElementById("swal-input2").value);
      },
    });
  };

  useEffect(() => {
    captureNames();
  }, []);

  return (
    <div className={styles.score}>
      <div className={styles.player}>
        {player1Name}: <div className={styles.number}>{player1}</div>
      </div>
      <div className={styles.player}>
        {player2Name}: <div className={styles.number}>{player2}</div>
      </div>
    </div>
  );
}
