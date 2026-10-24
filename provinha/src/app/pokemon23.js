import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function Pokemon() {
  const [nome, setNome] = useState("");
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState("");

  // Busca o Pokémon usando o nome digitado.
  async function buscar() {
    try {
      // Deixa o nome em minúsculas para a URL da PokéAPI.
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`
      );

      // A API responde com erro quando o Pokémon não existe.
      if (!resposta.ok) {
        setDados(null);
        setErro("Pokémon não encontrado.");
        return;
      }

      // Transforma a resposta em objeto com os dados do Pokémon.
      setDados(await resposta.json());
      setErro("");
    } catch {
      setDados(null);
      setErro("Não foi possível buscar o Pokémon.");
    }
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Pokémon" }} />
      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome do Pokémon"
      />
      <Button title="Buscar" onPress={buscar} />
      <Text style={styles.erro}>{erro}</Text>
      {dados && (
        <>
          <Image
            source={{ uri: dados.sprites.front_default }}
            style={styles.imagem}
          />
          <Text style={styles.titulo}>Nome: {dados.name}</Text>
          <Text>Altura: {dados.height}</Text>
          <Text>Peso: {dados.weight}</Text>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    gap: 6,
  },

  campo: {
    borderWidth: 1,
    borderColor: "#D9DDE3",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginBottom: 6,
  },

  erro: {
    marginTop: 16,
    color: "#B91C1C",
  },

  imagem: {
    width: 200,
    height: 200,
  },

  titulo: {
    fontSize: 16,
    fontWeight: "600",
  },
});
