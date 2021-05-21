import './Footer.scss';

export function Footer() {
  return (
    <footer className="c-footer">
      <a className="c-footer__link" href="https://github.com/JSuly" rel="noreferrer" target="_blank">
        <span className="b-icon icon-github"></span>
      </a>

      <a className="c-footer__link" href="https://www.linkedin.com/in/javier-soilan/" rel="noreferrer" target="_blank">
        <span className="b-icon icon-linkedin"></span>
      </a>

      <a className="c-footer__link" href="https://www.instagram.com/j_suly/?hl=es" rel="noreferrer" target="_blank">
        <span className="b-icon icon-instagram"></span>
      </a>

      <a
        className="c-footer__link"
        href="https://www.facebook.com/javier.soilansanchez/"
        rel="noreferrer"
        target="_blank"
      >
        <span className="b-icon icon-facebook-circular-logo"></span>
      </a>

      <a className="c-footer__link" href="https://twitter.com/TwitchJ_Suly" rel="noreferrer" target="_blank">
        <span className="b-icon icon-twitter"></span>
      </a>
    </footer>
  );
}
