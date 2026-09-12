import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.viewPrincipal}>
      <Stack.Screen options={{ title: "Painel" }} />
      <View style={styles.cabecalho}>
        <View style={styles.simbololos}></View>
        <View style={styles.instagram}>
          <Text style={styles.porqueetutaolhandoomeucodigoprofessor}>Garotas do X</Text>
        </View>
        <View style={styles.simbololos}></View>
      </View>

      <View style={styles.postsheteros}>
        <View style={styles.esferasdodragao}></View>
        <View style={styles.esferasdodragao}></View>
        <View style={styles.esferasdodragao}></View>
        <View style={styles.esferasdodragao}></View>
      </View>

      <View style={styles.videoneonlaranja}></View>

      <View style={styles.rodabota}>
        <View style={styles.quadradinhodeoito}></View>
        <View style={styles.quadradinhodeoito}></View>
        <View style={styles.quadradinhodeoito}></View>
        <View style={styles.quadradinhodeoito}></View>
        <View style={styles.quadradinhodeoito}></View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "black",
  },

  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  videoneonlaranja: {
  flex: 1,
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 40,
  backgroundColor: "orange",
  marginTop: 20,
  marginHorizontal: 10,
},

  simbololos: {
    width: 40,
    height: 40,
    backgroundColor: "white",
  },

  instagram: {
    width: 150,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  porqueetutaolhandoomeucodigoprofessor: {
    color: "black",
    fontSize: 22, //VOTA VOTA E CONFIA 22 É BOLSONARO
  },

  rodabota: {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "black",
  paddingVertical: 15,
},

  quadradinhodeoito: {
  width: 40,
  height: 40,
  backgroundColor: "white",
},

  postsheteros: {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  gap: 0,
  marginTop: 30,
},

  esferasdodragao: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "purple",
  },
});