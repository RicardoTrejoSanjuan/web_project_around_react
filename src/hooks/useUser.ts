import { useEffect, useState, useContext } from "react";
import type { UserData, UserState } from "@/interfaces/UserData";
import { api } from "@/utils/api";
import CurrentUserContext from "@/contexts/CurrentUserContext";

export function useUserState(): UserState {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
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

  const updateUser = (name: string, about: string): Promise<UserData> => {
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

  const updateAvatar = (avatar: string): Promise<UserData> => {
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

export function useUser(): UserState {
  return useContext(CurrentUserContext);
}
