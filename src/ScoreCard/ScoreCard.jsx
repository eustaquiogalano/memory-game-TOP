import { useState } from "react";

function ScoreCard({ currentScore }) {
  const [bestScore, setBestScore] = useState(0);

  currentScore > bestScore && setBestScore(currentScore);

  return (
    <div>
      <p>
        Score: <span>{currentScore}</span>
      </p>
      <p>
        Highest: <span>{bestScore}</span>
      </p>
    </div>
  );
}

export default ScoreCard;
