import Popup from "./Popup";
import type { JSX } from "react/jsx-runtime";
import type { CardsState } from "../../types/Card";
import type { PopupsState } from "../../types/Popups";

interface Props {
  popups: PopupsState;
  cardsState: CardsState;
}

const DeleteConfirmationPopup = ({
  popups,
  cardsState,
}: Props): JSX.Element => {
  const { setCardToDelete, cardToDelete } = popups;
  const { deleteCard, loading } = cardsState;

  const onClose = (): void => setCardToDelete(null);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    await deleteCard(cardToDelete!._id);
    setCardToDelete(null);
  };

  return (
    <Popup
      title="¿Está seguro/a?"
      onClose={onClose}
      className="popup__content_with_confirmation"
    >
      <form className="popup__form" id="delete-form">
        <button
          className="button popup__button popup__button_type_delete"
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Eliminando..." : "Sí"}
        </button>
      </form>
    </Popup>
  );
};

export default DeleteConfirmationPopup;
