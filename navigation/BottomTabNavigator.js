import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Home from "../components/Home";
import Search from "../components/Search";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-search" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-notifications-outline" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-mail" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
