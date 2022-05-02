import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native";
import ProfilePicture from "../components/ProfilePicture";

const NewTweetScreen = () => {
  const [tweet, setTweet] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigation = useNavigation()

  const onPostTweet = () => {
    console.warn(`Posting ${tweet} and image ${imageUrl}`);
  };

  const onClose = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign name="close" size={30} color={Colors.light.tint} onPress={onClose} />
        <TouchableOpacity style={styles.button} onPress={onPostTweet}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture image="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg" />
        <View style={styles.inputContainer}>
          <TextInput
            value={tweet}
            onChangeText={setTweet}
            multiline={true}
            numberOfLines={2}
            style={styles.tweetInput}
            placeholder="What's happening?"
          />
          <TextInput
            value={imageUrl}
            onChangeText={setImageUrl}
            numberOfLines={2}
            style={styles.imageInput}
            placeholder="Image url(Optional)"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewTweetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: StatusBar.currentHeight,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  newTweetContainer: {
    flexDirection: "row",
    padding: 15,
  },
  inputContainer: {
    flex: 1,
    marginLeft: 10,
  },
  tweetInput: {
    fontSize: 20,
    backgroundColor: "yellow",
    // marginVertical: 0
    // alignItems: "flex-start",
    // padding: 5
    // height: 100,
    // maxHeight: 300,
  },
  imageInput: {
    // backgroundColor: "blue",
  },
});
