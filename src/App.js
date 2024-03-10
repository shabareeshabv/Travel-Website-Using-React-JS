// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Styles.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Signup from "./routes/Signup"; // Corrected import path

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/signup" element={<Signup/>}/> 
            </Routes>
        </div>
    );
}

export default App;
