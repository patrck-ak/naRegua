import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import SocialSign from "../../../src/components/SocialSign";
import { Alert, Image, Text, View } from "react-native";
import { Body, Button, FormGroup, FormLabel, Group, InputForm } from "./styles";
import { api } from "../../../src/api/api";

export default function Login() {
  // redirect pra cadastro
  const handleSign = () => {
    console.log("sign");
    return router.navigate("sign/");
  };

  // login via usuario
  const handleLogin = async () => {
    api
      .post(`/auth`, {
        user: user,
        pass: pass,
      })
      .then((res) => {
        switch (res.data.status) {
          case 0:
            router.replace("home/");
            break;
          case 1:
            Alert.alert("Erro", res.data.msg);
            break;
          default:
            console.log("caiu no default");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <Body>
      {/* Cadastro */}
      <Group>
        <Button onPress={handleSign}>
          <View
            style={{
              gap: "20px",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "600", color: "#153944" }}>
              Cadastre-Se
            </Text>
            <FontAwesome5 name="angle-right" size={20} color="#153944" />
          </View>
        </Button>
      </Group>
      {/* Cadastro */}

      {/* Login Form */}
      <Group>
        <FormGroup>
          <FormLabel>Usuário: </FormLabel>
          <InputForm
            placeholder="@joão123"
            placeholderTextColor={"#00000050"}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Senha: </FormLabel>
          <InputForm
            secureTextEntry
            placeholder="*********"
            placeholderTextColor={"#00000050"}
          />
        </FormGroup>
        <Button>
          <Text
            style={{
              fontWeight: "600",
              color: "#153944",
            }}
          >
            Entrar
          </Text>
        </Button>
      </Group>
      <SocialSign />
      {/* Formulário */}
      <Image
        source={{ uri: "https://i.imgur.com/2I9ygcD.png" }}
        style={{
          height: 80,
          width: 300,
          position: "relative",
          top: 200,
          alignSelf: "center",
        }}
      />
    </Body>
  );
}
