import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Group, TextGroup, Button, Container } from "./style";
import { Pressable, Text, View } from "react-native";

export default function SocialSign() {
  const handlePress = (choice) => console.log(`login via: ${choice}`);

  return (
    <View
      style={{ gap: 30, marginTop: "10px", position: "relative", top: "10%" }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          maxWidth: "90%",
          alignSelf: "center",
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
        <View>
          <Text
            style={{
              width: 50,
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Ou
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
      </View>
      <Group>
        {/* Facebook oAuth */}
        <Pressable onPress={() => handlePress("fb")}>
          <Container>
            <FontAwesome name="facebook-square" size={24} color="#153944" />
          </Container>
        </Pressable>

        {/* Google oAuth */}
        <Pressable onPress={() => handlePress("google")}>
          <Container>
            <FontAwesome name="google" size={24} color="#153944" />
          </Container>
        </Pressable>

        {/* Apple oAuth */}
        <Pressable onPress={() => handlePress("apple")}>
          <Container>
            <FontAwesome name="apple" size={24} color="#153944" />
          </Container>
        </Pressable>
      </Group>
    </View>
  );
}
