import React from "react";
import { Container, Nome, StarBox } from "./Styles";
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ItemList({ name, rating, jobs }) {
  return (
    <>
      <Container>
        <Nome>{name}</Nome>
        <StarBox>
          <Text>
            <AntDesign name="star" size={15} color={"#fff"} /> {rating}
          </Text>
        </StarBox>
        <Text>{jobs}</Text>
      </Container>
    </>
  );
}
