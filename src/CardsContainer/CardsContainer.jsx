import { useEffect, useState } from "react";
import Card from "./Card/Card";
import style from "./CardsContainer.module.css";

function CardsContainer({ currentScore, setCurrentScore }) {
  const cardList = [
    { id: 0, isClicked: false, text: "The Eagle", name: "khabib" },
    { id: 1, isClicked: false, text: "King James", name: "lebron" },
    { id: 2, isClicked: false, text: "Black Mamba", name: "kobe" },
    { id: 3, isClicked: false, text: "Chef Curry", name: "curry" },
    { id: 4, isClicked: false, text: "Baby Khabib", name: "makhachev" },
    { id: 5, isClicked: false, text: "Bones", name: "jon jones" },
    { id: 6, isClicked: false, text: "Cap", name: "captain price" },
    { id: 7, isClicked: false, text: "Vengeance", name: "batman" },
  ];

  // const [currentScore, setCurrentScore] = useState(0);
  const [shuffledCardList, setShuffledCardList] = useState([...cardList]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {}, []);

  function handleShuffle() {
    setShuffledCardList((prev) => shuffle(prev));
  }

  function shuffle() {
    const result = [...shuffledCardList];

    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
  }

  function handleCardClick(cardID) {
    if (!selectedCards.includes(cardID)) {
      setSelectedCards([...selectedCards, cardID]);
      setCurrentScore((prev) => prev + 1);
    } else {
      setSelectedCards([]);
      setShuffledCardList([...cardList]);
      setCurrentScore(0);
    }

    handleShuffle();
  }

  console.log("Score: " + currentScore);

  return (
    <div className={style["cards-container"]}>
      {shuffledCardList.map((card) => {
        return (
          <Card
            handleClick={handleCardClick}
            key={card.id}
            cardID={card.id}
            text={card.text}
            gifName={card.name}
          />
        );
      })}
    </div>
  );
}

export default CardsContainer;
