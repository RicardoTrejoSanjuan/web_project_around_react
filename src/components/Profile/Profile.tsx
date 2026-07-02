import type { JSX } from "react/jsx-runtime";
import { useUser } from "@/hooks/useUser";
import { usePopups } from "@/hooks/usePopups";

const Profile = (): JSX.Element | null => {
  const user = useUser();
  const popups = usePopups();

  const currentUser = user.currentUser;
  const onEditProfile = popups.setEditProfileOpen;
  const onAddPlace = popups.setAddPlaceOpen;
  const onEditAvatar = popups.setAvatarOpen;

  if (!currentUser) return null;

  return (
    <section className="profile page__section">
      {/* AVATAR */}
      <button
        className="profile__avatar-button"
        type="button"
        onClick={() => onEditAvatar(true)}
        aria-label="Editar avatar"
      >
        <img
          src={currentUser.avatar || "../assets/images/placeholder.jpg"}
          alt={currentUser.name || "Avatar"}
          className="profile__image"
        />
      </button>

      {/* INFO */}
      <div className="profile__info">
        <h1 className="profile__title">{currentUser.name}</h1>

        <button
          className="profile__edit-button"
          type="button"
          onClick={() => onEditProfile(true)}
          aria-label="Editar perfil"
        />

        <p className="profile__description">{currentUser.about}</p>
      </div>

      {/* ADD PLACE */}
      <button
        className="profile__add-button"
        type="button"
        onClick={() => onAddPlace(true)}
        aria-label="Agregar tarjeta"
      />
    </section>
  );
};

export default Profile;
