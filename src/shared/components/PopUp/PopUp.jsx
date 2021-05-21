import './PopUp.scss';

export function PopUp(props) {
  return (
    <>
      <div className="b-popUp">
        <div className="b-popUp__box">
          <h3 className="b-popUp__title">{props.title}</h3>

          <p className="b-popUp__text">{props.text}</p>

          <img className="b-popUp__img" src={props.src} alt={props.alt} />
        </div>
      </div>
    </>
  );
}
