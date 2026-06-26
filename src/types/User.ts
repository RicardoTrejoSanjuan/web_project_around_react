export interface User {
  _id: string;
  name: string;
  about: string;
  avatar: string;
}

export interface UserState {
  currentUser: User | null;
  loading: boolean;
  updateUser: (name: string, about: string) => Promise<User>;
  updateAvatar: (avatar: string) => Promise<User>;
}
