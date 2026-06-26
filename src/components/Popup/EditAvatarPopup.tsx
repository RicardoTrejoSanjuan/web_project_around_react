import { useState, type JSX } from "react";
import Popup from "./Popup";
import { useFormValidation } from "../../hooks/useFormValidation";
import type { PopupsState } from "../../types/Popups";
import type { UserState } from "../../types/User";

interface Props {
  popups: PopupsState;
  user: UserState;
}

const EditAvatarPopup = ({ popups, user }: Props): JSX.Element => {
  const setAvatarOpen = popups.setAvatarOpen;
  const onUpdateAvatar = user.updateAvatar;

  const [avatar, setAvatar] = useState<string>("");
  const { errors, isValid, handleChange, resetValidation } =
    useFormValidation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAvatar(e.target.value);
    handleChange(e);
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      await onUpdateAvatar(avatar);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = (): void => {
    setAvatar("");
    resetValidation();
    setAvatarOpen(false);
  };

  return (
    <Popup
      title="Cambiar foto de perfil"
      onClose={handleClose}
      className="popup__content_edit-avatar"
    >
      <form
        className="popup__form"
        id="edit-avatar-form"
        onSubmit={handleSubmit}
      >
        <input
          className={`popup__input ${errors.avatar ? "popup__input_type_error" : ""}`}
          value={avatar}
          onChange={handleInputChange}
          name="avatar"
          placeholder="Enlace a la imagen"
          type="url"
          required
        />

        {errors.avatar && <span className="popup__error">{errors.avatar}</span>}

        <button
          className={`button popup__button popup__button_type_edit-avatar ${
            !isValid && "popup__button_disabled"
          }`}
          type="submit"
          disabled={!isValid || user.loading}
        >
          {user.loading ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </Popup>
  );
};

export default EditAvatarPopup;
