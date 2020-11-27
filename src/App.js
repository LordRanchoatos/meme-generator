import React from 'react';
import Header from './Header/Header';
import Memegenerator from './Memegenerator/Memegenerator';
import "./styles/styles.css";


function App() {
    return (
        <div className="app container">
            <Header />
            <Memegenerator />
        </div>
    )
}



export default App;