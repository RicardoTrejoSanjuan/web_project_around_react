import { useEffect } from "react";
import type { JSX } from "react/jsx-runtime";
import type { CardData } from "../../types/Card";

interface Props {
  card: CardData | null;
  onClose: () => void;
}

const ImagePopup = ({ card, onClose }: Props): JSX.Element => {
  useEffect(() => {
    const handleEscClose = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [onClose]);

  return (
    <div
      className={`popup ${card ? "popup_is-opened" : ""}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="popup__content popup__content_content_image">
        <button className="popup__close" type="button" onClick={onClose} />

        {card && (
          <>
            <img src={card.link} alt={card.name} className="popup__image" />

            <p className="popup__caption">{card.name}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ImagePopup;
