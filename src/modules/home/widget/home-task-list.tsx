import { View, Text } from 'react-native'
import React from 'react'
import HomeTaskItem from './home-task-item'

const HomeTaskList = () => {
  return (
    <View className="py-4">
            <Text className="text-white font-poppins">Recently Task</Text>
            <View className="flex flex-col gap-2">
              <HomeTaskItem title={"Frontend Coding Time"} start={"10:00"} end={"12:00"} status={2} />
              <HomeTaskItem title={"Backend Coding Time"} start={"13:00"} end={"16:00"} status={1} />
              <HomeTaskItem title={"Design Review"} start={"17:00"} end={"18:00"} status={0} />
            </View>
          </View>
  )
}

export default HomeTaskList