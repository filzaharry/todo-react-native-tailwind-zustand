import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import TaskListLayout from '../../src/modules/task-list/layout'

const ListPage = () => {
  return (
    // <View>
    //     <Link href="/list/1">News 1</Link>
    //     <Link href="/list/2">News 2</Link>
    //     <Link href="/list/3">News 3</Link>
    // </View>
    <TaskListLayout />
  )
}

export default ListPage