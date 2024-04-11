import { router } from "expo-router";
import React, { useEffect } from "react";
import { Body } from "./styles";
import { SafeAreaView, Text } from "react-native";

export default function Login() {
  // redirect pra cadastro
  const handleSign = () => {
    console.log("sign");
    return router.navigate("sign/");
  };

  // checar sessão
  const checkSession = () => {
    return true;
  };

  useEffect(() => {
    if (checkSession) {
      router.replace("/homepage");
    } else {
      router.replace("/auth/login");
    }
  }, []);

  return (
    <Body>
      <SafeAreaView>
        <Text>View</Text>
      </SafeAreaView>
    </Body>
  );
}
