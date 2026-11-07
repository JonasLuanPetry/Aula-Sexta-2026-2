//import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
//import * as SQLite from "expo-sqlite";

const API_URL = "https://6ae5353d28393034b08e304c.mockapi.io/Aula/morte";

export default function Cemiterio() {
  const [produtos, setProdutos] = useState([]);
  const [lapideProduto, setLapideProduto] = useState("");
  const [floresProduto, setFloresProduto] = useState("");
  const [caixaoProduto, setCaixaoProduto] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [idadeProduto, setIdadeProduto] = useState("");
  const [idEditando, setIdEditando] = useState(0);

  async function buscarProdutos() {
    const resposta = await fetch(API_URL);
    const dados = await resposta.json();
    setProdutos(dados);
  }

  async function salvarProduto() {
    if (idEditando === 0) {
      await fetch(API_URL, {
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
    } else {
      await fetch(API_URL + "/" + idEditando, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lapide: lapideProduto,
          flores: floresProduto,
          caixao: caixaoProduto,
          nome: nomeProduto,
          idade: idadeProduto,
        }),
      });

      setIdEditando(0);
    }
    setLapideProduto("");
    setFloresProduto("");
    setCaixaoProduto("");
    setNomeProduto("");
    setIdadeProduto("");

    buscarProdutos();
  }

  async function excluir(id) {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    buscarProdutos();
  }

  async function editar(item) {
    setIdEditando(item.id);
    setLapideProduto(item.lapide);
    setFloresProduto(item.flores);
    setCaixaoProduto(item.caixao);
    setNomeProduto(item.nome);
    setIdadeProduto(item.idade);
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
          <View style={[styles.item, styles.itemControlar]}>
              <Text style={styles.itemTexto}>
              {item.id} - {item.lapide} - {item.flores} - {item.caixao} - {item.nome} - {item.idade}
              </Text>
            <View style={styles.botoesControlar}>
              <Button title="🗑️" color="#D64545" onPress={() => excluir(item.id)} />
              <Button title="🖊" color="#0000FF" onPress={() => editar(item)} />
            </View>
          </View>
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
    padding: 8,
  },

  botoesControlar: {
    flexDirection: "row",
    alignItems: "center",
  },

  itemControlar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    justifyContent: "space-between",
    gap: 4,
  },

  itemTexto: {
    flex: 1,
    padding: 8,
    fontSize: 14,
    color: "#111827",
  },
});