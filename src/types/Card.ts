export interface Card {
  isLiked: boolean;
  _id: string;
  name: string;
  link: string;
  owner: string;
  createdAt: string;
}

export interface CardsState {
  cards: Card[];
  loading: boolean;
  addCard: (name: string, link: string) => Promise<Card>;
  deleteCard: (cardId: string) => Promise<void>;
  toggleLike: (card: Card) => Promise<void>;
  setCards: (cards: Card[]) => void;
}
