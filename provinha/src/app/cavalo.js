import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.tela}>
  <Stack.Screen options={{ title: "Painel" }} />
      <View style={styles.corDeFundo}>
        <View style={styles.icone}></View>
        <View>
          <Text style={styles.textoNegao}>Reactive Native.</Text>
          <Text style={styles.textoNeguinho}>Avaliação do dia 04/09.</Text>
        </View>
      </View>
      <View style={styles.centrao}>
        <View style={styles.caixaMaior}>
          <Text style={styles.furuguduncio}>Batatas são Macias</Text>
        </View>
          <View style={styles.botao}>
            <Text style={styles.botaozinho}>ENVIAR</Text>
          </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#f5e89f",
  },

  textoNegao: {
    color: "#000",
    fontSize: 22,
  },

  textoNeguinho: {
    color: "#000",
    fontSize: 13,
  },

  corDeFundo: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#f5e89f",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 100,
    marginLeft: 20,
  },

  centrao: {
    marginTop: 200,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  caixaMaior: {
    backgroundColor: "#64dfd49f",
    width: "90%",
    height: 100,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    borderRadius: 30,
    margin: 22,
  },

  furuguduncio: {
    fontSize: 17,
  },

  icone: {
    width: 80,
    height: 80,
    backgroundColor: "#000",
    borderRadius: 50,
  },

  botao: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 10,
  paddingHorizontal: 10,
  paddingVertical: 10,
  backgroundColor: "#df64d59f",
  width: 200,
  height: 60,
},

  botaozinho: {

},

});