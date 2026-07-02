import type { HeadersInit } from "@/interfaces/Api";
import type { CardData } from "@/interfaces/CardData";
import type { UserData } from "@/interfaces/UserData";
import { BASE_URL, HEADERS } from "@/utils/constants";

/**
 * Handles communication with the REST API.
 */
export class Api {
  private baseUrl: string;
  private headers: HeadersInit;

  /**
   * Creates a new API client instance.
   *
   * @param config - API configuration.
   */
  constructor(baseUrl: string, headers: HeadersInit) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  /**
   * Performs an API request with error handling.
   *
   * @param endpoint - API endpoint.
   * @param options - Fetch options.
   * @returns Promise with the response data.
   */
  private async request<T>(
    endpoint: string,
    options?: RequestInit,
  ): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: this.headers,
      ...options,
    });

    if (!response.ok) {
      throw new Error(
        `Request failed (${response.status}): ${response.statusText}`,
      );
    }

    // DELETE endpoints often return 204 No Content.
    if (response.status === 204) {
      return undefined as T;
    }

    return response.json() as Promise<T>;
  }

  /**
   * Retrieves user profile information.
   *
   * @returns Promise with user information.
   */
  public getUserInfo(): Promise<UserData> {
    return this.request<UserData>("/users/me");
  }

  /**
   * Retrieves initial card data.
   *
   * @returns Promise with an array of card data.
   */
  public getInitialCards(): Promise<CardData[]> {
    return this.request<CardData[]>("/cards");
  }

  /**
   * Updates user information.
   *
   * @param user - User data to update.
   * @returns Promise with updated user information.
   */
  public updateProfile(name: string, about: string): Promise<UserData> {
    return this.request<UserData>("/users/me", {
      method: "PATCH",
      body: JSON.stringify({
        name,
        about,
      }),
    });
  }

  /**
   * Creates a new card.
   *
   * @param data - Card data.
   * @returns Promise with the created card.
   */
  public createCard(name: string, link: string): Promise<CardData> {
    return this.request<CardData>("/cards", {
      method: "POST",
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }

  /**
   * Deletes a card.
   *
   * @param cardId - Card ID to delete.
   * @returns Promise with no return value.
   */
  public deleteCard(cardId: string): Promise<void> {
    return this.request<void>(`/cards/${cardId}`, {
      method: "DELETE",
    });
  }

  /**
   * Likes a card.
   *
   * @param cardId - Card ID to like.
   * @returns Promise with the card data.
   */
  private likeCard(cardId: string): Promise<CardData> {
    return this.request<CardData>(`/cards/${cardId}/likes`, {
      method: "PUT",
    });
  }

  /**
   * Unlikes a card.
   *
   * @param cardId - Card ID to unlike.
   * @returns Promise with the card data.
   */
  private unlikeCard(cardId: string): Promise<CardData> {
    return this.request<CardData>(`/cards/${cardId}/likes`, {
      method: "DELETE",
    });
  }

  /**
   * Toggles the like status of a card.
   *
   * @param cardId Card identifier.
   * @param isLiked Whether the current user already likes the card.
   */
  public changeLikeStatus(cardId: string, isLiked: boolean): Promise<CardData> {
    return isLiked ? this.unlikeCard(cardId) : this.likeCard(cardId);
  }

  /**
   * Edits the user's avatar.
   *
   * @param avatar - User avatar data.
   * @returns Promise with updated user information.
   */
  public updateAvatar(avatar: string): Promise<UserData> {
    return this.request<UserData>("/users/me/avatar", {
      method: "PATCH",
      body: JSON.stringify({
        avatar,
      }),
    });
  }
}

export const api = new Api(BASE_URL, HEADERS);
