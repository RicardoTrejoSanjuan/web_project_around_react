import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import EditProfilePopup from "./components/Popup/EditProfilePopup";
import AddPlacePopup from "./components/Popup/AddPlacePopup";
import EditAvatarPopup from "./components/Popup/EditAvatarPopup";
import DeleteConfirmationPopup from "./components/Popup/DeleteConfirmationPopup";
import ImagePopup from "./components/Popup/ImagePopup";

import { useUser } from "./hooks/useUser";
import { useCards } from "./hooks/useCards";
import { usePopups } from "./hooks/usePopups";

import type { PopupsState } from "./types/Popups";
import { useContext, type JSX } from "react";
import type { UserState } from "./types/User";
import type { CardsState } from "./types/Card";
import Popup from "./components/Popup/Popup";
import CurrentUserContext from "./src/contexts/CurrentUserContext";

function App(): JSX.Element {
  const popups: PopupsState = usePopups();
  const user: UserState = useUser();
  const cards: CardsState = useCards();
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="page__content">
        <Header />
        <Main popups={popups} user={user} cards={cards} />
        <Footer />
      </div>

      {/* IMAGE POPUP */}
      {popups.selectedCard && (
        <ImagePopup
          card={popups.selectedCard}
          onClose={() => popups.setSelectedCard(null)}
        />
      )}

      {/* EDIT AVATAR */}
      {popups.isAvatarOpen && (
        <Popup
          title="Editar foto de perfil"
          className="popup__content_edit-avatar"
          onClose={() => popups.setAvatarOpen(false)}
        >
          <EditAvatarPopup popups={popups} user={user} />
        </Popup>
      )}

      {/* EDIT PROFILE */}
      {popups.isEditProfileOpen && (
        <Popup
          title="Editar perfil"
          onClose={() => popups.setEditProfileOpen(false)}
        >
          <EditProfilePopup popups={popups} user={user} />
        </Popup>
      )}

      {/* ADD PLACE */}
      {popups.isAddPlaceOpen && (
        <Popup
          title="Nuevo lugar"
          onClose={() => popups.setAddPlaceOpen(false)}
        >
          <AddPlacePopup popups={popups} cardsState={cards} />
        </Popup>
      )}

      {/* DELETE CONFIRMATION */}
      {popups.cardToDelete && (
        <Popup
          title="¿Está seguro/a?"
          onClose={() => popups.setCardToDelete(null)}
          className="popup__content_with_confirmation"
        >
          <DeleteConfirmationPopup popups={popups} cardsState={cards} />
        </Popup>
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
