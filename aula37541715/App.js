import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewPrincipal}>
          <View style={styles.cabecalho}>
            <Text style={styles.texto1}>Anta Gorda,RS</Text>
            <Text style={styles.texto2}>Seg 22/13</Text>
          </View>
          <View style={styles.meiuca}>
            <Text style={styles.texto3}>40°</Text>
            <Text style={styles.texto4}>Totalmente Infernal</Text>
            <View style={styles.caixinhadoamor}>
              <Text style={styles.texto5}>Max 67°</Text>
              <Text style={styles.texto6}>Min 22°</Text>
            </View>
          </View>
          <View style={styles.joelinho}>
            <View style={styles.caixa}>
              <Text style={styles.parte1}>Seg</Text>
              <Text style={styles.cubo}></Text>
              <Text style={styles.parte2}>20°</Text>
            </View>
            <View style={styles.caixa}>
              <Text style={styles.parte1}>Ter</Text>
              <Text style={styles.cubo}></Text>
              <Text style={styles.parte2}>21°</Text>
            </View>
            <View style={styles.caixa}>
              <Text style={styles.parte1}>Qua</Text>
              <Text style={styles.cubo}></Text>
              <Text style={styles.parte2}>22°</Text>
            </View>
            <View style={styles.caixa}>
              <Text style={styles.parte1}>Qui</Text>
              <Text style={styles.cubo}></Text>
              <Text style={styles.parte2}>23°</Text>
            </View>
            <View style={styles.caixa}>
              <Text style={styles.parte1}>Sex</Text>
              <Text style={styles.cubo}></Text>
              <Text style={styles.parte2}>24°</Text>
            </View>
          </View>
          <View style={styles.canela}>
            <Text style={styles.alerta}>ALERTA!</Text>
            <Text style={styles.blablabla}>Possibilidade de chuva de testosterona masculina pura.</Text>
          </View>
          <View style={styles.botao}>
            <Text style={styles.botaozinho}>$Ver e Acontecer$</Text>
          </View>
    </View>      
  );
}

const styles = StyleSheet.create({
cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

texto1: {
  color: "purple",
  fontSize: 22,
  },

texto2: {
 color: "orange",
  fontSize: 13,
  },

meiuca: {
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: 22,
  paddingHorizontal: 20,
  paddingVertical: 20,
  borderRadius: 20,
  backgroundColor: "#7bc0f8",
  marginHorizontal: 10,
  },

texto3: {
  color: "black",
  fontSize: 67,
  },

texto4: {
 color: "red",
  fontSize: 18,
  },

texto5: {
  color: "yellow",
  fontSize: 13,
  },

texto6: {
 color: "blue",
  fontSize: 13,
  },

caixinhadoamor: {
  flexDirection: "row",
  justifyContent: "space-between",
  gap: 20,
},

joelinho: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: 20,
  paddingHorizontal: 20,
  paddingVertical: 20,
  borderRadius: 20,
  backgroundColor: "fff",
},

caixa: {
justifyContent: "space-between",
backgroundColor: "#7bc0f8",
alignItems: "center",
paddingTop: 20,
paddingHorizontal: 20,
paddingVertical: 20,
borderRadius: 30,
},

parte1: {
  fontSize: 15,
},

cubo: {
  width: 30,
  height: 30,
  borderRadius: 10,
  backgroundColor: "purple",
  alignItems: "center",
  justifyContent: "center",
},

parte2: {
 fontSize: 15,
},

canela: {
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  paddingTop: 20,
  paddingHorizontal: 20,
  paddingVertical: 20,
  borderRadius: 20,
  backgroundColor: "#ecd25f",
  marginHorizontal: 20,
},

alerta: {
  fontSize: 22,
},

blablabla: {
  fontSize: 18,
},

botao: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: 20,
  paddingHorizontal: 20,
  paddingVertical: 20,
  borderRadius: 20,
  backgroundColor: "fff",
},

botaozinho: {

},

});
