import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/AppNavigator"; // Asegúrate de que el path es correcto
import { Platform } from "react-native";

export default function App() {

  console.log("Primero: ", isWeb)
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}
