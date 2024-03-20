import { Stack } from "expo-router";

export default function indexLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerSearchBarOptions: {
            hideNavigationBar: false,
            cancelButtonText: "Cancelar",
            placeholder: "Buscar barbearia",
          },
          headerStyle: {
            backgroundColor: "#555",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      >
        <Stack.Screen
          name="Auth/index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
