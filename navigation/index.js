import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import RootNavigator from "./RootNavigator";

export default function Navigation({colorScheme}) {
  return (
    <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  )
}