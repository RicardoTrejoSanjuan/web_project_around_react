import type { Card } from "./Card";

export interface PopupsState {
  selectedCard: Card | null;
  setSelectedCard: (card: Card | null) => void;
  isEditProfileOpen: boolean;
  setEditProfileOpen: (open: boolean) => void;
  isAddPlaceOpen: boolean;
  setAddPlaceOpen: (open: boolean) => void;
  isAvatarOpen: boolean;
  setAvatarOpen: (open: boolean) => void;
  cardToDelete: Card | null;
  setCardToDelete: (card: Card | null) => void;
}
