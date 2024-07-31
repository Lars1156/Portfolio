import React from "react";
import {Routes , Route} from "react-router-dom";
import './App.css';
import Navbar from "./Component/Navbar";
import Home from './Component/Home'
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import About from "./Component/About";
import ContactUs from "./Component/ContactUs";
import FooterComponent from "./Component/FooterComponent";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/skill' element={<Skills/>}/>
          <Route path="/project" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <FooterComponent/>
    </div>
  );
}

export default App;
