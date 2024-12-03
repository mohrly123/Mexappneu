import styles from "./wetterapp.module.css";
import { useState, useEffect } from "react";

function Wetter(){
    const [wetter, setWetter] = useState("");

    // Wetter funktion
    async function abfrageWetter(city) {
        const apiKey = "1f592401aa37ce4cc56020dc435299ad"; // Replace with your actual API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=de&appid=${apiKey}`;
        const response = await fetch(url);
        try{
            if(!response.ok){
                throw new Error("Abfrage nicht erfolgreich" + response.statusText);
            }
            let data = await response.json();
            setWetter(data.main.temp);
            console.log(wetter);
        }
        catch(error){
            console.log("Error im Catch Block der Wetterabfrage" + error);
        }
    }

    useEffect(() => {
        abfrageWetter("Villach");
    }, []);

    const programmWetter = () => {
        abfrageWetter("Villach");
    }



    return(
        <div className={styles.hauptContainer}>
            <button onClick={programmWetter} type="button">Wetter Test</button>
        </div>
    );
}

export default Wetter;