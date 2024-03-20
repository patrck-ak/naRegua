import React from "react";
import SocialSign from "../../../src/components/SocialSign/index";
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
} from "./styles";
import { CheckBox, Text } from "react-native";

export default function Sign() {
  return (
    <>
      <FormCont>
        <SocialSign />

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

        <Group>
          <ButtonBg>
            <SubmitButton color={"#fff"} title="Entrar" />
          </ButtonBg>
          <Recover>
            <RecoverLink>Esqueceu a senha?</RecoverLink>
          </Recover>
        </Group>
      </FormCont>
    </>
  );
}
