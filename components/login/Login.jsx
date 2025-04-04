import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Importar la imagen del logo
import logo from "../../assets/images/logo.jpg";  // Asegúrate de que la ruta sea correcta

const Login = ({ isWeb }) => {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState("");  // Guardar el correo
  const [password, setPassword] = useState("");  // Guardar la contraseña

  const acount = [
    { user: "Memin@gmail.com", pass: "Memin" },
    { user: "Arandez@gmail.com", pass: "Arancel" },
    { user: "Pulido@gmail.com", pass: "qtal" },
  ];

  const ingresar = () => {
    // Validar si las credenciales coinciden con alguna cuenta
    const validUser = acount.find(
      (account) => account.user === usuario && account.pass === password
    );

    // Si se encontró un usuario y la contraseña es correcta, navega a "MyGroups"
    if (validUser) {
      navigation.navigate("MyGroups");
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isWeb ? "#E6CCE6" : "#E3F2FD", // Morado claro en web, azul claro en móvil
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
        {/* Agregar la imagen del logo */}
        <Image
          source={logo}  // Usa la variable `logo` que importaste
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: "gray",  // Si no tienes la imagen disponible, un color de fondo para el círculo
          }}
        />
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
          value={usuario}
          onChangeText={setUsuario}  // Actualiza el estado del correo
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
          value={password}
          onChangeText={setPassword}  // Actualiza el estado de la contraseña
        />

        <TouchableOpacity
          style={{
            backgroundColor: isWeb ? "#4B0082" : "#0D47A1",
            paddingVertical: 10,
            borderRadius: 5,
            alignItems: "center",
          }}
          onPress={ingresar}  // Llama a la función ingresar al presionar el botón
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
