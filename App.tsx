import NavigationRoutes from "@/routes";
import { Login } from "./src/screens/Login";
import "./src/styles/global.css";
import { AuthContextProvider } from "@/context/auth.context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SnackbarContextProvider } from "@/context/snackbar.context";
import { Snackbar } from "@/components/Snackbar";

export default function App() {
  return (
    <SnackbarContextProvider>
      <AuthContextProvider>
        {/* SafeAreaProvider add para funcionar na web */}
        <SafeAreaProvider>
          <NavigationRoutes />
          <Snackbar />
        </SafeAreaProvider>
      </AuthContextProvider>
    </SnackbarContextProvider>
  );
}
