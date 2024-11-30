import { useState } from "react";
import styles from "./hebungsrechner.module.css";

export default function Hebungsrechner() {
  //Abgelesener Wert = ohne Vorzeichen = Schwarz
  //Abgelesener Wert = mit - Vorzeichen = Rot
  //AWert ohne Vorzeichen = Positiv also Kuppe
  //AWert mit - Vorzeichen = Negativ also Mulde
  let ergebnis = 0;
  //Refferenzieren auf den eingegeben Wert
  const [istWert, setIstWert] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);
  const [result, setResult] = useState("");

  const abfrageIstWert = (event) => {
    setIstWert(Number(event.target.value));
  };
  // Referenzieren auf den A Wert  im Input
  const [aWert, setAwert] = useState("");

  const abfrageAwert = (event) => {
    setAwert(Number(event.target.value));
  };

  //Wenn A Wert vorhanden (muss vorhanden sein) zuerst schauen ob der Wert unter 0 oder über 0
  // Wenn er über 0 ist dann subtrahieren
  // Wenn er unter 0 ist dann addieren
  // Wenn er 0 ist dann Alert das Wert zum eingeben ist
  const berechnung = () => {
    try {
      // Ergebnis referenzieren
      
      console.log(`Ist Wert: ${istWert}`);
      console.log(`A Wert: ${aWert}`);
      // Beide Inputs müssen ausgefüllt werden
      if (istWert !== "" && aWert !== "") {
        // Dann überprüfen ob der A Wert positiv oder negativ ist
        if (aWert < 0) {
          // Wenn der A wert unter 0 ist dann zum ist Wert addieren
          ergebnis = istWert + aWert; // Ergebnis aktualisieren
          console.log(`Hebung = ${ergebnis} mm`); // In der Konsole ausgeben
        } else if (aWert > 0) {
          // Wenn der A Wert über 0 ist zum Ist wert subtrahieren
          ergebnis = istWert - aWert; // Ergebnis aktualisieren
          console.log(`Hebung = ${ergebnis} mm`); // In der Konsole ausgeben
        }
        if (ergebnis < 0) {
          // Wenn das Ergebnis negativ ist bin ich zu hoch
          console.log(`Um ${Math.abs(ergebnis)} mm zu Hoch!`);
          setDialogVisible(true);
          setResult(`Um ${Math.abs(ergebnis)} mm zu Hoch!`);
        } else if (ergebnis > 0) {
          // Wenn Ergebnis poitiv dann Habe ich Hebung
          console.log(`Hebung = ${ergebnis} mm`);
          setDialogVisible(true);
          setResult(`Hebung = ${ergebnis} mm`);
        } else {
          setDialogVisible(true);
          setResult("Hebung = 0 mm");
        }
      } else {
        console.log("Darf nicht leer sein");
        setResult("Darf nicht leer sein");
      }
      setIstWert("");
      setAwert("");
      document.getElementById("inputIst").value = "";
      document.getElementById("aWert").value = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.hauptcontainer}>
      <h1 className={styles.title}>Hebungsrechner</h1>
      <div className={styles.card}>
        <p className={styles.description}>A Wert Rechner</p>
        <input
          onChange={abfrageIstWert}
          id="inputIst"
          type="number"
          placeholder="Abgelesener Wert an der Messlatte in mm"
          className={styles.inputField}
        />
        <input
          onChange={abfrageAwert}
          id="aWert"
          type="number"
          placeholder="A Wert in mm (wenn vorhanden)"
          className={styles.inputField}
        />
        <button
          onClick={berechnung}
          type="button"
          className={styles.calculateButton}
        >
          Berechnen
        </button>
      </div>
      <div className={styles.ergebnisContainer}>
        <dialog open={dialogVisible} className={styles.dialog}>{result}</dialog>
      </div>
    </div>
  );
}
