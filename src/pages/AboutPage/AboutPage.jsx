import './AboutPage.scss';
import Sulo from '../../assets/images/Sulo.jpeg';

export function AboutPage() {
    return(
        <div className="c-about">

            <section className="c-about__box">

               

                <article className="c-about__descript">

                    <div className="c-about__photo">
                    </div>
                    
                    <div className="c-about__sulo">
                        <p>Me llamo Javier, tengo 24 años, soy de A Coruña y soy Desarrollador Full-Stack Jr. Tras varios años trabajando como cocinero, en el año 2020, decidí hacer un cambio en mi vida y en mi carrera profesional, formandome como desarrollador. Tras este tiempo de formación estoy buscando perfeccionar mis habilidades y ampliar mis conocimientos, estudiando, realizando proyectyos propios y buscando empleo.</p>
                    </div>

                </article>

                <article className="c-about__info">

                    <p className="c-about__hobbies">Soy un apasionado de los videojuegos, de la musica y de el deporte. Desde bien pequeño he estado en contancto con ordenadores, consolas y todo tipo de tecnología.
                    <br/>
                    Durante 10 años, desde los 12-13, he practicado skate, esto es algo que me a marcado como persona. Me ha enseñado a no rendirme, a esforzarme y a seguir superandome cada día.</p>

                </article>


            </section>

        </div>
    )
}