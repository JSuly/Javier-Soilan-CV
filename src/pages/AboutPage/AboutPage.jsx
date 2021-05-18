import './AboutPage.scss';
import Sulo from '../../assets/images/Sulo.jpeg';

export function AboutPage() {
    return(
        <section className="c-about">

            <div className="c-about__box">

                <h2 className="c-about__title">¿Quién soy?</h2>

                <section className="c-about__info">

                    <div className="c-about__photo">
                    </div>

                    <p className="c-about__sulo">Me llamo Javier, tengo 24 años, soy de A Coruña y soy Desarrollador Full-Stack Jr. Tras varios años trabajando como cocinero, en el año 2020, decidí hacer un cambio en mi vida y en mi carrera profesional, formandome como desarrollador. Tras este tiempo de formación estoy buscando perfeccionar mis habilidades y ampliar mis conocimientos, estudiando, realizando proyectyos propios y buscando empleo.</p>

                </section>


            </div>

        </section>
    )
}