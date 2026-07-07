import type { JSX } from "react";

import EditAvatarPopup from "@/components/Main/components/EditAvatar/EditAvatarPopup";
import EditProfilePopup from "@/components/Main/components/EditProfile/EditProfilePopup";
import NewCardPopup from "@/components/Main/components/NewCard/NewCardPopup";
import RemoveCardPopup from "@/components/Main/components/RemoveCard/RemoveCardPopup";

import type { ModalData } from "@/interfaces/ModalData";

export interface PopupConfig {
  isOpen: boolean;
  title: string;
  className?: string;
  onClose: () => void;
  content: JSX.Element;
}

export const popupConfig = (popups: ModalData): PopupConfig[] => [
  {
    isOpen: popups.isAvatarOpen,
    title: "Editar foto de perfil",
    className: "popup__content_edit-avatar",
    onClose: () => popups.setAvatarOpen(false),
    content: <EditAvatarPopup />,
  },
  {
    isOpen: popups.isEditProfileOpen,
    title: "Editar perfil",
    onClose: () => popups.setEditProfileOpen(false),
    content: <EditProfilePopup />,
  },
  {
    isOpen: popups.isAddPlaceOpen,
    title: "Nuevo lugar",
    onClose: () => popups.setAddPlaceOpen(false),
    content: <NewCardPopup />,
  },
  {
    isOpen: !!popups.cardToDelete,
    title: "¿Está seguro/a?",
    className: "popup__content_with_confirmation",
    onClose: () => popups.setCardToDelete(null),
    content: <RemoveCardPopup />,
  },
];
