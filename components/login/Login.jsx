import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Login = ({ isWeb, acount }) => {

  const navigation = useNavigation();
  const E6CCE6 = "#000";
  let suma = 5+ 5;
  let resta = 15 - suma

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isWeb ? E6CCE6 : "#E3F2FD", // Morado claro en web, azul claro en móvil
        justifyContent: "center",
        alignItems: "center",
        padding: isWeb ? 50 : 0,
      }}
    >
      {/* Logo */}
      <View
        style={{
          backgroundColor: isWeb ? "#4B0082" : "#2196F3", // Morado oscuro en web, azul en móvil
          width: "100%",
          alignItems: "center",
          paddingVertical: 30,
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            backgroundColor: "gray",
            borderRadius: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Logo</Text>
        </View>
      </View>

      {/* Contenedor del formulario */}
      <View
        style={{
          backgroundColor: "white",
          width: isWeb ? "40%" : "85%",
          padding: 20,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
            color: isWeb ? "#4B0082" : "#0D47A1",
          }}
        >
          Inicio de Sesión
        </Text>

        <TextInput
          style={{
            width: "100%",
            height: 40,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            paddingHorizontal: 10,
            marginBottom: 15,
          }}
          placeholder="Ingrese su correo"
          placeholderTextColor="#666"
        />

        <TextInput
          style={{
            width: "100%",
            height: 40,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            paddingHorizontal: 10,
            marginBottom: 15,
          }}
          placeholder="Ingrese su contraseña"
          secureTextEntry
          placeholderTextColor="#666"
        />

        <TouchableOpacity
          style={{
            backgroundColor: isWeb ? "#4B0082" : "#0D47A1",
            paddingVertical: 10,
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Acceder
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            fontSize: 14,
            color: "black",
          }}
        >
          ¿No tienes cuenta?{" "}
          <Text
            style={{
              color: isWeb ? "#4B0082" : "#0D47A1",
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate("Register")}
          >
            Regístrate
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
