import { View, Text, TextInput, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TaskList from "./widget/task-list";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const HistoryLayout = () => {
  let router = useRouter();
  return (
    <View className="text-center h-screen  bg-gray-dark w-full px-10 flex flex-col gap-10">
      <SafeAreaView>
        <ScrollView>
          <View className="py-4 flex flex-row items-center gap-4">
            <Text className="text-2xl text-white font-poppins">History Task</Text>
          </View>
          <TaskList />
          <View style={{marginTop:50}}></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HistoryLayout;
