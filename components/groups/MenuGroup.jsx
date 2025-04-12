import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons"; // Asegúrate de tener instalado este paquete

const MenuGroup = ({ navigation }) => {
  const [groupId, setGroupId] = useState(0);

  const obtenerUserID = async () => {
    try {
      if (Platform.OS === "web") {
        return localStorage.getItem("userID");
      } else {
        return await AsyncStorage.getItem("userID");
      }
    } catch (error) {
      console.error("Error obteniendo userID:", error);
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
      }
    } catch (e) {
      console.error("Error obteniendo el ID del grupo:", e);
    }
  };

  const salirDelGrupo = async () => {
    try {
      if (Platform.OS === "web") {
        localStorage.removeItem("groupID");
      } else {
        await AsyncStorage.removeItem("groupID");
      }
      navigation.navigate("MyGroups");
    } catch (error) {
      console.error("Error al salir del grupo:", error);
    }
  };

  useEffect(() => {
    obtenerUserID();
    obtenerGrupoID();
  }, []);

  const handleVerAsistencia = () => {
    navigation.navigate("ListaAsistencia", {});
  };

  const handleBuscarAlumno = () => {
    navigation.navigate("BuscarAlumno", {});
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF5F5", padding: 20 }}>
      {/* Botón para salir */}
      <TouchableOpacity
        onPress={salirDelGrupo}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          backgroundColor: "#FFFFFF", // fondo blanco para contraste
          borderRadius: 30,
          padding: 0,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.01,
          shadowRadius: .1,
          elevation: 1,
          zIndex: 10
        }}
      >
        <Ionicons name="arrow-back-circle" size={40} color="#800000" />
        {/* color morena más fuerte para que destaque */}
      </TouchableOpacity>


      <View
        style={{
          backgroundColor: "#8B0000",
          paddingVertical: 20,
          paddingHorizontal: 15,
          borderRadius: 10,
          marginBottom: 20,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 4,
          elevation: 4
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>
          Grupo: {groupId}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 12,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3
        }}
      >
        <TouchableOpacity
          onPress={handleVerAsistencia}
          style={{
            backgroundColor: "#A52A2A",
            paddingVertical: 12,
            borderRadius: 8,
            marginBottom: 15,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Ver Asistencia
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleBuscarAlumno}
          style={{
            backgroundColor: "#8B0000",
            paddingVertical: 12,
            borderRadius: 8,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Buscar Alumno
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuGroup;
