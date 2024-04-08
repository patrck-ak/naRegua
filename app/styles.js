import styled from "styled-components/native";

// body
export const Body = styled.View`
  background: #153944;
  width: 100%;
  height: 100%;
  padding-top: 20%;
`;

export const Button = styled.TouchableOpacity`
  background-color: #d9d9d9;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
`;

// label
export const FormLabel = styled.Text`
  color: #ccc;
  padding-left: 12%;
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
  padding: 10px;
  max-width: 80%;
  width: 80%;
  border-radius: 10px;
  background-color: #e3e3e3;
  margin: 0 auto;
`;

// view de agrupamento
export const FormGroup = styled.View`
  margin: 0 auto;
  width: 100%;
`;
