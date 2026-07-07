import type { JSX } from "react";

import type { ModalData } from "@/interfaces/ModalData";
import EditAvatar from "../Main/components/popup/EditAvatar/EditAvatar";
import EditProfile from "../Main/components/popup/EditProfile/EditProfile";
import NewCard from "../Main/components/popup/NewCard/NewCard";
import RemoveCard from "../Main/components/popup/RemoveCard/RemoveCard";

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
    content: <EditAvatar />,
  },
  {
    isOpen: popups.isEditProfileOpen,
    title: "Editar perfil",
    onClose: () => popups.setEditProfileOpen(false),
    content: <EditProfile />,
  },
  {
    isOpen: popups.isAddPlaceOpen,
    title: "Nuevo lugar",
    onClose: () => popups.setAddPlaceOpen(false),
    content: <NewCard />,
  },
  {
    isOpen: !!popups.cardToDelete,
    title: "¿Está seguro/a?",
    className: "popup__content_with_confirmation",
    onClose: () => popups.setCardToDelete(null),
    content: <RemoveCard />,
  },
];
