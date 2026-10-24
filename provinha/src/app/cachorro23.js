import { useEffect, useState } from "react";
import { Button, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function Cachorro() {
  const [imagem, setImagem] = useState("");
  const [erro, setErro] = useState("");

  async function buscar() {
    try {
      const resposta = await fetch("https://dog.ceo/api/breeds/image/random");
      const dados = await resposta.json();
      setImagem(dados.message);
      setErro("");
    } catch {
      setErro("Não foi possível carregar a foto do cachorro.");
    }
  }

  useEffect(() => {
    buscar();
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFFFFF", padding: 16, gap: 12 }}
      edges={["bottom"]}
    >
      <Stack.Screen options={{ title: "Cachorros" }} />

      {imagem && (
        <Image source={{ uri: imagem }} style={{ width: "100%", height: 320 }} />
      )}
      {erro ? <Text style={{ color: "#B91C1C" }}>{erro}</Text> : null}
      <Button title="Outro cachorro" onPress={buscar} />
    </SafeAreaView>
  );
}
