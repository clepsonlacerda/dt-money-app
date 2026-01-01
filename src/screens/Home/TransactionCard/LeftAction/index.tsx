import { useBottomSheetContext } from "@/context/bottomsheet.context";
import { colors } from "@/shared/colors";
import { Transaction } from "@/shared/interfaces/transaction";
import { MaterialIcons } from "@expo/vector-icons";
import { FC } from "react";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { EditTransactionForm } from "./EditTransactionForm";

interface Params {
  transaction: Transaction;
}

export const LeftAction: FC<Params> = ({ transaction }) => {
  const { openBottomSheet } = useBottomSheetContext();

  return (
    <RectButton
      onPress={() => {
        openBottomSheet(<EditTransactionForm transaction={transaction} />, 1);
      }}
    >
      <View className="h-[140] bg-accent-blue-background-primary w-[80] rounded-l-[6] items-center justify-center">
        <MaterialIcons name="edit" color={colors.white} size={30} />
      </View>
    </RectButton>
  );
};
