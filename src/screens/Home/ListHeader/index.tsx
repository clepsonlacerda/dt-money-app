import { AppHeader } from "@/components/AppHeader";
import { ScrollView, Text, View } from "react-native";

export const ListHeader = () => {
  return (
    <>
      <AppHeader />

      <View className="h-[150] w-full">
        <View className="h-[50] bg-background-primary" />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="absolute pl-6 h-[141]"
        >
          <Text>Categoria 1</Text>
          <Text>Categoria 2</Text>
          <Text>Categoria 3</Text>
          <Text>Categoria 4</Text>
          <Text>Categoria 5</Text>
          <Text>Categoria 6</Text>
        </ScrollView>
      </View>
    </>
  );
};
