import styles from "./mainPage.module.css";
import { Link } from "react-router-dom";


export default function MainPage() {
    return (
        <div className={styles.hauptContainer}>
            <h2>Startseite</h2>
            <Link to="/hebungsrechner">
                <button type="button">Hebungsrechner</button>
            </Link>
            <Link to="/verschiebungsrechner">
                <button type="button">Verschiebungsrechner</button>
            </Link>
            <Link to="/wetterapp">
                <button type="button">Wetter App</button>
            </Link>
            
        </div>
    );
}