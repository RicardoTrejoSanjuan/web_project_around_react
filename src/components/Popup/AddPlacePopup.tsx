import { useState, type JSX } from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import type { PopupsState } from "../../types/Popups";
import type { CardsState } from "../../types/Card";

interface Props {
  popups: PopupsState;
  cardsState: CardsState;
}

const AddPlacePopup = ({ popups, cardsState }: Props): JSX.Element => {
  const setAddPlaceOpen = popups.setAddPlaceOpen;
  const { addCard, loading } = cardsState;

  const [place, setPlace] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const { errors, isValid, handleChange, resetValidation } =
    useFormValidation();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;

    if (name === "place") {
      setPlace(value);
    }

    if (name === "link") {
      setLink(value);
    }

    handleChange(event);
  };

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    await addCard(place, link);
    handleClose();
  };

  const handleClose = (): void => {
    setAddPlaceOpen(false);
    setPlace("");
    setLink("");
    resetValidation();
  };

  return (
    <form className="popup__form" id="new-card-form" onSubmit={handleSubmit}>
      <input
        className={`popup__input ${
          errors.place ? "popup__input_type_error" : ""
        }`}
        value={place}
        onChange={handleInputChange}
        name="place"
        placeholder="Título"
        required
        minLength={2}
        maxLength={30}
        type="text"
      />
      {errors.place && <span className="popup__error">{errors.place}</span>}

      <input
        className={`popup__input ${
          errors.link ? "popup__input_type_error" : ""
        }`}
        value={link}
        onChange={handleInputChange}
        name="link"
        placeholder="Enlace a la imagen"
        required
        type="url"
      />
      {errors.link && <span className="popup__error">{errors.link}</span>}
      <button
        className={`button popup__button ${!isValid && "popup__button_disabled"}`}
        type="submit"
        disabled={!isValid || loading}
      >
        {loading ? "Creando..." : "Crear"}
      </button>
    </form>
  );
};

export default AddPlacePopup;
