import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";

import PopupManager from "@/components/PopupManager/PopupManager";

import type { JSX } from "react";

import { CardsProvider } from "@/contexts/CardsProvider";
import { CurrentUserProvider } from "@/contexts/CurrentUserProvider";
import { PopupsProvider } from "@/contexts/PopupsProvider";

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
  return (
    <CurrentUserProvider>
      <CardsProvider>
        <PopupsProvider>
          <AppContent />
        </PopupsProvider>
      </CardsProvider>
    </CurrentUserProvider>
  );
};

export default App;
