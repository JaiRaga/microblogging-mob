import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./BottomTabNavigator";
import Home from "../components/Home";
import Search from "../components/Search";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigation} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
