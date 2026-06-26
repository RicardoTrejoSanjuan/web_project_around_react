import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Card, CardsState } from "../types/Card";

export function useCards(): CardsState {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCards = async (): Promise<void> => {
      try {
        setLoading(true);
        const cards = await api.getInitialCards();
        setCards(cards);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const addCard = (name: string, link: string) => {
    setLoading(true);
    return api
      .createCard(name, link)
      .then((card) => {
        setCards((prev) => [card, ...prev]);
        return card;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteCard = (cardId: string) => {
    setLoading(true);
    return api
      .deleteCard(cardId)
      .then(() => {
        setCards((prev) => prev.filter((c) => c._id !== cardId));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const toggleLike = (card: Card) => {
    return api
      .changeLikeStatus(card._id, card.isLiked)
      .then((newCard: Card) => {
        setCards((prev) => prev.map((c) => (c._id === card._id ? newCard : c)));
      });
  };

  return {
    cards,
    loading,
    addCard,
    deleteCard,
    toggleLike,
    setCards,
  };
}
