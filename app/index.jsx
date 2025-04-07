import { useEffect } from "react";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
  const navigation = useNavigation();
  const isWeb = Platform.OS === "web";

  useEffect(() => {
    if (isWeb) {
      navigation.replace("Consult"); // redirige a la pantalla web
    } else {
      //Alert("ventana móvil")
      navigation.replace("Login"); // redirige a Login en móvil
    }
  }, []);

  return null; // No muestra nada porque redirige
}