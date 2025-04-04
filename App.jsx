import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/AppNavigator"; // Asegúrate de que el path es correcto
import { Platform } from "react-native";

export default function App() {
  const isWeb = Platform.OS === "web"; 

  const acount = [
    { user: "Memin@gmail.com", pass: "meminpinguin" },
    { user: "Arandez@gmail.com", pass: "Arancel" },
    { user: "Pulido@gmail.com", pass: "qtal" },
  ];
  console.log("Primero: ", isWeb)
  return (
    <NavigationContainer>
      <AppNavigator isWeb={isWeb} acount={acount} />
    </NavigationContainer>
  );
}
