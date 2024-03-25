import { Slot, Stack } from "expo-router";
import { View } from "react-native";

export default function indexLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#555",
        },
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      {/*    */}
      <Stack.Screen
        name="login/index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
