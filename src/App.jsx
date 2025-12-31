import CardsContainer from "./CardsContainer/CardsContainer";
import ScoreCard from "./ScoreCard/ScoreCard";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <>
      <ScoreCard currentScore={currentScore} />
      <CardsContainer
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
      />
    </>
  );
}

export default App;
