import type { CardData } from "./CardData";

export interface ModalData {
  selectedCard: CardData | null;
  setSelectedCard: (card: CardData | null) => void;
  isEditProfileOpen: boolean;
  setEditProfileOpen: (open: boolean) => void;
  isAddPlaceOpen: boolean;
  setAddPlaceOpen: (open: boolean) => void;
  isAvatarOpen: boolean;
  setAvatarOpen: (open: boolean) => void;
  cardToDelete: CardData | null;
  setCardToDelete: (card: CardData | null) => void;
}
