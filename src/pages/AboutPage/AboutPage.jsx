import './AboutPage.scss';
import Select from '../../assets/images/select.png';
import Slug from '../../assets/images/metal-slug.png';
import Gif from '../../assets/images/game.gif';
import Skate from '../../assets/images/skate.png';
import Vigo from '../../assets/images/sulo-skate.JPG';
import Controller from '../../assets/images/controller.png';
import Ramen from '../../assets/images/ramen.png';
import Gibson from '../../assets/images/gibson.png';
import Computer from '../../assets/images/computer.png';
import Chef from '../../assets/images/cocinero.gif';
import Music from '../../assets/images/music.gif';
import Developer from '../../assets/images/cyber.gif';

import { useState } from 'react';
import {PopUp} from '../../shared/components/PopUp/PopUp';



export function AboutPage() {
    const [popUp, setPopUp] = useState(false)
    const [counter, setCounter] = useState(7)

    const openPopUp = () => {
        if (popUp === false) {
            setPopUp(true)
        } else {
            setPopUp(false)
        }

    };

    return(
        <section className="c-about">

            <div className="c-about__photo"></div>

            <h3 className="c-about__title">SELECCIONA UN ICONO:</h3>

       

                <article className="c-about__things ">    

                        <div key={1} className="c-about__box" onClick={counter === 1 ? () => { setCounter(7) } : () => { setCounter(1) }}>
                        {counter === 1 && <PopUp title="SOBRE MI:" text="Me llamo Javier, tengo 24 años, soy de A Coruña y soy Desarrollador Full-Stack Jr. Tras varios años trabajando como cocinero, en el año 2020, decidí hacer un cambio en mi vida y en mi carrera profesional, formándome como desarrollador. Tras este tiempo de formación estoy buscando perfeccionar mis habilidades y ampliar mis conocimientos, estudiando y realizando proyectos propios." />}

                            <img src={Select} className="c-about__select"/>
                            <img src={Slug} className="c-about__pixel c-about__pixel--1"/>

                        </div>
                        

                        <div key={2} className="c-about__box" onClick={counter === 2 ? () => { setCounter(7) } : () => { setCounter(2) }}>
                        {counter === 2 && <PopUp title="SKATE:" text="He practicado skate casi toda mi vida, durante unos 10 años, desde los 12-13 años, esto es algo que me ha marcado como persona. Me ha enseñado a no rendirme, a esforzarme y a seguir superándome cada día" src={Vigo}/> }

                            <img src={Select} className="c-about__select"/>
                            <img src={Skate} className="c-about__pixel c-about__pixel--2"/>

                        </div>

                        <div key={3} className="c-about__box" onClick={counter === 3 ? () => { setCounter(7) } : () => { setCounter(3) }}>
                        {counter === 3 && <PopUp title="VIDEOJUEGOS:" text="Soy un apasionado de los videojuegos, desde bien pequeño he estado en contacto con ordenadores, consolas y todo tipo de tecnología. Siempre me han encantado los videojuegos, forman parte de mi y de mi forma de ser. Soy un friki, no lo puedo negar." src={Gif}/>}

                            <img src={Select} className="c-about__select"/>
                            <img src={Controller} className="c-about__pixel c-about__pixel--3"/>

                        </div>

                        <div key={4} className="c-about__box" onClick={counter === 4 ? () => { setCounter(7) } : () => { setCounter(4) }}>
                        {counter === 4 && <PopUp title="COCINA:" text="Desde pequeño, siempre me ha gustado cocinar, asi que, tras salir del instituto decidi dedicarme a la cocina de forma profesional. Tras 2 años de formacion, muchas horas de  trabajo y con mis practicas acabadas, consigo un trabajo de cocineo en un catering y ahi continuo formandome y trabajando hasta el inicio de la pandemia." src={Chef}/>}

                            <img src={Select} className="c-about__select"/>
                            <img src={Ramen} className="c-about__pixel c-about__pixel--4"/>

                        </div>

                        <div key={5} className="c-about__box" onClick={counter === 5 ? () => { setCounter(7) } : () => { setCounter(5) }}>
                        {counter === 5 && <PopUp title="MÚSICA:" text="La música ha formado parte de mi vida desde pequeño gracias a mis padres. Me encantan un monton de tipos diferentes de música: heavy metal, rap, blues... y me puedo pasar horas disfrutando de la muscia o tocando la guitarra." src={Music}/>}

                            <img src={Select} className="c-about__select"/>
                            <img src={Gibson} className="c-about__pixel c-about__pixel--5"/>

                        </div>

                        <div key={6} className="c-about__box" onClick={counter === 6 ? () => { setCounter(7) } : () => { setCounter(6) }}>
                        {counter === 6 && <PopUp title="INFORMÁTICA:" text="Toda mi vida he estado en contacto con ordenadores, consolas y todo tipo de tecnología, esto hizo que la informática me llamara la atención. Al estallar la crisis del Covid-19, decidí cambair mi vida por completo y dedicarme a la programación, formandome como Full-stack y desarrollando mis habilidades y mi creatividad como programador." src={Developer}/>}

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