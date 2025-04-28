import React, { useState } from "react";
import { View, TextInput, Text, FlatList, StyleSheet } from "react-native";

const BuscarAlumno = ({ route }) => {
  const { estudiantes } = route.params;
  const [busqueda, setBusqueda] = useState("");



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Alumno</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe el nombre del alumno"
        value={busqueda}
        onChangeText={setBusqueda}
      />
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
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 8 },
  item: { fontSize: 16, marginVertical: 4 },
});

export default BuscarAlumno;
