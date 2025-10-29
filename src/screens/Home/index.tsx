import { useAuthContext } from "@/context/auth.context";
import { Text, TouchableOpacity, View } from "react-native";

export const Home = () => {
  const { handleLogout } = useAuthContext();

  return (
    <View className="flex-1 items-center justify-center bg-green-700">
      <Text>Home Screen</Text>

      <TouchableOpacity
        onPress={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 rounded"
      >
        <Text className="text-white">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
