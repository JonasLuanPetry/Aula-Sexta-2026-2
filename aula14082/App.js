import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.tela}>
      <View style={styles.corDeFundo}>
        <View style={styles.icone}></View>
        <View>
          <Text style={styles.textoNegao}>Olá, Estudante de Filosofia.</Text>
          <Text style={styles.textoNegao}>Bem vindo ao seu problema.</Text>
        </View>
      </View>
      
      <View style={styles.caixaMaior}>
        <View style={styles.caixaMenor}></View>
        <Text>Batatinha frita</Text>
        <View style={styles.caixaMenor}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#ffffff",
  },

  textoNegao: {
    color: "#000",
    fontSize: 20,
  },

  textoLaranja: {
    color: "#FFA500",
  },

  corDeFundo: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },

  caixaMaior: {
    backgroundColor: "#ff19c2",
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    borderRadius: 30,
  },

  caixaMenor: {
    width: 50,
    height: 50,
    backgroundColor: "#3f19ff",
    borderRadius: 50,
  },

  icone: {
    width: 80,
    height: 80,
    backgroundColor: "#000",
    borderRadius: 50,
  },
});