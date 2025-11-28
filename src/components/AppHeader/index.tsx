import { useAuthContext } from "@/context/auth.context";
import { useBottomSheetContext } from "@/context/bottomsheet.context";
import { colors } from "@/shared/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { NewTransaction } from "../NewTransaction";

export const AppHeader = () => {
  const { handleLogout } = useAuthContext();
  const { openBottomSheet } = useBottomSheetContext();
  return (
    <View className="w-full flex-row p-8 justify-between bg-background-primary">
      <View>
        <View className="w-[130px] h-[30px]">
          <Image
            source={require("@/assets/images/Logo.png")}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <TouchableOpacity
          className="flex-row items-center gap-2 mt-2"
          onPress={handleLogout}
        >
          <MaterialIcons name="logout" color={colors.gray["700"]} size={15} />

          <Text className="text-gray-700 text-base">Sair da conta</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          openBottomSheet(<NewTransaction />, 0);
        }}
        className="bg-accent-brand w-[130px] items-center justify-center rounded-xl h-[50px]"
      >
        <Text className="text-white font-bold text-sm">Nova Transação</Text>
      </TouchableOpacity>
    </View>
  );
};
