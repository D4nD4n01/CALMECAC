import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import logo from "../../assets/images/logo.jpg"; // Asegúrate de que esta ruta esté bien

const Consult = ({ navigation }) => {
  const [numeroControl, setNumeroControl] = useState("");

  const handleInputChange = (text) => {
    // Solo permitir números (0-9)
    const soloNumeros = text.replace(/[^0-9]/g, "");
    setNumeroControl(soloNumeros);
  };

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
    </View>
  );
};

export default Consult;
