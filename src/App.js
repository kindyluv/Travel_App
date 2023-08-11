import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './features';
import Homepage from './features/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/LandingPage' element={<LandingPage />} />
          <Route path='/Homepage' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
