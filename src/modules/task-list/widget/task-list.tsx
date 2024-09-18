import { View, Text } from 'react-native'
import React from 'react'
import TaskItem from './task-item'

const TaskList = () => {
  return (
    <View className="py-4">
      <View className="flex flex-col gap-2">
        <TaskItem title={"Frontend Coding Time"} start={"10:00"} end={"12:00"} status={0} />
        <TaskItem title={"Backend Coding Time"} start={"13:00"} end={"16:00"} status={0} />
        <TaskItem title={"Design Review"} start={"17:00"} end={"18:00"} status={0} />
      </View>
    </View>
  )
}

export default TaskList