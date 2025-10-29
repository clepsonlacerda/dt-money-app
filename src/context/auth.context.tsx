import { FormLoginParams } from "@/screens/Login/LoginForm";
import { FormRegisterParams } from "@/screens/Register/RegisterForm";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import * as authService from "@/shared/serives/dt-money/auth.service";
import { IUser } from "@/shared/interfaces/user-interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IAuthenticateResponse } from "@/shared/interfaces/https/authenticate-response";

type AuthContext = {
  user: IUser | null;
  token: string | null;
  handleAuthenticate: (params: FormLoginParams) => Promise<void>;
  handleRegister: (params: FormRegisterParams) => Promise<void>;
  handleLogout: () => void;
  restoreUserSession: () => Promise<string | null>;
};

export const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleAuthenticate = async (userData: FormLoginParams) => {
    const { user, token } = await authService.authenticate(userData);

    await AsyncStorage.setItem(
      "dt-money-user",
      JSON.stringify({ user, token })
    );

    setUser(user);
    setToken(token);
  };

  const handleRegister = async (formData: FormRegisterParams) => {
    const { user, token } = await authService.registerUser(formData);

    await AsyncStorage.setItem(
      "dt-money-user",
      JSON.stringify({ user, token })
    );

    setUser(user);
    setToken(token);
  };

  const handleLogout = async () => {
    await AsyncStorage.clear();

    setUser(null);
    setToken(null);
  };

  const restoreUserSession = async (): Promise<string | null> => {
    const useData = await AsyncStorage.getItem("dt-money-user");

    if (useData) {
      const { user, token } = JSON.parse(useData) as IAuthenticateResponse;

      setUser(user);
      setToken(token);
    }

    return useData;
  };

  return (
    <AuthContext.Provider
      value={{
        handleAuthenticate,
        handleRegister,
        handleLogout,
        user,
        token,
        restoreUserSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
