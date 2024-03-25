import styled from "styled-components/native";

// body
export const Body = styled.View`
  background: #153944;
  width: 100%;
  height: 100%;
`;

// container geral
export const FormCont = styled.View`
  gap: 5px;
  margin: auto;
  padding: 10px;
  height: 450px;
  max-width: 300px;
  min-width: 300px;
  display: flex;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 5px 20px #00000050;
`;

// Recover
export const Recover = styled.View`
  padding: 15px;
  margin: 0 auto;
  position: relative;
  bottom: 20px;
`;

export const RecoverLink = styled.Text``;

// label
export const FormLabel = styled.Text`
  padding-left: 13px;
  font-weight: 500;
`;

// grupo de inputs
export const Group = styled.View`
  padding-top: 20px;
  gap: 15px;
`;

// entrada de texto
export const InputForm = styled.TextInput`
  box-shadow: 0 15px 10px #00000020;
  border: 3px #50a9cf solid;
  padding: 10px;
  max-width: 200px;
  min-width: 200px;
  border-radius: 10px;
  background-color: #e3e3e3;
  margin: 0 auto;
`;

// view de agrupamento
export const FormGroup = styled.View`
  margin: 0 auto;
`;

// botão
export const SubmitButton = styled.Button`
  color: white;
`;

export const ButtonBg = styled.View`
  box-shadow: 0 5px 20px #00000020;
  padding: 1px;
  margin: auto;
  width: 40%;
  border-radius: 10px;
  background-color: #50a9cf;
`;
