// DetalleGrupo.js
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const alumnos = [
  { "idGrupo": 1, "idEstudiante": 1, "StrNombre": "Juan Pablo", "intNumeroLista": 1 },
  { "idGrupo": 1, "idEstudiante": 2, "StrNombre": "Maria Fernanda", "intNumeroLista": 2 },
  { "idGrupo": 1, "idEstudiante": 3, "StrNombre": "Pedro Luis", "intNumeroLista": 3 },
  { "idGrupo": 1, "idEstudiante": 4, "StrNombre": "Emanuel Jose", "intNumeroLista": 4 },
  { "idGrupo": 1, "idEstudiante": 5, "StrNombre": "Ana Sofia", "intNumeroLista": 5 },
  { "idGrupo": 1, "idEstudiante": 6, "StrNombre": "David Samuel", "intNumeroLista": 6 },
  { "idGrupo": 1, "idEstudiante": 7, "StrNombre": "Daniel Noah", "intNumeroLista": 7 },
  { "idGrupo": 1, "idEstudiante": 8, "StrNombre": "Perla Luz", "intNumeroLista": 8 },

  { "idGrupo": 2, "idEstudiante": 9, "StrNombre": "Juan Pablo", "intNumeroLista": 1 },
  { "idGrupo": 2, "idEstudiante": 10, "StrNombre": "Sara Luz", "intNumeroLista": 2 },
  { "idGrupo": 2, "idEstudiante": 11, "StrNombre": "Maria Fernanda", "intNumeroLista": 3 },
  { "idGrupo": 2, "idEstudiante": 12, "StrNombre": "Pedro Luis", "intNumeroLista": 4 },
  { "idGrupo": 2, "idEstudiante": 13, "StrNombre": "Liam David", "intNumeroLista": 5 },
  { "idGrupo": 2, "idEstudiante": 14, "StrNombre": "Sofia Ana", "intNumeroLista": 6 },
  { "idGrupo": 2, "idEstudiante": 15, "StrNombre": "Samuel Jose", "intNumeroLista": 7 },
  { "idGrupo": 2, "idEstudiante": 16, "StrNombre": "Noah Emanuel", "intNumeroLista": 8 },

  { "idGrupo": 3, "idEstudiante": 17, "StrNombre": "Juan Pablo", "intNumeroLista": 1 },
  { "idGrupo": 3, "idEstudiante": 18, "StrNombre": "Maria Fernanda", "intNumeroLista": 2 },
  { "idGrupo": 3, "idEstudiante": 19, "StrNombre": "Pedro Luis", "intNumeroLista": 3 },
  { "idGrupo": 3, "idEstudiante": 20, "StrNombre": "Emanuel Jose", "intNumeroLista": 4 },
  { "idGrupo": 3, "idEstudiante": 21, "StrNombre": "Sara Ana", "intNumeroLista": 5 },
  { "idGrupo": 3, "idEstudiante": 22, "StrNombre": "David Noah", "intNumeroLista": 6 },
  { "idGrupo": 3, "idEstudiante": 23, "StrNombre": "Daniel Samuel", "intNumeroLista": 7 },
  { "idGrupo": 3, "idEstudiante": 24, "StrNombre": "Liam Luz", "intNumeroLista": 8 },

  { "idGrupo": 4, "idEstudiante": 25, "StrNombre": "Juan Pablo", "intNumeroLista": 1 },
  { "idGrupo": 4, "idEstudiante": 26, "StrNombre": "Maria Fernanda", "intNumeroLista": 2 },
  { "idGrupo": 4, "idEstudiante": 27, "StrNombre": "Pedro Luis", "intNumeroLista": 3 },
  { "idGrupo": 4, "idEstudiante": 28, "StrNombre": "Sofia Sara", "intNumeroLista": 4 },
  { "idGrupo": 4, "idEstudiante": 29, "StrNombre": "Noah David", "intNumeroLista": 5 },
  { "idGrupo": 4, "idEstudiante": 30, "StrNombre": "Daniel Jose", "intNumeroLista": 6 },
  { "idGrupo": 4, "idEstudiante": 31, "StrNombre": "Ana Fernanda", "intNumeroLista": 7 },
  { "idGrupo": 4, "idEstudiante": 32, "StrNombre": "Emanuel Liam", "intNumeroLista": 8 },

  { "idGrupo": 5, "idEstudiante": 33, "StrNombre": "Juan Pablo", "intNumeroLista": 1 },
  { "idGrupo": 5, "idEstudiante": 34, "StrNombre": "Sara Luz", "intNumeroLista": 2 },
  { "idGrupo": 5, "idEstudiante": 35, "StrNombre": "Maria Fernanda", "intNumeroLista": 3 },
  { "idGrupo": 5, "idEstudiante": 36, "StrNombre": "Pedro Luis", "intNumeroLista": 4 },
  { "idGrupo": 5, "idEstudiante": 37, "StrNombre": "David Samuel", "intNumeroLista": 5 },
  { "idGrupo": 5, "idEstudiante": 38, "StrNombre": "Daniel Noah", "intNumeroLista": 6 },
  { "idGrupo": 5, "idEstudiante": 39, "StrNombre": "Perla Ana", "intNumeroLista": 7 },
  { "idGrupo": 5, "idEstudiante": 40, "StrNombre": "Liam Emanuel", "intNumeroLista": 8 },

  { "idGrupo": 6, "idEstudiante": 41, "StrNombre": "Juan Pablo", "intNumeroLista": 1 },
  { "idGrupo": 6, "idEstudiante": 42, "StrNombre": "Maria Fernanda", "intNumeroLista": 2 },
  { "idGrupo": 6, "idEstudiante": 43, "StrNombre": "Pedro Luis", "intNumeroLista": 3 },
  { "idGrupo": 6, "idEstudiante": 44, "StrNombre": "Emanuel Jose", "intNumeroLista": 4 },
  { "idGrupo": 6, "idEstudiante": 45, "StrNombre": "Ana Sofia", "intNumeroLista": 5 },
  { "idGrupo": 6, "idEstudiante": 46, "StrNombre": "David Samuel", "intNumeroLista": 6 },
  { "idGrupo": 6, "idEstudiante": 47, "StrNombre": "Daniel Noah", "intNumeroLista": 7 },
  { "idGrupo": 6, "idEstudiante": 48, "StrNombre": "Perla Luz", "intNumeroLista": 8 },

  { "idGrupo": 7, "idEstudiante": 49, "StrNombre": "Juan Pablo", "intNumeroLista": 1 },
  { "idGrupo": 7, "idEstudiante": 50, "StrNombre": "Maria Fernanda", "intNumeroLista": 2 },
  { "idGrupo": 7, "idEstudiante": 51, "StrNombre": "Pedro Luis", "intNumeroLista": 3 },
  { "idGrupo": 7, "idEstudiante": 52, "StrNombre": "Emanuel Jose", "intNumeroLista": 4 },
  { "idGrupo": 7, "idEstudiante": 53, "StrNombre": "Sara Ana", "intNumeroLista": 5 },
  { "idGrupo": 7, "idEstudiante": 54, "StrNombre": "David Noah", "intNumeroLista": 6 },
  { "idGrupo": 7, "idEstudiante": 55, "StrNombre": "Daniel Samuel", "intNumeroLista": 7 },
  { "idGrupo": 7, "idEstudiante": 56, "StrNombre": "Liam Luz", "intNumeroLista": 8 },

  { "idGrupo": 8, "idEstudiante": 57, "StrNombre": "Juan Pablo", "intNumeroLista": 1 },
  { "idGrupo": 8, "idEstudiante": 58, "StrNombre": "Maria Fernanda", "intNumeroLista": 2 },
  { "idGrupo": 8, "idEstudiante": 59, "StrNombre": "Pedro Luis", "intNumeroLista": 3 },
  { "idGrupo": 8, "idEstudiante": 60, "StrNombre": "Sofia Sara", "intNumeroLista": 4 },
  { "idGrupo": 8, "idEstudiante": 61, "StrNombre": "Noah David", "intNumeroLista": 5 },
  { "idGrupo": 8, "idEstudiante": 62, "StrNombre": "Daniel Jose", "intNumeroLista": 6 },
  { "idGrupo": 8, "idEstudiante": 63, "StrNombre": "Ana Fernanda", "intNumeroLista": 7 },
  { "idGrupo": 8, "idEstudiante": 64, "StrNombre": "Emanuel Liam", "intNumeroLista": 8 },

  { "idGrupo": 9, "idEstudiante": 65, "StrNombre": "Sara Luz", "intNumeroLista": 1 },
  { "idGrupo": 9, "idEstudiante": 66, "StrNombre": "Maria Fernanda", "intNumeroLista": 2 },
  { "idGrupo": 9, "idEstudiante": 67, "StrNombre": "Pedro Luis", "intNumeroLista": 3 },
  { "idGrupo": 9, "idEstudiante": 68, "StrNombre": "David Samuel", "intNumeroLista": 4 },
  { "idGrupo": 9, "idEstudiante": 69, "StrNombre": "Daniel Noah", "intNumeroLista": 5 },
  { "idGrupo": 9, "idEstudiante": 70, "StrNombre": "Perla Ana", "intNumeroLista": 6 },
  { "idGrupo": 9, "idEstudiante": 71, "StrNombre": "Liam Emanuel", "intNumeroLista": 7 },
  { "idGrupo": 9, "idEstudiante": 72, "StrNombre": "Juan Pablo", "intNumeroLista": 8 },

  { "idGrupo": 10, "idEstudiante": 73, "StrNombre": "Maria Fernanda", "intNumeroLista": 1 },
  { "idGrupo": 10, "idEstudiante": 74, "StrNombre": "Pedro Luis", "intNumeroLista": 2 },
  { "idGrupo": 10, "idEstudiante": 75, "StrNombre": "Emanuel Jose", "intNumeroLista": 3 },
  { "idGrupo": 10, "idEstudiante": 76, "StrNombre": "Ana Sofia", "intNumeroLista": 4 },
  { "idGrupo": 10, "idEstudiante": 77, "StrNombre": "David Samuel", "intNumeroLista": 5 },
  { "idGrupo": 10, "idEstudiante": 78, "StrNombre": "Daniel Noah", "intNumeroLista": 6 },
  { "idGrupo": 10, "idEstudiante": 79, "StrNombre": "Perla Luz", "intNumeroLista": 7 },
  { "idGrupo": 10, "idEstudiante": 80, "StrNombre": "Juan Pablo", "intNumeroLista": 8 }
];

const MenuGroup = ({ navigation }) => {

  const [groupId,setGroupId] = useState(0);

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


  useEffect(() => {
    let aux = obtenerUserID()
    setGroupId(aux)
    console.log("parametros: ", groupId)
    const estudiantesGrupo = alumnos.filter(a => a.idGrupo === groupId);
    //console.log(alumnos.filter(a => a.idGrupo == idGrupo))
    //console.log("lista alumnos: ",alumnos)
    //console.log("Grupo: ",idGrupo)
    //console.log("estudiantes: ",estudiantesGrupo)
  }, []);


  const handleVerAsistencia = () => {
    navigation.navigate("ListaAsistencia", {});
  };

  const handleBuscarAlumno = () => {
    navigation.navigate("BuscarAlumno", {});
  };


  return (
    <View style={{ flex: 1, backgroundColor: "#FFF5F5", padding: 20 }}>
      
      <View style={{
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
      }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>
          Grupo: {/* nombre */}
        </Text>
      </View>
  
      <View style={{
        backgroundColor: "white",
        padding: 20,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
      }}>
        <TouchableOpacity
          onPress={handleVerAsistencia}
          style={{
            backgroundColor: "#A52A2A", // botón rojo marrón
            paddingVertical: 12,
            borderRadius: 8,
            marginBottom: 15,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Ver Asistencia</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          onPress={handleBuscarAlumno}
          style={{
            backgroundColor: "#8B0000", // botón morena fuerte
            paddingVertical: 12,
            borderRadius: 8,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Buscar Alumno</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
};

export default MenuGroup;
