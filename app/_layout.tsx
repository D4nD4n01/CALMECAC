import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/login/Login.jsx";  
import Register from "../components/login/Register.jsx"; 
import MyGroups from "../components/groups/MyGroups.jsx"

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MyGroups" component={MyGroups} />
      </Stack.Navigator>
  );
}
