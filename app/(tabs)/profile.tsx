import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ProfilePage = () => {
  return (
    <View>
      <Text>ProfilePage</Text>
      <Link href="/">Logout</Link>
    </View>
  )
}

export default ProfilePage