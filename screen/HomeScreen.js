import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Tweet from "../components/Tweet";
import tweets from "../assets/data/tweets";
import Feed from "../components/Feed";
import NewTweetButton from "../components/NewTweetButton";

const Home = () => {
  return (
    <View style={styles.container}>
      <Feed />
      <NewTweetButton />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
    // margin: 10
    // backgroundColor: 'red'
    backgroundColor: "white",
  },
});
