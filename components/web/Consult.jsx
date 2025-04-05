import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import logo from "../../assets/images/logo.jpg"; // Asegúrate de que esta ruta esté bien

const Consult = ({ navigation }) => {
  const [numeroControl, setNumeroControl] = useState("");
  const [resultados, setResultados] = useState([]);

  const handleInputChange = (text) => {
    // Solo permitir números (0-9)
    const soloNumeros = text.replace(/[^0-9]/g, "");
    setNumeroControl(soloNumeros);

    // Si el input está vacío, no hacer búsqueda
    if (soloNumeros === "") {
      setResultados([]);
      return;
    }

    // Buscar en el arreglo `numberControl`
    const filteredResults = numberControl.filter(item => item.numeroControl.toString().includes(soloNumeros));
    setResultados(filteredResults);
  };

  const numberControl = [
    {
      idAlumno: 1,
      numeroControl: 25070319,
      grado: 8,
      escuela: 7
    },
    {
      idAlumno: 2,
      numeroControl: 18070320,
      grado: 1,
      escuela: 2
    },
    {
      idAlumno: 3,
      numeroControl: 24070321,
      grado: 3,
      escuela: 5
    },
    {
      idAlumno: 4,
      numeroControl: 21070322,
      grado: 2,
      escuela: 4
    },
    {
      idAlumno: 5,
      numeroControl: 21070323,
      grado: 9,
      escuela: 6
    },
    {
      idAlumno: 6,
      numeroControl: 22080324,
      grado: 6,
      escuela: 8
    },
    {
      idAlumno: 7,
      numeroControl: 22080325,
      grado: 7,
      escuela: 2
    },
    {
      idAlumno: 8,
      numeroControl: 20070326,
      grado: 10,
      escuela: 3
    },
    {
      idAlumno: 9,
      numeroControl: 21070327,
      grado: 4,
      escuela: 9
    },
    {
      idAlumno: 10,
      numeroControl: 23070328,
      grado: 1,
      escuela: 7
    },
    {
      idAlumno: 11,
      numeroControl: 23070329,
      grado: 2,
      escuela: 5
    },
    {
      idAlumno: 12,
      numeroControl: 22080330,
      grado: 8,
      escuela: 4
    },
    {
      idAlumno: 13,
      numeroControl: 21070331,
      grado: 5,
      escuela: 6
    },
    {
      idAlumno: 14,
      numeroControl: 22080332,
      grado: 3,
      escuela: 7
    },
    {
      idAlumno: 15,
      numeroControl: 21070333,
      grado: 4,
      escuela: 8
    },
    {
      idAlumno: 16,
      numeroControl: 22080334,
      grado: 7,
      escuela: 9
    },
    {
      idAlumno: 17,
      numeroControl: 21070319,
      grado: 9,
      escuela: 2  // Repetido número de control en una escuela diferente
    },
    {
      idAlumno: 18,
      numeroControl: 24080336,
      grado: 6,
      escuela: 5
    },
    {
      idAlumno: 19,
      numeroControl: 23070337,
      grado: 10,
      escuela: 3
    },
    {
      idAlumno: 20,
      numeroControl: 21070319,
      grado: 5,
      escuela: 6  // Repetido número de control en una escuela diferente
    }
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E3F2FD",
        alignItems: "center",
        paddingTop: 40,
        paddingHorizontal: 20,
      }}
    >
      {/* Botón Iniciar sesión */}
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          backgroundColor: "#0D47A1",
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 5,
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Iniciar sesión
        </Text>
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={logo}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          marginBottom: 20,
        }}
        resizeMode="contain"
      />

      {/* Título */}
      <Text style={{ fontSize: 20, color: "#0D47A1", marginBottom: 20 }}>
        Ingrese su número de control
      </Text>

      {/* Input */}
      <TextInput
        placeholder="Número de control"
        value={numeroControl}
        onChangeText={handleInputChange}
        keyboardType="numeric" // Para mostrar solo el teclado numérico en móviles
        style={{
          width: "100%",
          borderColor: "#2196F3",
          borderWidth: 2,
          borderRadius: 10,
          padding: 10,
          fontSize: 16,
          backgroundColor: "white",
        }}
      />

      {/* Solo mostrar resultados si hay búsqueda */}
      {numeroControl !== "" && resultados.length > 0 && (
        <ScrollView
          contentContainerStyle={{
            marginTop: 20,
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between", // Para distribuirlos
          }}
        >
          {resultados.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "#BBDEFB",
                padding: 10,
                borderRadius: 10,
                marginVertical: 5,
                borderColor: "#2196F3",
                borderWidth: 2,
                width: "48%",  // Hace que cada tarjeta ocupe el 48% del ancho
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 16, color: "#0D47A1" }}>
                Alumno ID: {item.idAlumno}
              </Text>
              <Text style={{ fontSize: 14, color: "#0D47A1" }}>
                Número de Control: {item.numeroControl}
              </Text>
              <Text style={{ fontSize: 14, color: "#0D47A1" }}>
                Grado: {item.grado}
              </Text>
              <Text style={{ fontSize: 14, color: "#0D47A1" }}>
                Escuela: {item.escuela}
              </Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Consult;
