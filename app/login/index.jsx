import React from "react";
import SocialSign from "../../src/components/SocialSign/index";
import axios from "axios";
import { url } from "../../src/config";
import {
  InputForm,
  FormCont,
  SubmitButton,
  FormLabel,
  FormGroup,
  ButtonBg,
  Group,
  Recover,
  RecoverLink,
  Body,
} from "./styles";
import { router } from "expo-router";
import { useState } from "react";

export default function Login() {
  var [user, setUser] = useState();
  var [pass, setPass] = useState();
  const handleLogin = async () => {
    axios
      .post(`${url}/auth`, {
        user: user,
        pass: pass,
      })
      .then((response) => {
        switch (response.data.status) {
          case 0:
            console.info("logado com sucesso!");
            break;
          case 1:
            console.warn(response.data.msg);
            break;
          default:
            console.log("caiu no default");
        }
      })
      .catch((err) => console.error(err));
    // return router.replace("home/");
  };

  return (
    <Body>
      <FormCont>
        <SocialSign />

        <Group>
          <FormGroup>
            <FormLabel>Usuário</FormLabel>
            <InputForm
              onChangeText={(value) => setUser(value)}
              textContentType="username"
              placeholder="@joão123"
              placeholderTextColor={"#8f8f8f"}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Senha</FormLabel>
            <InputForm
              onChangeText={(value) => setPass(value)}
              secureTextEntry={true}
              textContentType="password"
              placeholder="Senha"
              placeholderTextColor={"#8f8f8f"}
            />
          </FormGroup>
        </Group>

        <Group>
          <ButtonBg>
            <SubmitButton
              onPress={() => handleLogin()}
              color={"#fff"}
              title="Entrar"
            />
          </ButtonBg>
          <Recover>
            <RecoverLink>Esqueceu a senha?</RecoverLink>
          </Recover>
        </Group>
      </FormCont>
    </Body>
  );
}
