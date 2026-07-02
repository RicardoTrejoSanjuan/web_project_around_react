import { useState } from "react";
import { useFormValidation } from "@/hooks/useFormValidation";
import type { JSX } from "react/jsx-runtime";
import { usePopups } from "@/hooks/usePopups";
import { useUser } from "@/hooks/useUser";

const EditProfilePopup = (): JSX.Element => {
  const popups = usePopups();
  const user = useUser();

  const { currentUser, loading, updateUser } = user;
  const { setEditProfileOpen } = popups;

  const [name, setName] = useState<string>(() => currentUser?.name ?? "");
  const [about, setAbout] = useState<string>(() => currentUser?.about ?? "");

  const { errors, isValid, handleChange } = useFormValidation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    }

    if (name === "description") {
      setAbout(value);
    }

    handleChange(e);
  };

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    try {
      await updateUser(name, about);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = (): void => {
    setName("");
    setAbout("");
    setEditProfileOpen(false);
  };

  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      onSubmit={handleSubmit}
    >
      <input
        className={`popup__input ${
          errors.name ? "popup__input_type_error" : ""
        }`}
        value={name}
        onChange={handleInputChange}
        name="name"
        placeholder="Nombre"
        required
        minLength={2}
        maxLength={40}
        type="text"
      />
      {errors.name && <span className="popup__error">{errors.name}</span>}

      <input
        className={`popup__input ${
          errors.description ? "popup__input_type_error" : ""
        }`}
        value={about}
        onChange={handleInputChange}
        name="description"
        placeholder="Acerca de mí"
        required
        minLength={2}
        maxLength={200}
        type="text"
      />
      {errors.description && (
        <span className="popup__error">{errors.description}</span>
      )}

      <button
        className={`button popup__button ${!isValid && "popup__button_disabled"}`}
        type="submit"
        disabled={!isValid || loading}
      >
        {loading ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
};

export default EditProfilePopup;
