import { NavLink } from 'react-router-dom';
import './Menu.scss';

export function Menu() {
    return(

        <div className="c-menu">

            <NavLink className="c-menu__logo" exact to="/"><h3>JSS</h3></NavLink>

            <p className="c-menu__work">Full-Stack Developer</p>


            <nav className="c-menu__nav">

                <NavLink className="c-menu__link" activeClassName="c-menu__link--active" exact to="/cv">CV</NavLink>

                <NavLink className="c-menu__link" activeClassName="c-menu__link--active" exact to="/about">Sobre mi</NavLink>
                
            </nav>

        </div>
    )
}