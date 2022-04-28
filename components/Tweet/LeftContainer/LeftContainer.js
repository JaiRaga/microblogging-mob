import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfilePicture from "../../ProfilePicture"

const LeftContainer = ({user}) => {
  return (
    <View>
      {/* Profile Picture */}
      <ProfilePicture image={user.image} size={50} />
    </View>
  )
}

export default LeftContainer

const styles = StyleSheet.create({})