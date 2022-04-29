import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment"
import Footer from "./Footer";

const MainContainer = ({ tweet }) => {
  return (
    <View style={styles.tweetContainer}>
      {/* username */}
      <View style={styles.tweetHeaderContainer}>
        <View style={styles.tweetHeaderText}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>@{tweet.user.username}</Text>
          <Text style={styles.dot}>&#8226;</Text>
          <Text style={styles.createdAt}>{moment(tweet.createdAt).fromNow()}</Text>
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
        {!!tweet.image && <Image style={styles.image} source={{ uri: tweet.image }} />}
      </View>

      {/* tweet footer */}
      <Footer tweet={tweet} />
    </View>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  tweetContainer: {
    flex: 1,
    marginHorizontal: 10
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
    marginRight: 5,
    fontWeight: "bold",
  },
  username: {
    marginRight: 5,
    color: "grey",
  },
  dot: {
    marginRight: 5,
    color: "grey"
  },
  createdAt: {
    marginRight: 5,
    color: "grey",
  },
  showMoreIcon: {
    // marginLeft: "auto",
  },
  contentcontainer: {
    // backgroundColor: "green",
  },
  content: {
    marginTop: 5,
    lineHeight: 18
    // backgroundColor: "pink",
  },
  image: {
    marginVertical: 10,
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 15,
    overflow: "hidden"
  }
});
