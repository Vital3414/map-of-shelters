import React, { useState } from 'react';
import { Hostomel } from './Hostomel';
import { Horenka } from './Horenka';
import { Ozera } from './Ozera';
import { HostomelPoints } from './HostomelPoints';
import { HorenkaPoints } from './HorenkaPoints';
import { OzeraPoints } from './OzeraPoints';
import { MoschunPoints } from './MoschunPoints';
import gerb from '../images/gerb2.png';
import punkt from '../images/punkt.jpg';

export const App = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedPointLocation, setSelectedPointLocation] = useState(null);

  const toggleLocation = location => {
    if (selectedLocation === location) {
      setSelectedLocation(null);
    } else {
      setSelectedLocation(location);
    }
  };

  const togglePointLocation = location => {
    if (selectedPointLocation === location) {
      setSelectedPointLocation(null);
    } else {
      setSelectedPointLocation(location);
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
      <div className="city">
        {/* Гостомель */}
        <div className="wrapper-btn">
          <button onClick={() => toggleLocation('Hostomel')}>
            Розміщені у селищі Гостомель за адресами
          </button>
          {selectedLocation === 'Hostomel' && <Hostomel />}
        </div>

        {/* Горенка */}
        <div className="wrapper-btn">
          <button onClick={() => toggleLocation('Horenka')}>
            Розміщені у селищі Горенка за адресами
          </button>
          {selectedLocation === 'Horenka' && <Horenka />}
        </div>

        {/* Озера */}
        <div className="wrapper-btn">
          <button onClick={() => toggleLocation('Ozera')}>
            Розміщені у селищі Озера за адресами
          </button>
          {selectedLocation === 'Ozera' && <Ozera />}
        </div>
      </div>

      <div className="wrapper-footer">
        <h2>
          На території громади забезпечено цілодобовий та безперешкодний доступ
          до наявних обʼєктів фонду захисних споруд цивільного захисту.
        </h2>
      </div>

      {/* Пункти незламності */}
      <div className="punkt">
        {/* <h2 className="punkt-title">Пункти незламності</h2> */}
        <img src={punkt} alt="Пункт незламності" className="punkt-image"></img>
        <div className="city">
          {/* Гостомель */}
          <div className="wrapper-btn">
            <button onClick={() => togglePointLocation('HostomelPoints')}>
              Пункти незламності у Гостомелі
            </button>
            {selectedPointLocation === 'HostomelPoints' && <HostomelPoints />}
          </div>

          {/* Горенка */}
          <div className="wrapper-btn">
            <button onClick={() => togglePointLocation('HorenkaPoints')}>
              Пункти незламності у Горенці
            </button>
            {selectedPointLocation === 'HorenkaPoints' && <HorenkaPoints />}
          </div>

          {/* Озера */}
          <div className="wrapper-btn">
            <button onClick={() => togglePointLocation('OzeraPoints')}>
              Пункти незламності у Озерах
            </button>
            {selectedPointLocation === 'OzeraPoints' && <OzeraPoints />}
          </div>

          {/* Мощун */}
          <div className="wrapper-btn moschun-foot">
            <button onClick={() => togglePointLocation('MoschunPoints')}>
              Пункти незламності у Мощуні
            </button>
            {selectedPointLocation === 'MoschunPoints' && <MoschunPoints />}
          </div>
        </div>
      </div>
    </div>
  );
};
