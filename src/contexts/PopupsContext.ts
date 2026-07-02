import { createContext } from "react";
import type { ModalData } from "@/interfaces/ModalData";

const PopupsContext = createContext<ModalData>({} as ModalData);

export default PopupsContext;
