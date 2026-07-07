import CardList from "@/components/Card/CardList";
import Profile from "@/components/Profile/Profile";

const Main = () => {
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
