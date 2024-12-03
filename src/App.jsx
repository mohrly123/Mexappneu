import MainPage from './Startseite/mainPage';
import Hebungsrechner from './Hebungsrechner/hebungsrechner1';
import Verschiebungsrechner from './Verschiebungsrechner/verschiebungsrechner';
import Wetter from "./wetter/wetterapp.jsx";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'

function App() {
  

  return (
    <>
      <Router basename="/Mexappneu">
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/hebungsrechner' element={<Hebungsrechner />} />
          <Route path='/verschiebungsrechner' element={<Verschiebungsrechner />} />
          <Route path="/wetterapp" element={<Wetter />} />
        </Routes>
      </Router>
    </>
    
  );
}

export default App
