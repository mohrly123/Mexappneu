import styles from "./verschiebungsrechner.module.css"
import { useState } from "react";

export default function Verschiebungsrechner(){
    // Wenn das IST kleiner als das Soll dann LINKS Schieben
    // Wenn das IST größer als das Soll dann RECHTS Schieben

    const [sollWert, setSollWert] = useState("");
    const [istWert, setIstWert] = useState("");

    function handleSollWert(event){
        setSollWert(event.target.value);
    }
    function handleIstWert(event){
        setIstWert(event.target.value);
    }
    const programm = () => {
        console.log(`Eingabe SOLL: ${sollWert}`);
        console.log(`Eingabe IST: ${istWert}`);
    }



    return(
        <div className={styles.hauptcontainer}>
            <div className={styles.card}>
                <p>Verschiebungsrechner</p>
                <input
                    onChange={handleSollWert}
                    type="number"
                    placeholder="SOLL Wert in mm"
                />
                <input
                    onChange={handleIstWert} 
                    type="number"
                    placeholder="IST Wert in mm"
                />
                <button
                    type="button"
                    onClick={programm}
                >Berechnen</button>
            </div>
        </div>
    );
}