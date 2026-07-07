import type { JSX } from "react/jsx-runtime";
import { usePopups } from "@/hooks/usePopups";
import { useCards } from "@/hooks/useCards";

const RemoveCard = (): JSX.Element => {
  const popups = usePopups();
  const cardsState = useCards();

  const { setCardToDelete, cardToDelete } = popups;
  const { deleteCard, loading } = cardsState;

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    await deleteCard(cardToDelete!._id);
    setCardToDelete(null);
  };

  return (
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
  );
};

export default RemoveCard;
