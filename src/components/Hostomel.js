import { useState } from 'react';

export const Hostomel = () => {
  const [selectedPart, setSelectedPart] = useState(null);

  const part1 = (
    <div className="part1">
      <ul>
        <li>
          <a
            href="https://maps.app.goo.gl/VLAfpz75HfwHySoB7"
            target="_blank"
            rel="noreferrer"
          >
            вул. Рекунова, 11а (Ліцей №1)
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/RdbtWC3pTxGRRyfX6"
            target="_blank"
            rel="noreferrer"
          >
            вул. Молодіжна, 9 (Початкова школа №2)
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/rwhANFKjSMehbwVM8"
            target="_blank"
            rel="noreferrer"
          >
            вул. Кулішова, 14 (Мостищенська філія ліцею №1)
          </a>
        </li>
      </ul>
    </div>
  );

  const part2 = (
    <div className="part1">
      <ul>
        <li>
          <a
            href="https://maps.app.goo.gl/bzM2p5KVArictrio9"
            target="_blank"
            rel="noreferrer"
          >
            вул. Проскурівська, 11
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/dCJjS6zQgT54aFYG8"
            target="_blank"
            rel="noreferrer"
          >
            вул. Богдана Хмельницького, 2
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/DCHaHb32xsW1Y5H28"
            target="_blank"
            rel="noreferrer"
          >
            вул. Бучанське шосе, 8
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/DPq4LUoumAgUYS7Y8"
            target="_blank"
            rel="noreferrer"
          >
            вул. Лугова, 6
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/jy3mAz7EAvbc42Sw7"
            target="_blank"
            rel="noreferrer"
          >
            вул. Мирна, 13
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/31obxQQhevz3E9SY6"
            target="_blank"
            rel="noreferrer"
          >
            вул. Свято-Покровська, 3
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/QQiwX31SL3k6KGLg6"
            target="_blank"
            rel="noreferrer"
          >
            вул. Свято-Покровська, 3Д
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/D9yoPTmC3bMMJTY97"
            target="_blank"
            rel="noreferrer"
          >
            вул. Свято-Покровська, 73
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/EXE4YWbYtMxVdT888"
            target="_blank"
            rel="noreferrer"
          >
            вул. Свято-Покровська, 141А
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/Wyd7doWoWBDS5AUB8"
            target="_blank"
            rel="noreferrer"
          >
            вул. Рекунова, 1
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/J8nyMiPdqSqqRG3Y9"
            target="_blank"
            rel="noreferrer"
          >
            вул. Рекунова, 5
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/SqQG9Rhjun9eE8316"
            target="_blank"
            rel="noreferrer"
          >
            вул. Рекунова, 7
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/5161YBVx3BhLB1bq5"
            target="_blank"
            rel="noreferrer"
          >
            вул. Рекунова, 9
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/csAYfYaq8paUUUg56"
            target="_blank"
            rel="noreferrer"
          >
            вул. Рекунова, 9А
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/cXMWEYcwoME6M64DA"
            target="_blank"
            rel="noreferrer"
          >
            вул. Рекунова, 9Б
          </a>
        </li>
      </ul>
    </div>
  );

  const radiationShelter = (
    <div className="part1">
      <h2>Протирадіаційне укриття</h2>
      <p>
        (для укриття населення, працівників субʼєктів господарювання, хворих та
        медперсоналу, евакуйованих)
      </p>
      <ul>
        <li>
          <a
            href="https://maps.app.goo.gl/R7DzfyG4gKrqV18H9"
            target="_blank"
            rel="noreferrer"
          >
            пл. Рекунова, 2 (належить ПрАТ "Ветропак Гостомельський Склозавод"
            (приватної форми власності))
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="wrapper-gost">
      <h2>Виберіть тип укриття:</h2>
      <div className="btn btn-host">
        <button onClick={() => setSelectedPart(1)}>Найпростіші укриття</button>
        <button onClick={() => setSelectedPart(2)}>Підвали будинків</button>
      </div>

      {selectedPart === 1 && part1}
      {selectedPart === 2 && part2}

      {selectedPart === 1 && radiationShelter}
    </div>
  );
};
