import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import tweets from "../../assets/data/tweets";
import Tweet from '../Tweet';

const Feed = () => {
  return (
    // <Text>{tweets ? "Loaded" : "Loading..."}</Text>
    <FlatList
      data={tweets}
      renderItem={({ item }) => <Tweet tweet={item} />}
      keyExtractor={(item) => item._id}
    />
  );
};
export default Feed;

const styles = StyleSheet.create({});
