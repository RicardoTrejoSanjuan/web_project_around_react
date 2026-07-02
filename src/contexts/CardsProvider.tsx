import type { ReactNode } from "react";
import CardsContext from "@/contexts/CardsContext";
import { useCardsState } from "@/hooks/useCards";

export function CardsProvider({ children }: { children: ReactNode }) {
  const cardsState = useCardsState();

  return (
    <CardsContext.Provider value={cardsState}>{children}</CardsContext.Provider>
  );
}
