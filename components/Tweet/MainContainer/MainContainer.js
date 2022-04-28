import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const MainContainer = ({ tweet }) => {
  return (
    <View style={styles.tweetContainer}>
      {/* username */}
      <View style={styles.tweetHeaderContainer}>
        <View style={styles.tweetHeaderText}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>@{tweet.user.username}</Text>
          <Text style={styles.createdAt}>15s</Text>
        </View>
          <Ionicons
            name="chevron-down"
            style={styles.showMoreIcon}
            size={16}
            color="grey"
          />
      </View>

      {/* content */}
      <View style={styles.contentcontainer}>
        <Text style={styles.content}>{tweet.content}</Text>
        {!!tweet.image && <Image source={{ uri: tweet.image }} />}
      </View>

      {/* tweet footer */}
    </View>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  tweetContainer: {
    flex: 1,
    // backgroundColor: "red",
  },
  tweetHeaderContainer: {
    // backgroundColor: "lime",
    flexDirection: "row",
  justifyContent: "space-between",
    width: "100%",
  },
  tweetHeaderText: {
    flexDirection: "row",
  },
  name: {
    marginHorizontal: 5,
    fontWeight: "bold",
  },
  username: {
    marginHorizontal: 5,
    color: "grey",
  },
  createdAt: {
    marginHorizontal: 5,
    color: "grey",
  },
  showMoreIcon: {
    // marginLeft: "auto",
  },
  contentcontainer: {
    // backgroundColor: "green",
  },
  content: {
    // backgroundColor: "pink",
  },
});
