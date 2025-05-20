import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import Login from "../components/login/Login.jsx";  
import Register from "../components/login/Register.jsx"; 
import MyGroups from "../components/groups/MyGroups.jsx"
import Index from "./index.jsx";
import Consult from "../components/web/Consult.jsx"
import MenuGroup from "../components/groups/MenuGroup.jsx"
import ListaAsistencia from "../components/groups/ListaAsistencia.jsx"
import BuscarAlumno from "../components/groups/BuscarAlumno.jsx"
import AsistenciaPasoAPaso from "../components/groups/AsistenciaPasoAPaso.jsx"

const Stack = createStackNavigator();

export default function AppNavigator() {


  return (
      <Stack.Navigator initialRouteName={Platform.OS == "web"?"Consult" : "Login"}>
        <Stack.Screen name="Index" component={Index} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="MyGroups" component={MyGroups} options={{ headerShown: false }}/>
        <Stack.Screen name="Consult" component={Consult} options={{ headerShown: false }}/>
        <Stack.Screen name="MenuGroup" component={MenuGroup} options={{ headerShown: false }}/>
        <Stack.Screen name="ListaAsistencia" component={ListaAsistencia} options={{ headerShown: false }}/>
        <Stack.Screen name="BuscarAlumno" component={BuscarAlumno} options={{ headerShown: false }}/>
        <Stack.Screen name="AsistenciaPasoAPaso" component={AsistenciaPasoAPaso} options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}
