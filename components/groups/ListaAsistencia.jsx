import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

const ListaAsistencia = ({ route, navigation }) => {
  const { estudiantes } = route.params;

  const abrirAsistenciaTradicional = () => {
    navigation.navigate("AsistenciaPasoAPaso", { alumnos: estudiantes });
  };

  const abrirLectorQR = () => {
    console.log("Abrir lector QR próximamente...");
  };

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text style={{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#4E342E"
      }}>
        Lista de Asistencia
      </Text>

      <FlatList
        data={estudiantes}
        keyExtractor={(item) => item.idEstudiante.toString()}
        renderItem={({ item }) => (
          <Text style={{
            fontSize: 16,
            marginVertical: 4,
            color: "#5D4037"
          }}>
            {item.intNumeroLista}. {item.StrNombre}
          </Text>
        )}
      />

      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30,
      }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#8B0000", // rojo vino
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 8,
          }}
          onPress={abrirLectorQR}
        >
          <Text style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16,
          }}>
            Con QR
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#4E342E", // marrón oscuro
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 8,
          }}
          onPress={abrirAsistenciaTradicional}
        >
          <Text style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16,
          }}>
            Tradicional
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListaAsistencia;
