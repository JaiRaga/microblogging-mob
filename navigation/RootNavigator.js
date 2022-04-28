import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import Search from "../components/Search";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}
