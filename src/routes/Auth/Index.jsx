import React from "react";
import {
  InputForm,
  FormCont,
  SubmitButton,
  FormLabel,
  FormGroup,
  ButtonBg,
  Group,
} from "./Styles";
import { Button, Text } from "react-native";
import OAuth from "../../components/oauth";

function Auth() {
  return (
    <FormCont>
      <OAuth />
      <Group>
        <FormGroup>
          <FormLabel>Usuário</FormLabel>
          <InputForm
            textContentType="username"
            placeholder="@joão123"
            placeholderTextColor={"#8f8f8f"}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Senha</FormLabel>
          <InputForm
            secureTextEntry={true}
            textContentType="password"
            placeholder="Senha"
            placeholderTextColor={"#8f8f8f"}
          />
        </FormGroup>
      </Group>
      <ButtonBg>
        <SubmitButton color={"#fff"} title="Entrar" />
      </ButtonBg>
    </FormCont>
  );
}

export default Auth;
