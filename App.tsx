import NavigationRoutes from "@/routes";
import { Login } from "./src/screens/Login";
import "./src/styles/global.css";
import { AuthContextProvider } from "@/context/auth.context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SnackbarContextProvider } from "@/context/snackbar.context";
import { Snackbar } from "@/components/Snackbar";
import { BottomSheetProvider } from "@/context/bottomsheet.context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  {
    /* SafeAreaProvider add para funcionar na web */
  }
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView className="flex-1">
        <SnackbarContextProvider>
          <AuthContextProvider>
            <BottomSheetProvider>
              <NavigationRoutes />
              <Snackbar />
            </BottomSheetProvider>
          </AuthContextProvider>
        </SnackbarContextProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
