import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function () {
    const [valor, setValor] = useState(0);
    function aumentar() {
        setValor(valor + 1);
    }

    function diminuir() {
        setValor(valor - 1);
    }

return (
    <SafeAreaView style={styles.tela}>
        <Stack.Screen options={{ title: "Voltar" }}/>
        <Text style={styles.titulo}>Contador</Text>
        <Text style={styles.valor}>{valor}</Text>
        <View style={styles.botoes}>
        <Button title="Mais" onPress={aumentar}/>
        <Button title="Menos" onPress={diminuir}/>
        </View>    
    </SafeAreaView>
)};

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  valor: {
    fontSize: 48,
    textAlign: "center",
    marginVertical: 24,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  botoes: {
    gap: 12,
  },
});
