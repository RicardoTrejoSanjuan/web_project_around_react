import type { JSX } from "react";

import type { ModalData } from "@/interfaces/ModalData";
import EditAvatarPopup from "../Main/components/popup/EditAvatar/EditAvatarPopup";
import EditProfilePopup from "../Main/components/popup/EditProfile/EditProfilePopup";
import NewCardPopup from "../Main/components/popup/NewCard/NewCardPopup";
import RemoveCardPopup from "../Main/components/popup/RemoveCard/RemoveCardPopup";

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
