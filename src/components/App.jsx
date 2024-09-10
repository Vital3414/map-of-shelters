import React, { useState } from 'react';
import { Hostomel } from './Hostomel';
import { Horenka } from './Horenka';
import { Ozera } from './Ozera';
import gerb from '../images/gerb2.png';

export const App = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const renderLocation = () => {
    switch (selectedLocation) {
      case 'Hostomel':
        return <Hostomel />;
      case 'Horenka':
        return <Horenka />;
      case 'Ozera':
        return <Ozera />;
      default:
        return (
          <p className="text-all">
            Оберіть населений пункт, щоб перейти до адреси укриттів.
          </p>
        );
    }
  };

  return (
    <div className="wrapper">
      <div className="image-container">
        <img src={gerb} alt="logo" className="logo-image" />
      </div>
      <div className="wrapper-text">
        <h1>Найпростіші укриття</h1>
        <p>
          (Цокольні або підвальні приміщення чи інші підземні простори, де можна
          перебувати тимчасово)
        </p>
      </div>
      <div className="wrapper-btn">
        <div className="btn">
          <button onClick={() => setSelectedLocation('Hostomel')}>
            Розміщені у селищі Гостомель за адресами
          </button>
          <button onClick={() => setSelectedLocation('Horenka')}>
            Розміщені у селищі Горенка за адресами
          </button>
          <button onClick={() => setSelectedLocation('Ozera')}>
            Розміщені у селищі Озера за адресами
          </button>
        </div>
      </div>
      <div>{renderLocation()}</div>
      <div className="wrapper-footer">
        <h2>
          На території громади забезпечено цілодобовий та безперешкодний доступ
          до наявних обʼєктів фонду захисних споруд цивільного захисту.
        </h2>
      </div>
    </div>
  );
};
