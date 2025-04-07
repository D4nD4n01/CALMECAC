import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import logo from "../../assets/images/logo.jpg";
import Loading from "../../utils/Loading"

const Login = () => {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const acount = [
    { userID: 1, user: "Memin", pass: "Memin" },
    { userID: 2, user: "Arandez", pass: "Arancel" },
    { userID: 3, user: "Pulido", pass: "qtal" },
    { userID: 4, user: "prueba", pass: "123" },
  ];

  const guardarUserID = async (id) => {
    try {
      if (Platform.OS === "web") {
        localStorage.setItem("userID", id.toString());
      } else {
        await AsyncStorage.setItem("userID", id.toString());
      }
    } catch (error) {
      console.error("Error guardando userID:", error);
    }
  };

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
    const verificarSesion = async () => {
      setLoading(true)
      const userID = await obtenerUserID();
      if (userID) {
        setLoading(false);
        navigation.replace("MyGroups"); // Reemplazar para no regresar a login
      }
      setLoading(false);
    };

    verificarSesion();
  }, []);

  const ingresar = async () => {
    setLoading(true)
    const validUser = acount.find(
      (account) => account.user === usuario && account.pass === password
    );

    if (validUser) {
      await guardarUserID(validUser.userID);
      setUsuario("");
      setPassword("");
      setLoading(false)
      navigation.replace("MyGroups");
    } else {
      setLoading(false)
      alert("Usuario o contraseña incorrectos.");
    }
  };

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#E3F2FD", justifyContent: "center", alignItems: "center" }}>

      
      <View style={{ backgroundColor: "#2196F3", width: "100%", alignItems: "center", paddingVertical: 30 }}>
        <Image source={logo} style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: "gray" }} />
      </View>

      <View style={{ backgroundColor: "white", width: "85%", padding: 20, borderRadius: 10, elevation: 5 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 20, color: "#0D47A1" }}>
          Inicio de Sesión
        </Text>

        <TextInput
          style={{ height: 40, borderWidth: 1, borderColor: "#ccc", borderRadius: 5, paddingHorizontal: 10, marginBottom: 15 }}
          placeholder="Ingrese su correo"
          placeholderTextColor="#666"
          value={usuario}
          onChangeText={setUsuario}
        />

        <TextInput
          style={{ height: 40, borderWidth: 1, borderColor: "#ccc", borderRadius: 5, paddingHorizontal: 10, marginBottom: 15 }}
          placeholder="Ingrese su contraseña"
          secureTextEntry
          placeholderTextColor="#666"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={{ backgroundColor: "#0D47A1", paddingVertical: 10, borderRadius: 5, alignItems: "center" }}
          onPress={ingresar}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Acceder</Text>
        </TouchableOpacity>

        <Text style={{ textAlign: "center", marginTop: 10, fontSize: 14, color: "black" }}>
          ¿No tienes cuenta?{" "}
          <Text style={{ color: "#0D47A1", fontWeight: "bold" }} onPress={() => navigation.navigate("Register")}>
            Regístrate
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
