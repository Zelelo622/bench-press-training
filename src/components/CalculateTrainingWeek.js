import React from "react";
import { percentages, repetitions } from "../utils/data";

const CalculateTrainingWeek = ({ trainingWeights, index }) => {
  return (
    <div key={index} className="calcTrain__item">
      <p>Неделя: {index + 1}</p>
      <p>Вес: {trainingWeights} кг</p>
      <p>Процент от ПМ: {percentages[index]}%</p>
      <p>Количество повторений: {repetitions[index]}</p>
    </div>
  );
};

export default CalculateTrainingWeek;
