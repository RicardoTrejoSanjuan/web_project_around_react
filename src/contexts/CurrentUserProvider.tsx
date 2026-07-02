import { type ReactNode } from "react";
import { useUserState } from "@/hooks/useUser";
import CurrentUserContext from "@/contexts/CurrentUserContext";

export function CurrentUserProvider({ children }: { children: ReactNode }) {
  const userState = useUserState();

  return (
    <CurrentUserContext.Provider value={userState}>
      {children}
    </CurrentUserContext.Provider>
  );
}
