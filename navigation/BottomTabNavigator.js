import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Home from "../components/Home";
import Search from "../components/Search";
import Notification from "../components/Notification";
import Messages from "../components/Messages";
import ProfilePicture from "../components/ProfilePicture/ProfilePicture";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <Ionicons name="logo-twitter" size={30} color={Colors.light.tint} />
          ),
          headerTitleAlign: "center",
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerLeft: () => (
            <ProfilePicture
              size={40}
              image="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
            />
          ),
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerRight: () => (
            <MaterialCommunityIcons
              name="star-four-points-outline"
              size={24}
              color={Colors.light.tint}
            />
          ),
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
        component={Notification}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ios-notifications-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-mail" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
