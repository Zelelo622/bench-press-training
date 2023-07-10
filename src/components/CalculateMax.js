import React, { useState } from "react";

const CalculateMax = ({ weight, reps, setWeight, setReps }) => {
  const [brzyckiMax, setBrzyckiMax] = useState("");
  const [epleyMax, setEpleyMax] = useState("");
  const [landerMax, setLanderMax] = useState("");

  const calculateMaxes = (e) => {
    e.preventDefault();
    const weightParseFloat = parseFloat(weight);
    const repsParseInt = parseInt(reps);

    if (!isNaN(weightParseFloat) && !isNaN(repsParseInt)) {
      const brzycki = weightParseFloat / (1.0278 - 0.0278 * repsParseInt);
      const epley = (1 + repsParseInt * 0.033) * weightParseFloat;
      const lander = weightParseFloat / (1.013 - 0.0267123 * repsParseInt);

      setBrzyckiMax(brzycki.toFixed(2));
      setEpleyMax(epley.toFixed(2));
      setLanderMax(lander.toFixed(2));
    }
  };

  return (
    <section className="calcMax">
      <div className="container">
        <div className="calcMax__inner">
          <h2>Рассчет одноповторного максимума</h2>
          <form onSubmit={calculateMaxes} className="calcMax__form">
            <div className="calcMax__form-wrap">
              <label className="calcMax__label" htmlFor="weight">
                Вес:
              </label>
              <input
                className="calcMax__input"
                id="weight"
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                placeholder="кг"
              />
            </div>
            <div className="calcMax__form-wrap">
              <label className="calcMax__label" htmlFor="reps">
                Количестов повторов:
              </label>
              <input
                className="calcMax__input"
                id="reps"
                value={reps}
                onChange={(e) => {
                  setReps(e.target.value);
                }}
                placeholder="кол-во"
              />
            </div>
            <button className="calcMax__btn" onClick={calculateMaxes}>
              Рассчитать ОМ
            </button>
          </form>

          <table>
            <tr>
              <th>&nbsp;</th>
              <th>Бжицки</th>
              <th>Эпли</th>
              <th>Лэндера</th>
            </tr>
            <tr>
              <th>Т. Максимум</th>
              <td>{brzyckiMax}</td>
              <td>{epleyMax}</td>
              <td>{landerMax}</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CalculateMax;
