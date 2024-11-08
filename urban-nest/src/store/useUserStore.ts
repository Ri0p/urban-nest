import { create } from "zustand";

interface UserState {
  user: any;
  setUser: (user: any) => void;
  token: string | null;
  setToken: (token: string | null) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
}));

export default useUserStore;

