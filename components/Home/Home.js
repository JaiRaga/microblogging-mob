import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Tweet from "../Tweet";
import tweets from "../../assets/data/tweets"

const Home = () => {
  return (
    <View style={styles.container}>
      <Tweet tweet={tweets[0]} />
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
  },
});
