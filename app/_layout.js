import { Stack } from "expo-router";

export default function indexLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="auth/sign/index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="auth/login/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
