import { createContext } from "react";
import type { UserState } from "@/interfaces/UserData";

const CurrentUserContext = createContext<UserState>({} as UserState);

export default CurrentUserContext;
