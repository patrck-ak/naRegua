import React, { useState } from "react";
import { Body } from "./styles";
import { InputForm, FormGroup, FormLabel, Group } from "../login/styles";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Sign() {
  const [userData, setUserData] = useState({
    user: "",
    name: "",
    email: "",
    cep: 0,
    password: "",
  });

  const debug = () => {
    return console.log(userData);
  };

  return (
    <Body>
      <SafeAreaView>
        <Button title="debug" onPress={debug} />
        <Group>
          {/* Nome */}
          <FormGroup>
            <FormLabel>Nome Completo</FormLabel>
            <InputForm
              textContentType="name"
              onChangeText={(e) => setUserData({ ...userData, user: e })}
            />
          </FormGroup>

          {/* Usuário */}
          <FormGroup>
            <FormLabel>Nome de Usuário</FormLabel>
            <InputForm
              textContentType="nickname"
              onChangeText={(e) => setUserData({ ...userData, name: e })}
            />
          </FormGroup>

          {/* Email */}
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <InputForm
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={(e) => setUserData({ ...userData, email: e })}
            />
          </FormGroup>

          {/* CEP */}
          <FormGroup>
            <FormLabel>CEP</FormLabel>
            <InputForm
              keyboardType="numeric"
              textContentType="postalCode"
              onChangeText={(e) => setUserData({ ...userData, cep: e })}
            />
          </FormGroup>
        </Group>
      </SafeAreaView>
    </Body>
  );
}
