import { useAuthContext } from "@/context/auth.context";
import { colors } from "@/shared/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const AppHeader = () => {
  const { handleLogout } = useAuthContext();

  return (
    <View className="w-full flex-row p-8 justify-between">
      <View>
        {/* <Image
          source={require("@/assets/images/Logo.png")}
          className="w-[130px] h-[30px]"
        /> */}

        <TouchableOpacity
          className="flex-row items-center gap-2 mt-2"
          onPress={handleLogout}
        >
          <MaterialIcons name="logout" color={colors.gray["700"]} size={15} />

          <Text className="text-gray-700 text-base">Sair da conta</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="bg-accent-brand w-[130px] items-center justify-center rounded-xl h-[50px]">
        <Text className="text-white font-bold text-sm">Nova Transação</Text>
      </TouchableOpacity>
    </View>
  );
};
