import { View, Text } from 'react-native'
import React from 'react'
import HomeTaskItem from './home-task-item'
import useHome from '../service/zustand'

const HomeTaskList = () => {
  const { taskList } = useHome()
  return (
    <View className="py-4">
            <Text className="text-white font-poppins">Recently Task</Text>
            <View className="flex flex-col gap-2">
              { taskList != null &&
                taskList.map((item:any, index) => {
                  return (
                    <HomeTaskItem 
                    key={index} 
                    id={item.id}
                    title={item.title} 
                    start={item.start} 
                    end={item.end} 
                    status={item.status} 
                    />
                  )
                })
              }
            </View>
          </View>
  )
}

export default HomeTaskList