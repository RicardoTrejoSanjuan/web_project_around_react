import { useState, useContext } from "react";
import type { CardData } from "@/interfaces/CardData";
import type { ModalData } from "@/interfaces/ModalData";
import PopupsContext from "@/contexts/PopupsContext";

export function usePopupsState(): ModalData {
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

export function usePopups(): ModalData {
  return useContext(PopupsContext);
}
