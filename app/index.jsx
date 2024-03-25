import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Body } from "./styles";

export default function index() {
  return (
    <Body>
      <Pressable style={{ padding: 10, backgroundColor: "#7a7a7a" }}>
        <Link href={"/login/"}>LOGIN</Link>
      </Pressable>
      <Pressable>
        <Link href={"/sign/"}>CADASTRO</Link>
      </Pressable>
    </Body>
  );
}
