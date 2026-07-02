import type { CardsState } from "../../types/Card";
import type { PopupsState } from "../../types/Popups";
import type { UserState } from "../../types/User";
import CardList from "../Card/CardList";
import Profile from "../Profile/Profile";

interface MainProps {
  popups: PopupsState;
  user: UserState;
  cards: CardsState;
}

const Main = ({ popups, user, cards }: MainProps) => {
  return (
    <main className="content">
      {/* PROFILE SECTION */}
      <Profile popups={popups} user={user} />

      {/* CARDS SECTION */}
      <section className="cards page__section">
        <CardList popups={popups} cardsState={cards} />
      </section>
    </main>
  );
};

export default Main;
