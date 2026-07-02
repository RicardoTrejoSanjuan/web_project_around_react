export interface CardData {
  _id: string;
  name: string;
  link: string;
  owner: string;
  createdAt: string;
  isLiked: boolean;
}

export interface CardsState {
  cards: CardData[];
  loading: boolean;
  addCard: (name: string, link: string) => Promise<CardData>;
  deleteCard: (cardId: string) => Promise<void>;
  toggleLike: (card: CardData) => Promise<void>;
  setCards: (cards: CardData[]) => void;
}
