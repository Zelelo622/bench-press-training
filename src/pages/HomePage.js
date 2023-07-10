import React, { useEffect, useState } from "react";
import CalculateMax from "../components/CalculateMax";

const HomePage = () => {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [max, setMax] = useState("");
  const [trainingWeights, setTrainingWeights] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("trainingData");

    if (storedData) {
      const { weight, reps, max } = JSON.parse(storedData);
      setWeight(weight);
      setReps(reps);
      setMax(max);
    }
  }, []);

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
