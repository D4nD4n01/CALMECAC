import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/AppNavigator"; // Asegúrate de que el path es correcto

export default function App() {

  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}
