import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Landing from './Landing';

function App() {
  return(
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </Router>
);

}

export default App
