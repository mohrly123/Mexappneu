import MainPage from './Startseite/mainPage';
import Hebungsrechner from './Hebungsrechner/hebungsrechner1';
import Verschiebungsrechner from './Verschiebungsrechner/verschiebungsrechner';
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
        </Routes>
      </Router>
    </>
    
  );
}

export default App
