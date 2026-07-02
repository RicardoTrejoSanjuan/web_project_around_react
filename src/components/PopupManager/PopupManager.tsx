import type { JSX } from "react";
import { usePopups } from "@/hooks/usePopups";
import ImagePopup from "@popup/ImagePopup/ImagePopup";
import Popup from "@popup/Popup";
import {
  popupConfig,
  type PopupConfig,
} from "@/components/PopupManager/popupConfig";

const PopupManager = (): JSX.Element => {
  const popups = usePopups();
  const popupsArray = popupConfig(popups);

  return (
    <>
      {popups.selectedCard && <ImagePopup />}

      {/* Popups Manager */}
      {popupsArray.map(
        ({ isOpen, title, className, onClose, content }: PopupConfig) =>
          isOpen && (
            <Popup
              key={title}
              title={title}
              className={className}
              onClose={onClose}
            >
              {content}
            </Popup>
          ),
      )}
    </>
  );
};

export default PopupManager;
