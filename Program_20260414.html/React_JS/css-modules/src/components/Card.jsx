import card from "../styles/Card.module.css";

function Card({ headText, paraText, buttonText }) {
  return (
    <div className={card.cardContainer}>
      <h2 className={card.title}> {headText}</h2>
      <p className={card.description}> {paraText}</p>
      <button className={card.button}> {buttonText}</button>
    </div>
  );
}

export default Card;
