import React, { useEffect, useState } from "react";
import CalculateMax from "../components/CalculateMax";
import CalculateTraining from "../components/CalculateTraining";

const HomePage = () => {
  const [weight, setWeight] = useState(() => {
    const storedData = localStorage.getItem("trainingData");
    return storedData ? JSON.parse(storedData).weight : "";
  });

  const [reps, setReps] = useState(() => {
    const storedData = localStorage.getItem("trainingData");
    return storedData ? JSON.parse(storedData).reps : "";
  });

  const [max, setMax] = useState(() => {
    const storedData = localStorage.getItem("trainingData");
    return storedData ? JSON.parse(storedData).max : "";
  });

  useEffect(() => {
    const data = { weight, reps, max };
    localStorage.setItem("trainingData", JSON.stringify(data));
  }, [weight, reps, max]);

  return (
    <main className="main">
      <div className="container">
        <h1 className="title">Тренировка по жиму лежа</h1>
      </div>
      <CalculateMax
        weight={weight}
        reps={reps}
        setWeight={setWeight}
        setReps={setReps}
      />
      <CalculateTraining max={max} setMax={setMax} />
    </main>
  );
};

export default HomePage;
