import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.tela}>
      <View style={styles.corDeFundo}>
        <Text style={styles.textoAzul}>Batata</Text>
        <Text style={styles.textoAzul}>Batata2</Text>
      </View>
      <Text style={styles.textoLaranja}>Não pintar</Text>
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
    backgroundColor: "#3C3C3C",
  },

  textoAzul: {
    color: "#00FFFF",
    fontSize: 20,
  },

  textoLaranja: {
    color: "#FFA500",
  },

  corDeFundo: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#32a852",
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
});
