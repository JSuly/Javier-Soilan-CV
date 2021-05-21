import './App.css'

import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./core/Routes/Routes";
import { Menu } from './core/Menu/Menu';
import { Footer } from './core/Footer/Footer';
import ScrollToTop from './shared/components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Router>

        <ScrollToTop/>
        <Menu/>
        <Routes/>
        <Footer/>

    </Router>
  );
}

export default App;
