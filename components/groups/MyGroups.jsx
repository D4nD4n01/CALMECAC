import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Group from "./Group.jsx"
import { getUserID } from "../../utils/auth.js";
import paths from "../../paths"

import AddGroupModal from "./AddGroupModal";

const MyGroups = () => {
  const navigation = useNavigation();
  const [groups, setGroups] = useState([]);
  const [showAddGroup, setShowAddGroup] = useState(false);

  const cerrarSesion = async () => {
    try {
      if (Platform.OS === "web") {
        localStorage.removeItem("userID");
      } else {
        await AsyncStorage.removeItem("userID");
      }
      navigation.replace("Login");
    } catch (error) {
      console.error("Error cerrando sesión:", error);
    }
  };

  useEffect(() => {
    obtenerCursos()
  }, []);

  const obtenerCursos = async () => {
    const idTeacher = getUserID(); // lo obtienes desde localStorage

    if (!idTeacher) {
      console.error("No se encontró el ID del usuario.");
      return;
    }

    try {
      const response = await fetch(paths.URL + paths.COURSE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          intMode: 0,
          idTeacher,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setGroups(result.data)
      } else {
        console.warn("No se encontraron cursos para este maestro.");
      }
    } catch (error) {
      console.error("Error al obtener cursos:", error);
    }
  };


  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#FBE9E7" }}>
      <View
        style={{
          backgroundColor: "#8B0000", // encabezado rojo sangre
          paddingVertical: 16,
          paddingHorizontal: 24,
          borderRadius: 10,
          marginBottom: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          Mis Grupos
        </Text>
        <TouchableOpacity onPress={cerrarSesion}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginBottom: 32, alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => setShowAddGroup(true)}
          style={{
            backgroundColor: "#A52A2A", // botón rojo morena
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Agregar grupo
          </Text>
        </TouchableOpacity>
      </View>

      {groups && groups.length > 0 ? (
        groups.map((group, index) => <Group key={index} data={group} />)
      ) : (
        <View style={{ marginTop: 50, alignItems: "center" }}>
          <Text style={{ fontSize: 16, color: "#6c757d" }}>
            No tienes grupos actualmente
          </Text>
        </View>
      )}

      {showAddGroup && (
        <AddGroupModal visible={showAddGroup} onClose={() => setShowAddGroup(false)} update ={obtenerCursos}/>
      )}
    </View>
  );

};

export default MyGroups;
