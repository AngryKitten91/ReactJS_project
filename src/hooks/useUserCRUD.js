import { useUserStore } from "../store/useUser";

export const useUserCRUD = () => {
  const logout = useUserStore((state) => state.logout);
  const setUser = useUserStore((state) => state.setUser);
  const login = useUserStore((state) => state.login);
  const user = useUserStore((state) => state.user);
  const reset = useUserStore((state) => state.reset);

  return { logout, setUser, user, login, reset };
};
