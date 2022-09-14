import { BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import LandingPage from './Page/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
    </Routes> 
  </BrowserRouter>
  );
}

export default App;
