import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  reset: () => set({ user: null }),
  logout: () =>
    set(({ user }) => ({ user: { ...user, isAuthenticated: false } })),
  login: () =>
    set(({ user }) => ({ user: { ...user, isAuthenticated: true } })),
  setUser: (email, password) =>
    set({
      user: {
        email,
        password,
      },
    }),
}));
