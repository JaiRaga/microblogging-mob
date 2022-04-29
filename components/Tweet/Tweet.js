import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Tweet = ({ tweet }) => {
  return (
    <View style={styles.container}>
      {/* Left container */}
      <LeftContainer user={tweet.user} />

      {/* Main container */}
      <MainContainer tweet={tweet} />
    </View>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // flexWrap: "wrap",
    padding: 10,
    borderBottomWidth: 0.6,
    borderBottomColor: "lightgrey",
    // backgroundColor: "blue"
  }
});
