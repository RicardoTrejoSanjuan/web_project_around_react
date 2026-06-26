import type { Card } from "../types/Card";
import type { JSX } from "react/jsx-runtime";

interface CardProps {
  card: Card;
  onCardClick: (card: Card) => void;
  onCardLike: (card: Card) => void;
  onCardDelete: (card: Card) => void;
}

const CardItem = ({
  card,
  onCardClick,
  onCardLike,
  onCardDelete,
}: CardProps): JSX.Element => {
  const likeButtonClassName: string = `
  card__like-button
  ${card.isLiked ? "card__like-button_is-active" : ""}
  `;

  return (
    <li className="card">
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick={() => onCardClick(card)}
      />

      <button
        aria-label="Eliminar tarjeta"
        type="button"
        className="card__delete-button"
        onClick={() => onCardDelete(card)}
      />

      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>

        <button
          aria-label="Botón Me gusta"
          className={likeButtonClassName}
          onClick={() => onCardLike(card)}
          type="button"
        />
      </div>
    </li>
  );
};

export default CardItem;
