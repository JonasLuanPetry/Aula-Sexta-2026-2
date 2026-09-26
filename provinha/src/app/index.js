import { Link, Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Este arquivo é a rota "/" — a tela que abre primeiro.
// O nome index é o único com significado especial: index.js de uma pasta é a
// tela daquela pasta.
export default function Inicio() {
  return (
    // edges={["bottom"]}: o cabeçalho já resolveu o topo, sobra a barra de
    // gestos embaixo. Com "bottom" na lista, o topo fica de fora — a
    // SafeAreaView NÃO põe nada lá. O paddingTop do estilo é espaçamento
    // nosso, não área segura: tire e o avatar cola no cabeçalho.
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      {/* Cada tela pode mexer no próprio cabeçalho */}
      <Stack.Screen options={{ title: "Painel" }} />
      <ScrollView>
      <View style={styles.cabecalho}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.saudacao}>Olá, Estudante</Text>
          <Text style={styles.subtitulo}>Bem-vindo de volta</Text>
        </View>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Provinha</Text>
        <Text style={styles.detalhe}>Pasta provinha.</Text>
        {/* href é o caminho do arquivo: notas.js vira "/notas" */}
        <Link href="/cavalo" style={styles.link}>
          Ver minhas notas →
        </Link>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Aula 28082</Text>
        <Text style={styles.detalhe}>Pasta aula28082.</Text>
        <Link href="/australopiteco" style={styles.link}>
          Abrir perfil →
        </Link>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Aula 14082</Text>
        <Text style={styles.detalhe}>Pasta aula14082.</Text>
        <Link href="/judeus" style={styles.link}>
          Abrir perfil →
        </Link>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Aula 18092</Text>
        <Text style={styles.detalhe}>Pasta aula18092.</Text>
        <Link href="/imalaia" style={styles.link}>
          Abrir perfil →
        </Link>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Aula 20092</Text>
        <Text style={styles.detalhe}>Pasta aula20092.</Text>
        <Link href="/lista" style={styles.link}>
          Abrir perfil →
        </Link>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Aula 25092</Text>
        <Text style={styles.detalhe}>Pasta aula25092.</Text>
        <Link href="/lista-db" style={styles.link}>
          Abrir perfil →
        </Link>
      </View>
      </ScrollView>
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

  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 20,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#D9DDE3",
  },

  saudacao: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
  },

  subtitulo: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
  },

  cartao: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    gap: 6,
  },

  cartaoTitulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  detalhe: {
    fontSize: 14,
    color: "#374151",
  },

  link: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2354D6",
    marginTop: 4,
  },
});