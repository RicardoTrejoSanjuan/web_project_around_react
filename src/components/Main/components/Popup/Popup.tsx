import { useEffect, type JSX, type ReactNode } from "react";

interface PopupProps {
  title?: string;
  className?: string;
  onClose: () => void;
  children: ReactNode;
}

const Popup = ({
  title,
  className = "",
  onClose,
  children,
}: PopupProps): JSX.Element => {
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
      className="popup popup_is-opened"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={`popup__content ${className}`}>
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
          aria-label="Cerrar ventana emergente"
        />

        {title && <h3 className="popup__title">{title}</h3>}

        {children}
      </div>
    </div>
  );
};

export default Popup;
