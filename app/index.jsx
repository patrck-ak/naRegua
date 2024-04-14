import { router } from "expo-router";
import React, { useEffect } from "react";
import { Body } from "./styles";
import { Button, SafeAreaView, Text } from "react-native";

export default function Index() {
  // redirect pra cadastro
  const handleSign = () => {
    return router.navigate("/auth/sign/");
  };
  const handleLogin = () => {
    return router.navigate("/auth/login/");
  };

  return (
    <Body>
      <Button title="sign" onPress={() => handleSign()} />
      <Button title="login" onPress={() => handleLogin()} />
      <SafeAreaView>
        <Text>View</Text>
      </SafeAreaView>
    </Body>
  );
}
