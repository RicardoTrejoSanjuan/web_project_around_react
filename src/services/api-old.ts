import { BASE_URL, HEADERS } from "../utils/constants";
import type { HeadersInit } from "../types/Api";

class Api {
  private _baseUrl: string;
  private _headers: HeadersInit;

  constructor(baseUrl: string, headers: HeadersInit) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  private _checkResponse(res: Response) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }

    return res.json();
  }

  public getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  updateProfile(name: string, about: string) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._checkResponse);
  }

  updateAvatar(avatar: string) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._checkResponse);
  }

  addCard(name: string, link: string) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(cardId: string) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  likeCard(cardId: string) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  unlikeCard(cardId: string) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(cardId: string, isLiked: boolean) {
    return isLiked ? this.unlikeCard(cardId) : this.likeCard(cardId);
  }
}

export const api = new Api(BASE_URL, HEADERS);
