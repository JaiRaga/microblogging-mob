import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import LeftContainer from './LeftContainer';
import MainContainer from './MainContainer';

const Tweet = ({ tweet }) => {
  return (
    <View style={styles.container}>
      {/* Left container */}
      <LeftContainer avatar={tweet.user.image} />

      {/* Main container */}
      <MainContainer tweet={tweet} />
    </View>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // flexWrap: "wrap",
    padding: 10,
    borderBottomWidth: 0.6,
    borderBottomColor: 'lightgrey',
    // backgroundColor: "blue"
  },
});
