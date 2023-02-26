import './App.css';
import Home from './components/Home/Home';
import ContactUs from './components/Contact Us/ContactUs';
import Pf from './Pages/pf/Pf';
import Esic from './Pages/ESIC/Esic';
import NavBar from './utils/NavBar';
import Dsc from './Pages/DSC/Dsc';
import Footer from './utils/Footer';

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
          <Route exact  path="/" element = {<Home/>}></Route>
          <Route exact  path="/contactUs" element = {<ContactUs/>}></Route>
          <Route exact  path="/pf" element = {<Pf/>}></Route>
          <Route exact  path="/esic" element = {<Esic/>}></Route>
          <Route exact  path="/dsc" element = {<Dsc/>}></Route>
          
        </Routes>
         </Router>
         <Footer/>
    </div>
  );
}

export default App;
