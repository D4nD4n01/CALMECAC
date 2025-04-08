import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ListaAsistencia = ({ route }) => {
  const { estudiantes } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Asistencia</Text>
      <FlatList
        data={estudiantes}
        keyExtractor={(item) => item.idEstudiante.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.intNumeroLista}. {item.StrNombre}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  item: { fontSize: 16, marginVertical: 4 },
});

export default ListaAsistencia;
