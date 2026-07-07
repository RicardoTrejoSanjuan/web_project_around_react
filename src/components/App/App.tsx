import type { JSX } from "react";

import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";

import PopupManager from "@/components/PopupManager/PopupManager";

import { CardsProvider } from "@/contexts/CardsProvider";
import { PopupsProvider } from "@/contexts/PopupsProvider";
import CurrentUserContext from "@/contexts/CurrentUserContext";
import { useUserState } from "@/hooks/useUser";

const AppContent = (): JSX.Element => {
  return (
    <div className="page__content">
      <Header />
      <Main />
      <Footer />
      <PopupManager />
    </div>
  );
};

const App = (): JSX.Element => {
  const userState = useUserState();

  return (
    <CurrentUserContext.Provider value={userState}>
      <CardsProvider>
        <PopupsProvider>
          <AppContent />
        </PopupsProvider>
      </CardsProvider>
    </CurrentUserContext.Provider>
  );
};

export default App;
