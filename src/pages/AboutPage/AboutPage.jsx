import './AboutPage.scss';
import Select from '../../assets/images/select.png';
import Slug from '../../assets/images/metal-slug.png';
import Skate from '../../assets/images/skate.png';
import Controller from '../../assets/images/controller.png';
import Ramen from '../../assets/images/ramen.png';
import Gibson from '../../assets/images/gibson.png';
import Computer from '../../assets/images/computer.png';


export function AboutPage() {
    return(
        <section className="c-about">

            <div className="c-about__photo"></div>

            <h3 className="c-about__title">SELECCIONA UN ICONO:</h3>

       

                <article className="c-about__things ">    

                        <div className="c-about__box">
                            <img src={Select} className="c-about__select"/>
                            <img src={Slug} className="c-about__pixel c-about__pixel--1"/>
                        </div>

                        <div className="c-about__box">
                            <img src={Select} className="c-about__select"/>
                            <img src={Skate} className="c-about__pixel c-about__pixel--2"/>
                        </div>

                        <div className="c-about__box">
                            <img src={Select} className="c-about__select"/>
                            <img src={Controller} className="c-about__pixel c-about__pixel--3"/>
                        </div>

                        <div className="c-about__box">
                            <img src={Select} className="c-about__select"/>
                            <img src={Ramen} className="c-about__pixel c-about__pixel--4"/>
                        </div>

                        <div className="c-about__box">
                            <img src={Select} className="c-about__select"/>
                            <img src={Gibson} className="c-about__pixel c-about__pixel--5"/>
                        </div>

                        <div className="c-about__box">
                            <img src={Select} className="c-about__select"/>
                            <img src={Computer} className="c-about__pixel c-about__pixel--6"/>
                        </div>

                </article>

        
 {/*
                <article className="c-about__info">

                    <p className="c-about__hobbies">Soy un apasionado de los videojuegos, de la música y del deporte. Desde bien pequeño he estado en contacto con ordenadores, consolas y todo tipo de tecnología. 
                    <br/>
                    Durante 10 años, desde los 12-13, he practicado skate, esto es algo que me ha marcado como persona. Me ha enseñado a no rendirme, a esforzarme y a seguir superándome cada día.</p>

                </article>
 */}
{/* <p>Me llamo Javier, tengo 24 años, soy de A Coruña y soy Desarrollador Full-Stack Jr. Tras varios años trabajando como cocinero, en el año 2020, decidí hacer un cambio en mi vida y en mi carrera profesional, formándome como desarrollador. Tras este tiempo de formación estoy buscando perfeccionar mis habilidades y ampliar mis conocimientos, estudiando, realizando proyectos propios y buscando empleo.</p> */}


        </section>
    )
}