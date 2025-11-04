import { useBottomSheetContext } from "@/context/bottomsheet.context";
import { colors } from "@/shared/colors";
import { CreateTransactionInterface } from "@/shared/interfaces/https/create-transaction-request";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";

export const NewTransaction = () => {
  const { closeBottomSheet } = useBottomSheetContext();

  const [transaction, setTransaction] = useState<CreateTransactionInterface>({
    categoryId: 0,
    description: "",
    typeId: 0,
    value: 0,
  });

  return (
    <View className="px-8 py-5">
      <TouchableOpacity
        onPress={closeBottomSheet}
        className="w-full flex-row items-center justify-between"
      >
        <Text className="text-white text-xl font-bold">Nova transação</Text>
        <MaterialIcons name="close" color={colors.gray["700"]} size={20} />
      </TouchableOpacity>
    </View>
  );
};
