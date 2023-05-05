import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './container/pages/auth/component/home';
import Contact from './container/pages/auth/component/Contact';
import OverlayOne from './container/pages/auth/component/OverlayOne';
import OverlayTwo from './container/pages/auth/component/OverlayTwo';
import StartJourney from './container/pages/auth/component/StartJourney';
import Gliding from './container/pages/auth/component/gliding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/overlayOne" element={<OverlayOne/>}></Route>
        <Route path="/overlayTwo" element={<OverlayTwo/>}></Route>
        <Route path="/startJourney" element={<StartJourney/>}></Route>
        <Route path="/gliding" element={<Gliding/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
      )
}

export default App;
