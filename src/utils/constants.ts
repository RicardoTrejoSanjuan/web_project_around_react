import type { HeadersInit } from "../types/Api";

export const TOKEN = import.meta.env.VITE_API_TOKEN;
export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const HEADERS: HeadersInit = {
  authorization: TOKEN,
  "Content-Type": "application/json",
};
