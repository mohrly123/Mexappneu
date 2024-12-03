import { useState } from "react";
import styles from "./hebungsrechner.module.css";

export default function Hebungsrechner() {

  
  const [istWert, setIstWert] = useState("");
  const [aWert, setAwert] = useState("");
  const [ergebnis, setErgebnis] = useState(0);
  
  const [anzeigeErgebnis, setAnzeigeErgebnis] = useState("");

  // Programm selbst
  function programm(){
    checkEingabe();     // schauen ob die inputs nicht leer sind
    checkAWert();       // schauen ob der A Wert negativ oder positiv ist
  }


  function handleChangeIstWert(event){
    setIstWert(Number(event.target.value)); // Den aktuell Eingegeben Wert nehmen und in istWert speichern
  }
  function handleChangeAwert(event){
    setAwert(Number(event.target.value)); // Den aktuell Eingegeben Wert nehmen und in aWert speichern
  }
  // Funktion um zu schauen ob sich etwas im Input befindet
  function checkEingabe(){
    if(istWert !== "" && aWert !== ""){
      console.log("Jap");
    }else{
      alert("Beide Felder müssen ausgefüllt sein!");
    }
  }
  // Funktion um zu schauen ob der Awert negativ oder positiv ist
  function checkAWert(){
    
    if(aWert < 0){
      console.log("A Wert ist negativ");
      console.log(`Eingabe: ${aWert}`);
      // Wenn der A wert negativ ist muss er zur abgelesen hebung addiert werden
      const result = istWert + Math.abs(aWert);
      setErgebnis(result);
      
      console.log(`Rechnung = ${istWert} + (${aWert})`);
      console.log(`Hebung = ${result} mm`);
      // Wenn das Ergebnis negatig ist dann ist das Gleis zu hoch, wenn nciht habe ich Hebung
      if(result < 0){
        setAnzeigeErgebnis(`Hebung = ${result} mm zu Hoch!`);
      }
      else if(result > 0){
        setAnzeigeErgebnis(`Hebung = ${result} mm`);
      }
      else{
        setAnzeigeErgebnis("Hebung = 0 mm");
      }
      
      
    }
    else if(aWert > 0){
      console.log("A Wert ist positiv");
      console.log(`Eingabe: ${aWert}`);
      // Wenn der A Wert positiv ist muss er weggezählt werden von der eingabe also ist
      const result = istWert - aWert;
      setErgebnis(result);
      
      console.log(`Rechnung = ${istWert} - ${aWert}`);
      console.log(`Hebung = ${result} mm`);
      setAnzeigeErgebnis(`Hebung = ${result} mm`);
      // Wenn das Ergebnis negatig ist dann ist das Gleis zu hoch, wenn nciht habe ich Hebung
      if(result < 0){
        setAnzeigeErgebnis(`Hebung = ${result} mm zu Hoch!`);
      }
      else if(result > 0){
        setAnzeigeErgebnis(`Hebung = ${result} mm`);
      }
      else{
        setAnzeigeErgebnis("Hebung = 0 mm");
      }
    }
    else{
      console.log("A Wert = 0 mm");
      console.log(`Eingabe ${aWert}`);
      
    }
    setIstWert("");
    setAwert("");
    document.getElementById("inputIst").value = "";
    document.getElementById("inputaWert").value = "";
  }


  return (
    <div className={styles.hauptcontainer}>
      <h1 className={styles.title}>Berechnung Hebung mit A Wert</h1>
      <div className={styles.card}>
        <p className={styles.description}><u>A Wert Rechner</u></p>
        <input
          onChange={handleChangeIstWert}
          id="inputIst"
          type="number"
          placeholder="Abgelesener Wert an der Messlatte in mm"
          className={styles.inputField}
        />
        <input
          onChange={handleChangeAwert}
          id="inputaWert"
          type="number"
          placeholder="A Wert in mm (wenn vorhanden)"
          className={styles.inputField}
        />
        <button
          onClick={programm}
          type="button"
          className={styles.calculateButton}
        >
          Berechnen
        </button>
      </div>
      <h2>{anzeigeErgebnis}</h2>
      
    </div>
  );
}

