import { Stack } from "expo-router";

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
        name="sign/index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
