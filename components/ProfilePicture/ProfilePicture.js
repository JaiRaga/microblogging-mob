import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ProfilePicture = ({ image, size = 50 }) => {
  return (
    <Image
      source={{ uri: image }}
      style={{ width: size, height: size, borderRadius: size }}
    />
  );
};

export default ProfilePicture;
