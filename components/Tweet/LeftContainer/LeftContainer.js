import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ProfilePicture from "../../ProfilePicture";

const LeftContainer = ({ avatar }) => {
  // console.log("*************", avatar);
  return (
    <View>
      {/* Profile Picture */}
      {avatar ? (
        <ProfilePicture image={avatar} size={50} />
      ) : (
        <ProfilePicture
          image={
            "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
          }
          size={50}
        />
      )}
    </View>
  );
};

export default LeftContainer;

const styles = StyleSheet.create({});
