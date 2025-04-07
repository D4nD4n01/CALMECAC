import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Register = ({}) => {

  const navigation = useNavigation();

  const reedirigir = () =>{
    navigation.replace("Login");
  }
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E3F2FD",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
      }}
    >
      <View
        style={{
          backgroundColor:"#2196F3",
          width: "100%",
          alignItems: "center",
          paddingVertical: 30,
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Registro
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "white",
          width:"85%",
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
            color:"#0D47A1",
          }}
        >
          Crear Cuenta
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
          placeholder="Ingrese su nombre"
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
            backgroundColor:"#0D47A1",
            paddingVertical: 10,
            borderRadius: 5,
            alignItems: "center",
          }}
          onPress={reedirigir}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Registrarse
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
