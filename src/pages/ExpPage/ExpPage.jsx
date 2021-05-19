import './ExpPage.scss';
import Work from '../../assets/images/portfolio.svg';
import Knife from '../../assets/images/knife.svg';

export function ExpPage(){
    return(
        <div className="c-exp">
            

                <div className="c-exp__works">
                    <h3 className="c-exp__business">BOKETÉ CATERING & WEDDING | 2018 - 2020 | Cocinero</h3>
                    <ul className="c-exp__jobs">
                        <li>- Tareas de organización de servicios.</li>
                        <li>- Dirección de equipos durante eventos.</li>
                        <li>- Tareas de producción en gran volumen.</li>
                        <li>- Recepción de materias primas.</li>
                        <li>- Tareas de logística.</li>
                    </ul>
                    
                    <h3 className="c-exp__business">THE LIGHTHOUSE PUB (OXFORD) | 2018 | Cocinero</h3>
                    <ul className="c-exp__jobs">
                        <li>- Recepción de materias primas.</li>
                        <li>- Elavoración y pre-eleavoración.</li>
                        <li>- Limpieza y organización del material.</li>
                        <li>- Control de stocks.</li>
                    </ul>
                    
                    <h3 className="c-exp__business">MARICASTAÑA BAR | 2017 - 2018 | Jefe de cocina</h3>
                    <ul className="c-exp__jobs">
                        <li>- Creación de la carta.</li>
                        <li>- Realización de pedidos y escandallos.</li>
                        <li>- Ejecución de los servicios.</li>
                    </ul>

                    <h3 className="c-exp__business">IKEA | 2016 |  Dependiente</h3>
                    <ul className="c-exp__jobs">
                        <li>- Atención al cliente.</li>
                        <li>- Gestión de mercacioas, espacios y almacenaje.</li>
                    </ul>

                </div>


        </div>
    )
}