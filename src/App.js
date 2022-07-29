import './Styles/App.css'
import Nav from './Components/Nav/Nav';
// import Covid from './Components/Covid/Covid';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import CovidInform from './Pages/CovidInform';
import CountDown from './Pages/CountDown';
import CountDownClass from './Components/CountDown/CountDownClass';
import CountDownfunc from './Components/CountDown/CountDownFunc';


function App() {
  return (
    <div className="App">
      <Nav></Nav>


      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/covid" element={<CovidInform />} />
        <Route path="/countdown" element={<CountDown />} />
      </Routes>

    </div>
  );
}

export default App;
