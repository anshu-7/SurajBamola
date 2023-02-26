import './App.css';
import Home from './components/Home/Home';
import ContactUs from './components/Contact Us/ContactUs';
import Pf from './Pages/pf/Pf';
import Esic from './Pages/ESIC/Esic';
import NavBar from './utils/NavBar';
import Dsc from './Pages/DSC/Dsc';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
         {/* <NavBar/> */}
         <Routes>
          <Route exact  path="/SurajBamola" element = {<Home/>}></Route>
          <Route exact  path="/SurajBamola/contactUs" element = {<ContactUs/>}></Route>
          <Route exact  path="/SurajBamola/pf" element = {<Pf/>}></Route>
          <Route exact  path="/SurajBamola/esic" element = {<Esic/>}></Route>
          <Route exact  path="/SurajBamola/dsc" element = {<Dsc/>}></Route>
          
        </Routes>
         </Router>
    </div>
  );
}

export default App;
