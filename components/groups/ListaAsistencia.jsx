import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import AsistenciaPasoAPaso from "./AsistenciaPasoAPaso";

const ListaAsistencia = ({ route, navigation }) => {
  const abrirLectorQR = () => {
    console.log("Abrir lector QR próximamente...");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF5F5" }}>

      {/* Cabecera */}
      <View style={{
        backgroundColor: "#6B0000",
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
      }}>
        <Text style={{
          color: "#fff",
          fontSize: 24,
          fontWeight: "bold",
        }}>
          Asistencia
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("MenuGroup")}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            backgroundColor: "#6B0000",
            padding: 5,
            borderRadius: 10,
            zIndex: 10,
          }}
        >
          <Text style={{
            color: "#FBE9E7",
            fontWeight: "bold",
            fontSize: 18,
          }}>X</Text>
        </TouchableOpacity>
      </View>

      {/* Componente paso a paso */}
      <AsistenciaPasoAPaso navigation={navigation} />

      {/* Botón lector QR */}
      <View style={{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
        paddingHorizontal: 20,
      }}>
        <TouchableOpacity
          onPress={abrirLectorQR}
          style={{
            backgroundColor: "#8B0000",
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 8,
          }}
        >
          <Text style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16,
          }}>
            Con QR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListaAsistencia;
