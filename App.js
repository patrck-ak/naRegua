import { StyleSheet, View, Text } from "react-native";
import Auth from "./src/routes/Auth/Index";

export default function App() {
  return (
    <View style={styles.container}>
      <Auth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D2D32",
  },
});
