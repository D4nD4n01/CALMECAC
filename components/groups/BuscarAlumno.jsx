import React, { useState } from "react";
import { View, TextInput, Text, FlatList, TouchableOpacity } from "react-native";

const estudiantes = [
  { "idGrupo": 1, "idEstudiante": 1, "StrNombre": "Juan Pablo", "intNumeroLista": 1 },
  { "idGrupo": 1, "idEstudiante": 2, "StrNombre": "Maria Fernanda", "intNumeroLista": 2 },
  { "idGrupo": 1, "idEstudiante": 3, "StrNombre": "Pedro Luis", "intNumeroLista": 3 },
  { "idGrupo": 1, "idEstudiante": 4, "StrNombre": "Emanuel Jose", "intNumeroLista": 4 },
  { "idGrupo": 1, "idEstudiante": 5, "StrNombre": "Ana Sofia", "intNumeroLista": 5 },
  { "idGrupo": 1, "idEstudiante": 6, "StrNombre": "David Samuel", "intNumeroLista": 6 },
  { "idGrupo": 1, "idEstudiante": 7, "StrNombre": "Daniel Noah", "intNumeroLista": 7 },
  { "idGrupo": 1, "idEstudiante": 8, "StrNombre": "Perla Luz", "intNumeroLista": 8 },

  { "idGrupo": 2, "idEstudiante": 9, "StrNombre": "Said Alejandro", "intNumeroLista": 1 },
  { "idGrupo": 2, "idEstudiante": 10, "StrNombre": "Sara Luz", "intNumeroLista": 2 },
  { "idGrupo": 2, "idEstudiante": 11, "StrNombre": "Maria Fernanda", "intNumeroLista": 3 },
  { "idGrupo": 2, "idEstudiante": 12, "StrNombre": "Pedro Luis", "intNumeroLista": 4 },
  { "idGrupo": 2, "idEstudiante": 13, "StrNombre": "Liam David", "intNumeroLista": 5 },
  { "idGrupo": 2, "idEstudiante": 14, "StrNombre": "Sofia Ana", "intNumeroLista": 6 },
  { "idGrupo": 2, "idEstudiante": 15, "StrNombre": "Samuel Jose", "intNumeroLista": 7 },
  { "idGrupo": 2, "idEstudiante": 16, "StrNombre": "Noah Emanuel", "intNumeroLista": 8 },

  { "idGrupo": 3, "idEstudiante": 17, "StrNombre": "Quico Tercero", "intNumeroLista": 1 },
  { "idGrupo": 3, "idEstudiante": 18, "StrNombre": "Maria Fernanda", "intNumeroLista": 2 },
  { "idGrupo": 3, "idEstudiante": 19, "StrNombre": "Pedro Luis", "intNumeroLista": 3 },
  { "idGrupo": 3, "idEstudiante": 20, "StrNombre": "Emanuel Jose", "intNumeroLista": 4 },
  { "idGrupo": 3, "idEstudiante": 21, "StrNombre": "Sara Ana", "intNumeroLista": 5 },
  { "idGrupo": 3, "idEstudiante": 22, "StrNombre": "David Noah", "intNumeroLista": 6 },
  { "idGrupo": 3, "idEstudiante": 23, "StrNombre": "Daniel Samuel", "intNumeroLista": 7 },
  { "idGrupo": 3, "idEstudiante": 24, "StrNombre": "Liam Luz", "intNumeroLista": 8 },

  { "idGrupo": 4, "idEstudiante": 25, "StrNombre": "Karla Estrada", "intNumeroLista": 1 },
  { "idGrupo": 4, "idEstudiante": 26, "StrNombre": "Maria Fernanda", "intNumeroLista": 2 },
  { "idGrupo": 4, "idEstudiante": 27, "StrNombre": "Pedro Luis", "intNumeroLista": 3 },
  { "idGrupo": 4, "idEstudiante": 28, "StrNombre": "Sofia Sara", "intNumeroLista": 4 },
  { "idGrupo": 4, "idEstudiante": 29, "StrNombre": "Noah David", "intNumeroLista": 5 },
  { "idGrupo": 4, "idEstudiante": 30, "StrNombre": "Daniel Jose", "intNumeroLista": 6 },
  { "idGrupo": 4, "idEstudiante": 31, "StrNombre": "Ana Fernanda", "intNumeroLista": 7 },
  { "idGrupo": 4, "idEstudiante": 32, "StrNombre": "Emanuel Liam", "intNumeroLista": 8 },

  { "idGrupo": 5, "idEstudiante": 33, "StrNombre": "Matias Lerdo", "intNumeroLista": 1 },
  { "idGrupo": 5, "idEstudiante": 34, "StrNombre": "Sara Luz", "intNumeroLista": 2 },
  { "idGrupo": 5, "idEstudiante": 35, "StrNombre": "Maria Fernanda", "intNumeroLista": 3 },
  { "idGrupo": 5, "idEstudiante": 36, "StrNombre": "Pedro Luis", "intNumeroLista": 4 },
  { "idGrupo": 5, "idEstudiante": 37, "StrNombre": "David Samuel", "intNumeroLista": 5 },
  { "idGrupo": 5, "idEstudiante": 38, "StrNombre": "Daniel Noah", "intNumeroLista": 6 },
  { "idGrupo": 5, "idEstudiante": 39, "StrNombre": "Perla Ana", "intNumeroLista": 7 },
  { "idGrupo": 5, "idEstudiante": 40, "StrNombre": "Liam Emanuel", "intNumeroLista": 8 },

  { "idGrupo": 6, "idEstudiante": 41, "StrNombre": "Pedro Aldahir", "intNumeroLista": 1 },
  { "idGrupo": 6, "idEstudiante": 42, "StrNombre": "Maria Fernanda", "intNumeroLista": 2 },
  { "idGrupo": 6, "idEstudiante": 43, "StrNombre": "Pedro Luis", "intNumeroLista": 3 },
  { "idGrupo": 6, "idEstudiante": 44, "StrNombre": "Emanuel Jose", "intNumeroLista": 4 },
  { "idGrupo": 6, "idEstudiante": 45, "StrNombre": "Ana Sofia", "intNumeroLista": 5 },
  { "idGrupo": 6, "idEstudiante": 46, "StrNombre": "David Samuel", "intNumeroLista": 6 },
  { "idGrupo": 6, "idEstudiante": 47, "StrNombre": "Daniel Noah", "intNumeroLista": 7 },
  { "idGrupo": 6, "idEstudiante": 48, "StrNombre": "Perla Luz", "intNumeroLista": 8 },

  { "idGrupo": 7, "idEstudiante": 49, "StrNombre": "Mario Fernando", "intNumeroLista": 1 },
  { "idGrupo": 7, "idEstudiante": 50, "StrNombre": "Maria Fernanda", "intNumeroLista": 2 },
  { "idGrupo": 7, "idEstudiante": 51, "StrNombre": "Pedro Luis", "intNumeroLista": 3 },
  { "idGrupo": 7, "idEstudiante": 52, "StrNombre": "Emanuel Jose", "intNumeroLista": 4 },
  { "idGrupo": 7, "idEstudiante": 53, "StrNombre": "Sara Ana", "intNumeroLista": 5 },
  { "idGrupo": 7, "idEstudiante": 54, "StrNombre": "David Noah", "intNumeroLista": 6 },
  { "idGrupo": 7, "idEstudiante": 55, "StrNombre": "Daniel Samuel", "intNumeroLista": 7 },
  { "idGrupo": 7, "idEstudiante": 56, "StrNombre": "Liam Luz", "intNumeroLista": 8 },

  { "idGrupo": 8, "idEstudiante": 57, "StrNombre": "Francisco Perez", "intNumeroLista": 1 },
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

const BuscarAlumno = ({navigation }) => {
  console.log("estudiantes: ", estudiantes)

  const [busqueda, setBusqueda] = useState("");

  // Filtrar estudiantes según la búsqueda
  const filtrados = estudiantes.filter((item) =>
    item.StrNombre.toLowerCase().includes(busqueda.toLowerCase())
  );

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
          Buscar Alumno
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

      {/* Contenido */}
      <View style={{ padding: 20, flex: 1 }}>

        {/* Input de búsqueda */}
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#6B0000",
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 8,
            marginBottom: 20,
            backgroundColor: "#fff",
            fontSize: 16,
          }}
          placeholder="Escribe el nombre del alumno"
          value={busqueda}
          onChangeText={setBusqueda}
          placeholderTextColor="#aaa"
        />

        {/* Lista de alumnos */}
        <FlatList
          data={filtrados}
          keyExtractor={(item) => item.idEstudiante.toString()}
          renderItem={({ item }) => (
            <View style={{
              backgroundColor: "#FBE9E7",
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderRadius: 8,
              marginBottom: 10,
              elevation: 2,
            }}>
              <Text style={{
                fontSize: 18,
                color: "#6B0000",
                fontWeight: "500",
              }}>
                {item.intNumeroLista}. {item.StrNombre}
              </Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={{
              textAlign: "center",
              marginTop: 20,
              color: "#6B0000",
              fontSize: 16,
            }}>
              No se encontraron alumnos.
            </Text>
          }
        />
      </View>
    </View>
  );
};

export default BuscarAlumno;
