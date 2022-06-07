import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Feather, EvilIcons, AntDesign } from '@expo/vector-icons';

const Footer = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="message-circle" size={20} color="grey" />
        <Text style={styles.numbers}>{tweet.numberOfComments}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name="retweet" size={30} color="grey" />
        <Text style={styles.numbers}>{tweet.numberOfRetweets}</Text>
      </View>
      <View style={styles.iconContainer}>
        <AntDesign name="hearto" size={20} color="grey" />
        <Text style={styles.numbers}>{tweet.numberOfLikes}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name="share-google" size={28} color="grey" />
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    // backgroundColor: "yellow"
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: "yellow"
  },
  numbers: {
    color: 'grey',
    marginLeft: 5,
    textAlign: 'center',
  },
});
