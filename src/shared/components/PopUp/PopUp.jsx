import './PopUp.scss'

export function PopUp(props) {
    return (
        <>
            <div className="c-popUp">

                <div className="c-popUp__box" >

                    <h3 className="c-popUp__title">{props.title}</h3>

                    <p className="c-popUp__text">{props.text}</p>

                    <img className="c-popUp__img" src={props.src} alt={props.alt}/>

                </div>
                
            </div>
        </>
    )
}