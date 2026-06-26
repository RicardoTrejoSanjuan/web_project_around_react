import Header from "./components/Header";
import CardList from "./components/CardList";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

import EditProfilePopup from "./components/Popup/EditProfilePopup";
import AddPlacePopup from "./components/Popup/AddPlacePopup";
import EditAvatarPopup from "./components/Popup/EditAvatarPopup";
import DeleteConfirmationPopup from "./components/Popup/DeleteConfirmationPopup";
import ImagePopup from "./components/Popup/ImagePopup";

import { useUser } from "./hooks/useUser";
import { useCards } from "./hooks/useCards";
import { usePopups } from "./hooks/usePopups";

import type { PopupsState } from "./types/Popups";
import type { JSX } from "react/jsx-runtime";
import type { UserState } from "./types/User";
import type { CardsState } from "./types/Card";

function App(): JSX.Element {
  const popups: PopupsState = usePopups();
  const user: UserState = useUser();
  const cards: CardsState = useCards();

  return (
    <div className="page__content">
      <Header />

      <main className="content">
        {/* PROFILE SECTION */}
        <Profile popups={popups} user={user} />

        {/* CARDS SECTION */}
        <section className="cards page__section">
          <CardList popups={popups} cardsState={cards} />
        </section>
      </main>

      <Footer />

      {/* IMAGE POPUP */}
      <ImagePopup
        card={popups.selectedCard}
        onClose={() => popups.setSelectedCard(null)}
      />

      {/* EDIT AVATAR */}
      {popups.isAvatarOpen && <EditAvatarPopup popups={popups} user={user} />}

      {/* EDIT PROFILE */}
      {popups.isEditProfileOpen && (
        <EditProfilePopup popups={popups} user={user} />
      )}

      {/* ADD PLACE */}
      {popups.isAddPlaceOpen && (
        <AddPlacePopup popups={popups} cardsState={cards} />
      )}

      {/* DELETE CONFIRMATION */}
      {popups.cardToDelete && (
        <DeleteConfirmationPopup popups={popups} cardsState={cards} />
      )}
    </div>
  );
}

export default App;
