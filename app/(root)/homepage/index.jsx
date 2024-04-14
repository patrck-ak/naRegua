import React from "react";
import { Body } from "./styles.js";
import { barbearias } from "../../../config.js";
import { Button, FlatList } from "react-native";
import ItemList from "../../../src/components/ItemList/Index.jsx";
export default function Home() {
  return (
    <>
      <Body>
        <FlatList
          list
          data={barbearias}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ItemList
              uri={item.profile}
              name={item.nome}
              rating={item.qualidade}
              agenda={item.shortAgenda}
            />
          )}
        />
      </Body>
    </>
  );
}
