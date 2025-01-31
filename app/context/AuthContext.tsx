import { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/auth/authService";
import { UserCredentials } from "../types/types";
import { User } from "firebase/auth";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (credentials: UserCredentials) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await authService.getCurrentUser();
        setUser(userData);
      } catch (error) {
        setUser(null);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (credentials: UserCredentials) => {
    try {
      const userData = await authService.login(credentials);
      setUser(userData);
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error, e.g., show an error message to the user
      throw error;
    }
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
