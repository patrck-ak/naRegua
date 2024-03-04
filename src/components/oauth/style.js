import styled from "styled-components/native";

export const Group = styled.View`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 18px;
`;

export const Container = styled.View`
  border-radius: 10px;
  padding: 10px;
  width: max-content;
  align-items: center;
  background-color: #e3e3e3;
  box-shadow: 0 5px 20px #00000020;
`;

export const Button = styled.Button`
  padding: 10px;
`;
