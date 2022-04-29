import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import tweets from "../../assets/data/tweets";
import Tweet from "../Tweet";

const Feed = () => (
  <FlatList
    data={tweets}
    renderItem={({ item }) => <Tweet tweet={item} />}
    keyExtractor={(item) => item.id}
  />
);
export default Feed;

const styles = StyleSheet.create({});
