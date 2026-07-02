import { useState } from "react";
import type { CardData } from "../types/Card";
import type { PopupsState } from "../types/Popups";

export function usePopups(): PopupsState {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [isAddPlaceOpen, setAddPlaceOpen] = useState(false);
  const [isAvatarOpen, setAvatarOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState<CardData | null>(null);

  return {
    selectedCard,
    setSelectedCard,

    isEditProfileOpen,
    setEditProfileOpen,

    isAddPlaceOpen,
    setAddPlaceOpen,

    isAvatarOpen,
    setAvatarOpen,

    cardToDelete,
    setCardToDelete,
  };
}
