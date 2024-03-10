import React from "react";
import { Body } from "./Styles.js";
import { barbearias } from "../../config.js";
import { FlatList } from "react-native";
import ItemList from "../ItemList/Index.jsx";

export default function Home() {
  return (
    <>
      <Body>
        <FlatList
          data={barbearias}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ItemList
              name={item.nome}
              rating={item.qualidade}
              jobs={item.servicos}
            />
          )}
        />
      </Body>
    </>
  );
}
