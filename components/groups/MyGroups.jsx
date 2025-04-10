import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Group from "./Group.jsx"

import AddGroupModal from "./AddGroupModal";

const MyGroups = () => {
  const navigation = useNavigation();
  const [groups, setGroups] = useState([]);
  const [showAddGroup, setShowAddGroup] = useState(false);

  const gruposData = [
    { IdProfesor: 1, IdGroup: 1, Groups: { IntGrado: 3, StrHour: "9:00-10:00", StrSalon: "FFA" } },
    { IdProfesor: 1, IdGroup: 2, Groups: { IntGrado: 2, StrHour: "10:00-11:00", StrSalon: "FF1" } },
    { IdProfesor: 1, IdGroup: 3, Groups: { IntGrado: 1, StrHour: "8:00-9:00", StrSalon: "FF9" } },
    { IdProfesor: 2, IdGroup: 4, Groups: { IntGrado: 3, StrHour: "11:00-12:00", StrSalon: "FFE" } },
    { IdProfesor: 2, IdGroup: 5, Groups: { IntGrado: 2, StrHour: "7:00-8:00", StrSalon: "FFA" } },
    { IdProfesor: 3, IdGroup: 6, Groups: { IntGrado: 1, StrHour: "12:00-13:00", StrSalon: "FF9" } },
    { IdProfesor: 3, IdGroup: 7, Groups: { IntGrado: 2, StrHour: "13:00-14:00", StrSalon: "FF1" } },
    { IdProfesor: 3, IdGroup: 8, Groups: { IntGrado: 3, StrHour: "14:00-15:00", StrSalon: "FFE" } },
    { IdProfesor: 1, IdGroup: 9, Groups: { IntGrado: 2, StrHour: "15:00-16:00", StrSalon: "FF1" } },
    { IdProfesor: 2, IdGroup: 10, Groups: { IntGrado: 1, StrHour: "16:00-17:00", StrSalon: "FF9" } },
  ];

  const obtenerUserID = async () => {
    try {
      return Platform.OS === "web" ? localStorage.getItem("userID") : await AsyncStorage.getItem("userID");
    } catch (error) {
      console.error("Error al obtener userID:", error);
    }
  };

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
    const filtrarGrupos = async () => {
      const id = await obtenerUserID();
      if (id) {
        const filtrados = gruposData
          .filter((g) => g.IdProfesor === parseInt(id))
          .map((g) => ({
            nombre: `Grado ${g.Groups.IntGrado}`,
            salon: g.Groups.StrSalon,
            hora: g.Groups.StrHour,
            IdGroup: g.IdGroup
          }));
        setGroups(filtrados);
      }
    };
    filtrarGrupos();
  }, []);

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
        <AddGroupModal visible={showAddGroup} onClose={() => setShowAddGroup(false)} />
      )}
    </View>
  );
  
};

export default MyGroups;
