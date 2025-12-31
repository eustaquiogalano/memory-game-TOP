import { useEffect, useState } from "react";
import style from "./Card.module.css";

function Card({ text, handleClick, cardID, gifName }) {
  const [gifURL, setGifURL] = useState("");
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=OWwbypVNf9Q9KhLNJ7Iq56qbKB7c7BSM&s=${gifName}`
    )
      .then((res) => res.json())
      .then((result) => {
        setGifURL(result.data.images.original.url);
      });
  }, []);

  return (
    <div onClick={() => handleClick(cardID)} className={style["card"]}>
      <img className={style["card__img"]} src={gifURL} alt="gif" />
      <h1>{text}</h1>
    </div>
  );
}

export default Card;
