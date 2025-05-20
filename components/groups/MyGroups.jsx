import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform, ScrollView, StyleSheet, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Group from "./Group.jsx";
import { getUserID } from "../../utils/auth.js";
import paths from "../../paths";
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
    obtenerCursos();

    // ESTO ES CLAVE PARA MI WEB
    if (Platform.OS === "web") {
      document.body.style.height = "100vh";
      document.body.style.overflow = "auto";
      document.documentElement.style.height = "100vh";
    }
  }, []);

  const obtenerCursos = async () => {
    const idTeacher = getUserID();
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
        setGroups(result.data);
      } else {
        console.warn("No se encontraron cursos para este maestro.");
      }
    } catch (error) {
      console.error("Error al obtener cursos:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mis Grupos</Text>
        <TouchableOpacity onPress={cerrarSesion}>
          <Text style={styles.logout}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.centered}>
        <TouchableOpacity
          onPress={() => setShowAddGroup(true)}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>Agregar grupo</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        {groups && groups.length > 0 ? (
          groups.map((group, index) => <Group key={index} data={group} update={obtenerCursos}/>)
        ) : (
          <View style={{ marginTop: 50, alignItems: "center" }}>
            <Text style={{ fontSize: 16, color: "#6c757d" }}>
              No tienes grupos actualmente
            </Text>
          </View>
        )}
      </ScrollView>

      {showAddGroup && (
        <AddGroupModal
          visible={showAddGroup}
          onClose={() => setShowAddGroup(false)}
          update={obtenerCursos}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBE9E7",
  },
  header: {
    backgroundColor: "#8B0000",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 10,
    margin: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  logout: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  centered: {
    marginBottom: 16,
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#A52A2A",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 120,
    paddingTop: 8,
  },
});

export default MyGroups;
