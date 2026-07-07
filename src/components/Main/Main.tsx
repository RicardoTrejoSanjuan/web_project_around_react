import type { JSX } from "react/jsx-runtime";
import Profile from "@/components/Profile/Profile";
import CardList from "@/components/Main/components/Card/CardList";
import CurrentUserContext from "@/contexts/CurrentUserContext";
import Popup from "@/components/Main/components/popup/Popup";
import { useContext } from "react";

const Main = (): JSX.Element => {
  const currentUser = useContext(CurrentUserContext);
  console.log("currentUser: ", currentUser);
  const shouldShowPopup = false;

  return (
    <main className="content">
      {/* PROFILE SECTION */}
      <Profile />

      {/* CARDS SECTION */}
      <section className="cards page__section">
        <CardList />
      </section>
      {shouldShowPopup && (
        <Popup onClose={() => {}} title="soy un titulo">
          <p>Soy un popup mock para las pruebas automaticas</p>
        </Popup>
      )}
    </main>
  );
};

export default Main;
