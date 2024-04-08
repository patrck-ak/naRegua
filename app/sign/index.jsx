import React from "react";
import { Body } from "./styles";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Sign() {
  return (
    <Body>
      <SafeAreaView>
        <Text>Teste</Text>
      </SafeAreaView>
    </Body>
  );
}
