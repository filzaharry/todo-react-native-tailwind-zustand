import { View, Text } from "react-native";
import React from "react";
import TaskItem from "./task-item";
import useHome from "../../home/service/zustand";
import HomeTaskItem from "../../home/widget/home-task-item";

const TaskList = () => {
  const { taskList } = useHome();
  return (
    <View className="py-4">
      <View className="flex flex-col gap-2">
        {taskList != null &&
          taskList.map((item: any, index) => {
            return (
              <HomeTaskItem
                key={index}
                id={item.id}
                title={item.title}
                start={item.start}
                end={item.end}
                status={item.status}
              />
            );
          })}
      </View>
    </View>
  );
};

export default TaskList;
