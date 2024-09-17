import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useGlobalSearchParams } from 'expo-router';

const NewsDetailPage = () => {
    const { id } = useGlobalSearchParams();
  return (
    <View>
        <Stack.Screen options={{ headerTitle:`News #${id}`}}/>
      <Text>NewsDetailPage {id}</Text>
    </View>
  )
}

export default NewsDetailPage