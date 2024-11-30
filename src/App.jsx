import MainPage from './Startseite/mainPage';
import Hebungsrechner from './Hebungsrechner/hebungsrechner1';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'

function App() {
  

  return (
    <>
      <Router basename="/Mexappneu">
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/hebungsrechner' element={<Hebungsrechner />} />
        </Routes>
      </Router>
    </>
    
  );
}

export default App
