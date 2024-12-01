import styles from "./verschiebungsrechner.module.css"
import { useState } from "react";

export default function Verschiebungsrechner(){
    // Wenn das IST kleiner als das Soll dann LINKS Schieben
    // Wenn das IST größer als das Soll dann RECHTS Schieben

    const [sollWert, setSollWert] = useState("");
    const [istWert, setIstWert] = useState("");
    const [dialogVisible, setDialogVisible] = useState(false);
    const[verschiebung, setVerschiebung] = useState("");

    function handleSollWert(event){
        setSollWert(Number(event.target.value));
    }
    function handleIstWert(event){
        setIstWert(Number(event.target.value));
    }
    const programm = () => {
        let ergebnis = 0;
        if(sollWert && istWert){
            console.log(`Eingabe SOLL: ${sollWert}`);
            console.log(`Eingabe IST: ${istWert}`);
            // Wenn bei der Eingabe der IST größer als das Soll ist DANN IST - SOLL
            // Und Verschiebung nach RECHTS!
            if(istWert > sollWert){
                ergebnis = istWert - sollWert;
                console.log(`${istWert} - ${sollWert} = ${ergebnis}`);
                console.log(`${ergebnis} mm nach Rechts schieben!`);
                setDialogVisible(true);
                setVerschiebung(`${ergebnis} mm nach Rechts schieben`);
            }
            // Wenn bei der Eingabe der IST kleiner ist als das Soll DANN SOLL - IST
            // Und Verschiebung nach LINKS!
            else if( istWert < sollWert){
                ergebnis = sollWert - istWert;
                console.log(`${sollWert} - ${istWert} = ${ergebnis}`);
                console.log(`${ergebnis} mm nach Links schieben`);
                setDialogVisible(true);
                setVerschiebung(`${ergebnis} mm nach Links schieben`);
            }
            else if(istWert === sollWert){
                console.log("0 mm Verschiebung");
                setDialogVisible(true);
                setVerschiebung(`0 mm Verschiebung`);
            }
        document.getElementById("inputSoll").value = "";
        document.getElementById("inputIst").value = "";
        }
        else{
            alert("Es müssen alle Felder ausgefüllt werden!");
            
        }
    }



    return(
        <div className={styles.hauptcontainer}>
            <div className={styles.card}>
                <p>Verschiebungsrechner</p>
                <label htmlFor="inputSoll">Sollwert</label>
                <input
                    id="inputSoll"
                    onChange={handleSollWert}
                    type="number"
                    placeholder="SOLL Wert in mm"
                />
                <label htmlFor="inputIst">Istwert</label>
                <input
                    id="inputIst"
                    onChange={handleIstWert} 
                    type="number"
                    placeholder="IST Wert in mm"
                />
                <button
                    type="button"
                    onClick={programm}
                >Berechnen</button>
            </div>
            <div className={styles.ergebnisContainer}>
                <dialog open={dialogVisible}>{verschiebung}</dialog>
            </div>
        </div>
    );
}