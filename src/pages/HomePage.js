import React, { useEffect, useState } from "react";
import CalculateMax from "../components/CalculateMax";

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

  const [trainingWeights, setTrainingWeights] = useState([]);

  useEffect(() => {
    const data = { weight, reps, max };
    localStorage.setItem("trainingData", JSON.stringify(data));
  }, [weight, reps, max]);

  return (
    <main className="main">
      <CalculateMax weight={weight} reps={reps} setWeight={setWeight} setReps={setReps} />
    </main>
  );
};

export default HomePage;
