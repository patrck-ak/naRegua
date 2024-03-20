import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  margin: 10px auto;
  background-color: #ccc;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 5px 10px #00000030;
`;

export const Group = styled.View`
  margin: 0;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: flex-start;
  gap: 5px;
`;

export const Profile = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 10px;
`;

export const Nome = styled.Text`
  font-weight: 500;
  padding: 10px;
`;

export const StarBox = styled.View`
  padding: 5px;
  border-radius: 10px;
  background-color: #33333330;
`;
