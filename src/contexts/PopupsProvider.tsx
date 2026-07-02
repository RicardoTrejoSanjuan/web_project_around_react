import { type ReactNode } from "react";
import PopupsContext from "./PopupsContext";
import { usePopupsState } from "@/hooks/usePopups";

export function PopupsProvider({ children }: { children: ReactNode }) {
  const popupsState = usePopupsState();

  return (
    <PopupsContext.Provider value={popupsState}>
      {children}
    </PopupsContext.Provider>
  );
}
