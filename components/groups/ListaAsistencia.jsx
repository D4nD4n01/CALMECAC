import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import AsistenciaPasoAPaso from "./AsistenciaPasoAPaso";
import { useState, useEffect } from "react";
import Loading from "@/utils/Loading";

const ListaAsistencia = ({ route, navigation }) => {
  const [groupID, setGroupId] = useState(0)
  const [dataLoad, setDataLoad] = useState(false)
  const abrirLectorQR = () => {
    console.log("Abrir lector QR próximamente...");
  };

  useEffect(() => {
    obtenerGrupoID();
  }, []);

  const obtenerUserID = async () => {
    try {
      if (Platform.OS === "web") {
        return localStorage.getItem("userID");
      } else {
        return await AsyncStorage.getItem("userID");
      }
    } catch (error) {
      console.error("Error obteniendo groupID:", error);
    }
  };

  const obtenerGrupoID = async () => {
    try {
      let id;
      if (Platform.OS === "web") {
        id = localStorage.getItem("groupID");
      } else {
        id = await AsyncStorage.getItem("groupID");
      }

      if (id) {
        setGroupId(parseInt(id));
        console.log("")
      }
    } catch (e) {
      console.error("Error obteniendo el ID del grupo:", e);
    }
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
      {dataLoad ?
        <AsistenciaPasoAPaso navigation={navigation} group={groupID} />
        : null
      }{
        dataLoad ? <Loading /> : null
      }
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
