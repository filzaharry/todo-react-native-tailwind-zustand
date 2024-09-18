import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useGlobalSearchParams } from 'expo-router';
import TaskDetailLayout from '../../src/modules/task-detail/layout';

const NewsDetailPage = () => {
   
  return (
    // <View>
    //     <Stack.Screen options={{ headerTitle:`News #${id}`}}/>
    //   <Text>NewsDetailPage {id}</Text>
    // </View>
    <TaskDetailLayout />
  )
}

export default NewsDetailPage