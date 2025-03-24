import { Platform } from "react-native";
import Login from "../../components/login/Login.jsx";

export default function HomeScreen() {
  const isWeb = Platform.OS === "web"; // Detecta si es web o móvil

  const acount = [
    {
      user:"Memin@gmail.com",
      pass:"meminpinguin"
    },
    {
      user:"Arandez@gmail.com",
      pass:"Arancel"
    },
    {
      user:"Pulido@gmail.com",
      pass:"qtal"
    },
  ]
      
  

  return <Login isWeb={isWeb} acount = {acount}/>;
}
