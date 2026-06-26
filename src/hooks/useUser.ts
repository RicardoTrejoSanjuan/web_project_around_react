import { useEffect, useState } from "react";
import type { User, UserState } from "../types/User";
import { api } from "../services/api";

export function useUser(): UserState {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      try {
        setLoading(true);
        const user = await api.getUserInfo();
        setCurrentUser(user);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const updateUser = (name: string, about: string): Promise<User> => {
    setLoading(true);
    return api
      .updateProfile(name, about)
      .then((user) => {
        setCurrentUser(user);
        return user;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateAvatar = (avatar: string): Promise<User> => {
    setLoading(true);
    return api
      .updateAvatar(avatar)
      .then((user) => {
        setCurrentUser(user);
        return user;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    currentUser,
    loading,
    updateUser,
    updateAvatar,
  };
}
