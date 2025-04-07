import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/login/Login.jsx";  
import Register from "../components/login/Register.jsx"; 
import MyGroups from "../components/groups/MyGroups.jsx"
import Index from "./Index.jsx";
import Consult from "../components/web/Consult.jsx"

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="MyGroups" component={MyGroups} options={{ headerShown: false }}/>
        <Stack.Screen name="Consult" component={Consult} options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}
