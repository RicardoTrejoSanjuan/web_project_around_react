import { createContext } from "react";
import type { CardsState } from "@/interfaces/CardData";

const CardsContext = createContext<CardsState>({} as CardsState);

export default CardsContext;
