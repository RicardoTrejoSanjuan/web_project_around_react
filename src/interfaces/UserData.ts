export interface UserData {
  _id: string;
  name: string;
  about: string;
  avatar: string;
}

export interface UserState {
  currentUser: UserData | null;
  loading: boolean;
  updateUser: (name: string, about: string) => Promise<UserData>;
  updateAvatar: (avatar: string) => Promise<UserData>;
}
