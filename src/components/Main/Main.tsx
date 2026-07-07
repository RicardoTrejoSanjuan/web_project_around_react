import type { JSX } from "react/jsx-runtime";
import Profile from "@/components/Profile/Profile";
import CardList from "@/components/Card/CardList";

const Main = (): JSX.Element => {
  return (
    <main className="content">
      {/* PROFILE SECTION */}
      <Profile />

      {/* CARDS SECTION */}
      <section className="cards page__section">
        <CardList />
      </section>
    </main>
  );
};

export default Main;
