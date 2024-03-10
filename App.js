import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Auth from "./src/components/Auth/Index";
import Home from "./src/components/Home/Index";

// func para fechar o teclado
export default function App() {
  // const CloseKeyboard = ({ children }) => (
  //   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  //     {children}
  //   </TouchableWithoutFeedback>
  // );

  return (
    // <CloseKeyboard>
    <View style={styles.container}>
      <Home />
    </View>
    // </CloseKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#1D2D32",
  },
});
