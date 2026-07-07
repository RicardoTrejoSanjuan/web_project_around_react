import type { JSX } from "react/jsx-runtime";
import CardItem from "@/components/Main/components/Card/Card";
import { useCards } from "@/hooks/useCards";
import { usePopups } from "@/hooks/usePopups";

const CardList = (): JSX.Element => {
  const cardsState = useCards();
  const popups = usePopups();

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
