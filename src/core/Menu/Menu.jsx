import './Menu.scss';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import Lofi from "../../assets/music/lofi.mp3";
import Arroba from '../../assets/images/arroba.svg';

export function Menu() {
    const [accordion, setAccordion] = useState(false);
    const [play, setPlay] = useState(false);

    const openAccordion = () => {
        if (accordion === true) {
            setAccordion(false)
        }
        else {
            setAccordion(true)
        }
    };

    const playMusic = () => {
        if (play === true) {
            setPlay(false)
        }
        else {
            setPlay(true)
        }
    }


    return(

        <div className="c-menu">

            <NavLink className="c-menu__logo" exact to="/"><img className="c-menu__at" src={Arroba}/><h3>J_Suly</h3><p className="c-menu__work">Front-end Developer</p></NavLink>

            

            <nav className="c-menu__nav">

                <div className={accordion ? 'c-menu__link c-menu__link--active' : 'c-menu__link'} onClick={openAccordion}><p>CV</p><div className={accordion ? 'i-arrow i-arrow--active' : 'i-arrow'}></div></div>
                {accordion && 
                    <div className="c-menu__accordion">
                        
                    <NavLink className="c-menu__cv" onClick={openAccordion} exact to="/exp">Experiencia</NavLink>

                    <NavLink className="c-menu__cv" onClick={openAccordion} exact to="/formation">Formación</NavLink>

                    <NavLink className="c-menu__cv" onClick={openAccordion} exact to="/skills">Skills</NavLink>

                    </div>
                    }

                <NavLink className="c-menu__link" activeClassName="c-menu__link--active" exact to="/about">Sobre mi</NavLink> 

                <div className="c-menu__music" onClick={playMusic}>
                    {play && <audio src={Lofi} autoPlay="autoplay" loop="loop"/>}
                
                </div>    
                
                
            </nav>

        </div>
    )
}
