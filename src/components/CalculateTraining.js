import React, { useState } from "react";
import CalculateTrainingWeek from "./CalculateTrainingWeek";
import { percentages } from "../utils/data";

const CalculateTraining = ({ max, setMax }) => {
  const [trainingWeights, setTrainingWeights] = useState([]);

  const calculateTraining = (e) => {
    e.preventDefault();

    const trainingWeights = percentages.map((percentage) => {
      return (max * percentage) / 100;
    });

    setTrainingWeights(trainingWeights);
  };

  return (
    <section className="calcTrain">
      <div className="container">
        <div className="calcTrain__inner">
          <form className="calcTrain__form" onSubmit={calculateTraining}>
            <div className="calcTrain__form-wrap">
              <label className="calcTrain__label" htmlFor="weight">
                Повторный максимум:
              </label>
              <input
                className="calcTrain__input"
                id="weight"
                type="number"
                min={0}
                value={max}
                onChange={(e) => {
                  setMax(e.target.value);
                }}
                placeholder="кг"
              />
            </div>
            <button className="calcTrain__btn" onClick={calculateTraining}>
              Показать план тренировки
            </button>
          </form>

          <p>3 подхода / 2 раза в неделю</p>
          {trainingWeights.length > 0 && (
            <div className="calcTrain__list">
              {trainingWeights.map((trainingWeights, index) => (
                <CalculateTrainingWeek
                  trainingWeights={trainingWeights}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalculateTraining;
