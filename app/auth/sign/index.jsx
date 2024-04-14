import React, { useState } from "react";
import { Body, NextButton } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { api } from "../../../src/api/api";
import {
  InputForm,
  FormGroup,
  FormLabel,
  Group,
  Button,
  TypeSelector,
} from "../login/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, Text } from "react-native";

export default function Sign() {
  const [apiResponse, setApiResponse] = useState();
  const [userData, setUserData] = useState({
    user: "",
    name: "",
    email: "",
    cep: 0,
    password: "",
    personId: 0,
    picture: "",
  });

  // Tratar dados enviados.
  const handleSign = () => {
    api
      .post("/auth/registerbyuser", { data: userData })
      .then(async (response) => {
        switch (response.data.status) {
          case 0:
            Alert.alert(response.data.title, response.data.msg);
            break;
          case 1:
            //ToDo welcome system
            break;
          default:
            console.log(response.data.msg);
        }
      });
  };

  return (
    <Body>
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
          <FormLabel>Usuário</FormLabel>
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

          <NextButton onPress={() => console.log("oi")}>
            <Group>
              <Text style={{ alignItems: "center" }}>
                Próximo
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="black"
                />
              </Text>
            </Group>
          </NextButton>
        </FormGroup>
      </Group>
    </Body>
  );
}
