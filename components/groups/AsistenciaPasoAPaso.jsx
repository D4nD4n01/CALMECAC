import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const isWeb = Platform.OS === "web";


const AsistenciaPasoAPaso = ({ navigation, groupId, dataGroup}) => {

  const [indiceActual, setIndiceActual] = useState(0);




  const marcarAsistencia = (tipo) => {
    // Aquí podrías guardar la asistencia si deseas
    if (indiceActual < dataGroup.length - 1) {
      setIndiceActual(indiceActual + 1);
    } else {
      navigation.navigate("MenuGroup");
    }
  };

  if (dataGroup.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cargando alumnos...</Text>
      </View>
    );
  }

  const alumno = dataGroup[indiceActual];

  return (
    <View style={styles.container}>
      {/* Botón cerrar */}
      

      <View style={styles.card}>
        <Text style={styles.nombre}>
          {alumno.intNumberList}. {alumno.strName}
        </Text>

        <View style={styles.botonesContainer}>
          <TouchableOpacity
            style={[styles.boton, { backgroundColor: "#B71C1C" }]}
            onPress={() => marcarAsistencia("no")}
          >
            <Text style={styles.botonTexto}>No asistió</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.boton, { backgroundColor: "#4E342E" }]}
            onPress={() => marcarAsistencia("sí")}
          >
            <Text style={styles.botonTexto}>Asistió</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5", // beige claro
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: isWeb ? "50%" : "90%",
    backgroundColor: "#FBE9E7", // fondo cálido
    borderRadius: 10,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
  },
  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6B0000",
    marginBottom: 30,
    textAlign: "center",
  },
  botonesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  boton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    color: "#6B0000",
    textAlign: "center",
  },
});

export default AsistenciaPasoAPaso;
