import type { UserData } from "./UserData";

export interface CurrentUserContextType {
  currentUser: UserData | null;
}
