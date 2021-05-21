import './FormationPage.scss';

export function FormationPage() {
  return (
    <div className="c-formation">
      <div className="c-formation__box">
        <h3 className="c-formation__title">
          BOOTCAMP FULL TIME - FULL STACK
          <br />
          <br />
          Upgrade-Hub | 2021
        </h3>
        <div className="c-formation__place c-formation__place--dev"></div>
      </div>

      <div className="c-formation__box">
        <h3 className="c-formation__title">
          TÉCNICO EN COCINA Y GASTRONOMÍA
          <br />
          <br />
          CIFP Paseo das Pontes | 2016 - 2018
        </h3>
        <div className="c-formation__place c-formation__place--kitchen"></div>
      </div>
    </div>
  );
}
