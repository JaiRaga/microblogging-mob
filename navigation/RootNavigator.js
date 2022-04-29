import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewTweetScreen from "../screen/NewTweetScreen";
import BottomTabNavigation from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewTweet"
        component={NewTweetScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
