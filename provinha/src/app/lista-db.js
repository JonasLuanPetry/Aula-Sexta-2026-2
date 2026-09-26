import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("lista.db");

db.execSync(`
  CREATE TABLE IF NOT EXISTS tarefas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    texto TEXT NOT NULL,
    prioridade TEXT NOT NULL
  );
`);

function listar() {
    return db.getAllSync("SELECT * FROM tarefas ORDER BY id DESC");
}


function adicionar(texto, prioridade) {
    db.runSync("INSERT INTO tarefas (texto, prioridade) VALUES (?, ?)", [texto, prioridade]);
}

function remover(id) {
    db.runSync("DELETE FROM tarefas WHERE id = ?", [id]);
}

export default function Lista() {
    const [texto, setTexto] = useState("");
    const [lista, setLista] = useState([]);
    const [prioridade, setPrioridade] = useState("");

    function carregar() {
        setLista(listar());
    }

    useEffect(() => {
        carregar();
    }, []);

    function salvar() {
        adicionar(texto, prioridade);
        setPrioridade("");
        setTexto("");
        carregar();
    }

    function apagar(id) {
        remover(id);
        carregar();
    }

    return (
        <SafeAreaView style={styles.tela}>
            <Stack.Screen options={{ title: "Listinha da Maldade" }} />
            <TextInput style={styles.lugarzinho} value={texto} onChangeText={setTexto} />
            <TextInput style={styles.lugarzinho} value={prioridade} onChangeText={setPrioridade} />
            <Button title="METER" onPress={salvar} />
            <FlatList data={lista} renderItem={({ item }) => (
            <View>    
                <Text style={styles.item}>{item.texto} - {item.prioridade}</Text>
                <Button title="APAGAR" onPress={() => apagar(item.id)} />
            </View>)}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        padding: 28,
        backgroundColor: "white",
    },

    lugarzinho: {
        borderWidth: 1,
        height: 40,
        marginBottom: 10,
    },

    item: {
        backgroundColor: "#444",
        color: "white",
        padding: 10,
        marginTop: 5,
    },
});