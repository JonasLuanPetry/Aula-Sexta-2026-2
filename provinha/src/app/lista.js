import { Stack } from "expo-router";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Lista() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  function adicionar() {
    setLista([...lista, texto]);
    setTexto("");
  }

  return (
    <SafeAreaView style={styles.tela}>
    <Stack.Screen options={{ title: "Listinha da Maldade" }} />
    <TextInput style={styles.lugarzinho} value={texto} onChangeText={setTexto}/>
    <Button title="METER" onPress={adicionar} />
    <FlatList data={lista} renderItem={({ item }) => ( <Text style={styles.item}>{item}</Text>)}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 28,
    backgroundColor: "white",
  },

  lugarzinho: {
    borderWidth: 1,
    height: 40,
    marginBottom: 10,
  },

  item: {
    backgroundColor: "#444",
    color: "white",
    padding: 10,
    marginTop: 5,
  },
});