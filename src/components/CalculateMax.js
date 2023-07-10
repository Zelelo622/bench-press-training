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
          <h2 className="calcMax__title">Рассчет одноповторного максимума</h2>
          <form onSubmit={calculateMaxes} className="calcMax__form">
            <div className="calcMax__form-wrap">
              <label className="calcMax__label" htmlFor="weight">
                Вес:
              </label>
              <input
                className="calcMax__input"
                id="weight"
                type="number"
                min={0}
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                placeholder="кг"
              />
            </div>
            <div className="calcMax__form-wrap calcMax__form-wrapLast">
              <label className="calcMax__label" htmlFor="reps">
                Количестов повторов:
              </label>
              <input
                className="calcMax__input"
                id="reps"
                type="number"
                min={0}
                value={reps}
                onChange={(e) => {
                  setReps(e.target.value);
                }}
                placeholder="кол-во"
              />
            </div>
            <div className="calcMax__btns">
              <button className="calcMax__btn" onClick={calculateMaxes}>
                Рассчитать ПМ
              </button>
            </div>
          </form>

          <table className="calcMax__table">
            <thead>
              <tr>
                <th className="calcMax__table-header">&nbsp;</th>
                <th className="calcMax__table-header">Бжицки</th>
                <th className="calcMax__table-header">Эпли</th>
                <th className="calcMax__table-header">Лэндера</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="calcMax__table-header">Т. Максимум</th>
                <td className="calcMax__table-cell">{brzyckiMax}</td>
                <td className="calcMax__table-cell">{epleyMax}</td>
                <td className="calcMax__table-cell">{landerMax}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CalculateMax;
