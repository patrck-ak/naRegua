import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Group, Button, Container } from "./style";
import { Pressable, Text } from "react-native";

export default function OAuth() {
  const handlePress = () => console.log("apertou");

  return (
    <>
      <Group>
        <Text style={{ alignSelf: "center" }}>Entrar com:</Text>

        {/* Facebook oAuth */}
        <Pressable onPress={handlePress}>
          <Container>
            <FontAwesome name="facebook-square" size={24} color="black" />
          </Container>
        </Pressable>

        {/* Google oAuth */}
        <Pressable onPress={handlePress}>
          <Container>
            <FontAwesome name="google" size={24} color="black" />
          </Container>
        </Pressable>

        {/* Apple oAuth */}
        <Pressable onPress={handlePress}>
          <Container>
            <FontAwesome name="apple" size={24} color="black" />
          </Container>
        </Pressable>
      </Group>
    </>
  );
}
