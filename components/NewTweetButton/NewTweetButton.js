import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const NewTweetButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("NewTweet");
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
    >
      <MaterialCommunityIcons name="feather" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default NewTweetButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.tint,
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
