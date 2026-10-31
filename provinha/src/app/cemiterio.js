//import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  FlatList,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
//import * as SQLite from "expo-sqlite";

export default function Cemiterio() {
  const [produtos, setProdutos] = useState([]);
  const [lapideProduto, setLapideProduto] = useState("");
  const [floresProduto, setFloresProduto] = useState(0);
  const [caixaoProduto, setCaixaoProduto] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [idadeProduto, setIdadeProduto] = useState("");


  async function buscarProdutos() {
    const resposta = await fetch(
      "https://6ae5353d28393034b08e304c.mockapi.io/Aula/morte",
    );
    const dados = await resposta.json();
    setProdutos(dados);
  }

  async function salvarProduto() {
    await fetch("https://6ae5353d28393034b08e304c.mockapi.io/Aula/morte", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lapide: lapideProduto,
        flores: floresProduto,
        caixao: caixaoProduto,
        nome: nomeProduto,
        idade: idadeProduto,
      }),
    });
    setLapideProduto("");
    setFloresProduto(0);
    setCaixaoProduto("");
    setNomeProduto("");
    setIdadeProduto("");

    buscarProdutos();
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Meus produtos" }} />

      <TextInput
        style={styles.campo}
        value={lapideProduto}
        onChangeText={setLapideProduto}
        placeholder="Lapide do enterro"
      />
      <TextInput
        style={styles.campo}
        value={floresProduto}
        onChangeText={setFloresProduto}
        placeholder="Flores do enterro"
      />
      <TextInput
        style={styles.campo}
        value={caixaoProduto}
        onChangeText={setCaixaoProduto}
        placeholder="Caixão do enterro"
      />
      <TextInput
        style={styles.campo}
        value={nomeProduto}
        onChangeText={setNomeProduto}
        placeholder="Nome do falecido"
      />
      <TextInput
        style={styles.campo}
        value={idadeProduto}
        onChangeText={setIdadeProduto}
        keyboardType="numeric"
        placeholder="Idade do falecido"
      />

      <Button title="Salvar enterro" onPress={salvarProduto} />

      <FlatList
        style={styles.lista}
        data={produtos}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.id} - {item.lapide} - {item.flores} - {item.caixao} - {item.nome} - {item.idade}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  campo: {
    borderWidth: 1,
    borderColor: "#D9DDE3",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: "#111827",
    marginBottom: 12,
  },

  lista: {
    flex: 1,
    marginTop: 16,
  },

  item: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    fontSize: 15,
    color: "#111827",
  },
});