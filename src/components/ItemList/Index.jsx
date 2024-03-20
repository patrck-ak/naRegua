import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Alert, Text, TouchableNativeFeedback } from "react-native";
import { Container, Group, Nome, Profile, StarBox } from "./Styles";

export default function ItemList({ name, rating, agenda, uri }) {
  const handlePress = async () => {
    Alert.prompt("opa", "OI");
  };

  // func para gerar quantidade de rating
  const RatingDef = () => {
    let stars = [];
    if (rating >= 0) {
      for (let i = 0; i < rating; i++) {
        stars.push(<FontAwesome name="star" size={13} color="yellow" />);
      }
      return stars;
    }
  };

  return (
    <>
      <TouchableNativeFeedback onPress={handlePress}>
        <Container>
          <Group>
            <Profile source={{ uri: uri }} />
            <Nome>{name}</Nome>
          </Group>
          <StarBox>
            <Text>
              {rating}/5 | <RatingDef />
            </Text>
          </StarBox>
          <Text>{agenda}</Text>
        </Container>
      </TouchableNativeFeedback>
    </>
  );
}
