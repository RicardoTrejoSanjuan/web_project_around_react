import CardItem from "./Card";
import type { JSX } from "react/jsx-runtime";
import type { PopupsState } from "../../types/Popups";
import type { CardsState } from "../../types/Card";

interface CardListProps {
  popups: PopupsState;
  cardsState: CardsState;
}

const CardList = ({ popups, cardsState }: CardListProps): JSX.Element => {
  const { cards, toggleLike } = cardsState;
  const { setSelectedCard, setCardToDelete } = popups;

  return (
    <ul className="cards__list">
      {cards.map((card) => (
        <CardItem
          key={card._id}
          card={card}
          onCardClick={setSelectedCard}
          onCardLike={toggleLike}
          onCardDelete={setCardToDelete}
        />
      ))}
    </ul>
  );
};

export default CardList;
