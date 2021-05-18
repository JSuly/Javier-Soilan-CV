import { NavLink } from 'react-router-dom';
import './Menu.scss';
import Arroba from '../../assets/images/arroba.svg';

export function Menu() {
    return(

        <div className="c-menu">

            <NavLink className="c-menu__logo" exact to="/"><img className="c-menu__at" src={Arroba}/><h3>J_Suly</h3><p className="c-menu__work">Full-Stack Developer</p></NavLink>

            


            <nav className="c-menu__nav">

                <NavLink className="c-menu__link" activeClassName="c-menu__link--active" exact to="/cv">CV</NavLink>

                <NavLink className="c-menu__link" activeClassName="c-menu__link--active" exact to="/about">Sobre mi</NavLink>
                
            </nav>

        </div>
    )
}