import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Route() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>BARBEIRO ID: {id} </Text>
    </View>
  );
}
