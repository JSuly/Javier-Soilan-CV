import './App.css'

import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./core/Routes/Routes";
import { Menu } from './core/Menu/Menu';
import { Footer } from './core/Footer/Footer';

function App() {
  return (
    <Router>

        <Menu/>
        <Routes/>
        <Footer/>

    </Router>
  );
}

export default App;
