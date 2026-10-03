import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("floricultura.db");

db.execSync(`
  CREATE TABLE IF NOT EXISTS tarefas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    cor TEXT NOT NULL,
    cientifico TEXT NOT NULL
  );
`);

function listar() {
    return db.getAllSync("SELECT * FROM tarefas ORDER BY id DESC");
}


function adicionar(nome, cor, cientifico) {
    db.runSync("INSERT INTO tarefas (nome, cor, cientifico) VALUES (?, ?, ?)", [nome, cor, cientifico]);
}

function remover(id) {
    db.runSync("DELETE FROM tarefas WHERE id = ?", [id]);
}

function atualizar(nome, cor, cientifico, id) {
    db.runSync("UPDATE tarefas SET cor = ?, nome = ?, cientifico = ?WHERE id = ?", [
        nome,
        cor,
        cientifico,
        id,
    ]);
}

export default function Lista() {
    const [lista, setLista] = useState([]);
    const [nome, setNome] = useState("");
    const [cor, setCor] = useState("");
    const [cientifico, setCientifico] = useState("");
    const [idEditar, setIdEditar] = useState(0);

    function carregar() {
        setLista(listar());
    }

    useEffect(() => {
        carregar();
    }, []);

    function salvar() {
        adicionar(nome, cor, cientifico);
        setCientifico("");
        setCor("");
        setNome("");
        setCientifico("");
        carregar();
    }

    function guardarOuEditar() {
        if (idEditar == 0) {
            salvar(nome, cor, cientifico);
        } else {
            atualizar(nome, cor, cientifico, idEditar);
        }
        setIdEditar(0);
        setCientifico("");
        setCor("");
        setNome("");
        carregar();
    }

    function apagar(id) {
        remover(id);
        carregar();
    }

    function editar(lista) {
        setIdEditar(lista.id);
        setNome(lista.nome);
        setCor(lista.cor);
        setCientifico(lista.cientifico);
    }

    return (
        <SafeAreaView style={styles.tela}>
            <Stack.Screen options={{ title: "Listinha da Maldade" }} />
            <TextInput style={styles.lugarzinho} value={nome} onChangeText={setNome} placeholder="Nome da Flor" />
            <TextInput style={styles.lugarzinho} value={cor} onChangeText={setCor} placeholder="Cor da Flor" />
            <TextInput style={styles.lugarzinho} value={cientifico} onChangeText={setCientifico} placeholder="Nome Científico" />
            {idEditar !== 0 ? (
            <Button title="METER" onPress={guardarOuEditar} />
            ) : (
            <Button title="SOCAR" onPress={salvar} />
            )}
            <FlatList data={lista} renderItem={({ item }) => (
                <View style={styles.itemApagar}>
                    <Text style={styles.item}>{item.nome} - {item.cor} - {item.cientifico}</Text>
                    <Button title="EXC" onPress={() => apagar(item.id)} />
                    <Button title="EDT" onPress={() => editar(item)} />
                </View>)} />
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
        flex: 1,
    },

    itemApagar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
    },
});