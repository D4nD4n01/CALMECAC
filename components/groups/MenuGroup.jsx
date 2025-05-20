import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import paths from "../../paths"

const MenuGroup = ({ navigation }) => {
  const [groupId, setGroupId] = useState(0);
  const [curso, setCurso] = useState(null);


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

  useEffect(() => {
    obtenerCurso()
  }, [groupId]);

  const obtenerCurso = async () => {
    console.log("grupo: ",groupId)
    try {
      const response = await fetch(paths.URL + paths.getCOURSE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ idCourse: groupId }) // 👈 Aquí mandas el ID del grupo
      });

      const data = await response.json();
      console.log("data: ", data)
      if (data.success) {
        setCurso(data.result); // 👈 Aquí guardas el curso en estado
      } else {
        console.error("Curso no encontrado");
      }
    } catch (error) {
      console.error("Error al obtener el curso:", error);
    }
  };


  const handleVerAsistencia = () => {
    navigation.navigate("ListaAsistencia", {});
  };

  const handleBuscarAlumno = () => {
    navigation.navigate("BuscarAlumno", {});
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF5F5", padding: 20 }}>
      {/* Botón para salir */}

      <View
        style={{
          backgroundColor: "#6B0000",
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

        {curso && (
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>
            Curso: {curso.strSubject}
          </Text>
        )}


        <TouchableOpacity
          onPress={salirDelGrupo}
          style={{
            position: "absolute",
            top: 18,
            right: 20,
            backgroundColor: "#6B0000",
            borderRadius: 10,
            padding: 5,
            zIndex: 10
          }}
        >
          <Text style={{
            color: "#FBE9E7",
            fontWeight: "bold",
            fontSize: 18,
          }}>X</Text>
          {/* color morena más fuerte para que destaque */}
        </TouchableOpacity>
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
