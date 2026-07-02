import { createContext } from "react";
import type { CurrentUserContextType } from "../../types/User";

const CurrentUserContext = createContext<CurrentUserContextType>(
  {} as CurrentUserContextType,
);

export default CurrentUserContext;
