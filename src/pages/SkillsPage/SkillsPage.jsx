import { useState } from 'react';

import Button from '../../assets/images/button.png';

import './SkillsPage.scss';

export function SkillsPage() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="c-skills">
      <h3 className="c-skills__title">SKILLS</h3>

      <div className="c-skills__box">
        <h4 className="c-skills__title c-skills__title--large">HARD SKILLS:</h4>
        <img
          className={counter === 1 ? 'c-skills__btn c-skills__btn--none' : 'c-skills__btn'}
          src={Button}
          alt="button"
          onClick={
            counter === 1
              ? () => {
                  setCounter(0);
                }
              : () => {
                  setCounter(1);
                }
          }
        />
        {counter === 1 && (
          <div className="c-skills__accordion">
            <button
              className="c-skills__close"
              type="button"
              onClick={
                counter === 1
                  ? () => {
                      setCounter(0);
                    }
                  : () => {
                      setCounter(1);
                    }
              }
            >
              x
            </button>

            <h4 className="c-skills__title c-skills__title--medium">NIVEL:</h4>

            <section className="c-skills__level">
              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">HTML:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
              </article>

              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">CSS:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
              </article>
            </section>
            <section className="c-skills__level">
              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">JS:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
              </article>

              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">REACT:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
              </article>
            </section>
            <section className="c-skills__level">
              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">ANGULAR:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
              </article>

              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">NODE:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
              </article>
            </section>
            <section className="c-skills__level">
              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">PHP:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
              </article>

              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">SYMFONY:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
              </article>
            </section>
            <section className="c-skills__level">
              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">MONGO DB:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
              </article>

              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">MYSQL:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
                <div className="b-level b-level--shadow"></div>
              </article>
            </section>
          </div>
        )}

        <h4 className="c-skills__title c-skills__title--large">SOFT SKILLS:</h4>
        <img
          className={counter === 2 ? 'c-skills__btn c-skills__btn--none' : 'c-skills__btn'}
          src={Button}
          alt="button"
          onClick={
            counter === 2
              ? () => {
                  setCounter(0);
                }
              : () => {
                  setCounter(2);
                }
          }
        />
        {counter === 2 && (
          <div className="c-skills__accordion">
            <button
              className="c-skills__close"
              type="button"
              onClick={
                counter === 2
                  ? () => {
                      setCounter(0);
                    }
                  : () => {
                      setCounter(2);
                    }
              }
            >
              x
            </button>

            <h4 className="c-skills__title c-skills__title--medium">NIVEL:</h4>

            <section className="c-skills__level">
              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">Creativo:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
              </article>

              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">Profesional:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
              </article>
            </section>
            <section className="c-skills__level">
              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">Organizado:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
              </article>

              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">En equipo:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
              </article>
            </section>
            <section className="c-skills__level">
              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">Rapidez:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
              </article>

              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">Motivación:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
              </article>
            </section>
            <section className="c-skills__level">
              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">Ganas:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
              </article>

              <article className="c-skills__pack">
                <h4 className="c-skills__title c-skills__title--small">Fiki:</h4>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
                <div className="b-level b-level--green"></div>
              </article>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
