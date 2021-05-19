import './HomePage.scss';
import Manga from '../../assets/images/manga.jpg';
import { NavLink } from 'react-router-dom';

export function HomePage() {
    return(
        <div className="c-home">
            
            <h1 className="c-home__title">JAVIER SOILÁN <br/> SÁNCHEZ
            </h1>

            <nav className="c-home__nav">

                <NavLink className="c-home__link"  exact to="/exp">Experiencia</NavLink>

                <NavLink className="c-home__link"  exact to="/formation">Formación</NavLink>

                <NavLink className="c-home__link" exact to="/skills">Skills</NavLink>

                <NavLink className="c-home__link" exact to="/about">Sobre mi</NavLink>

            </nav>

        </div>

    )
}