import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import NavBarComponent from "./components/NavBarComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
    return (
        <div className="App">
            <NavBarComponent/>
            <div className="container">
                <br/>
                <br/>
                <h1 style={{textAlign: "center"}}>My Projects</h1>
                <MainComponent/>
                <br/>
                <br/>
                <ContactComponent/>
                <br/>
                <br/>
            </div>
            <FooterComponent/>
        </div>
    );
}

export default App;
