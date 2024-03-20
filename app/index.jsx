import React from "react";
import { Body } from "./styles";
import { Link, router } from "expo-router";
import { Button } from "react-native";

export default function index() {
  const handleRedirect = (choice) => {
    switch (choice) {
      case "login":
        router.replace("/auth/index");
        break;
      case "sign":
        router.replace("/sign/index");
    }
  };
  return (
    <>
      <Body>
        <Button title="Entrar" onPress={handleRedirect("login")} />
        <Button title="Cadastro" onPress={handleRedirect("sign")} />
      </Body>
    </>
  );
}
