import { View, Text, TextInput, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeCategories from "./widget/home-categories";
import HomeTaskItem from "./widget/home-task-item";
import HomeTaskList from "./widget/home-task-list";
import useHome from "./service/zustand";
import * as Notifications from 'expo-notifications';
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeLayout = () => {
  const { countDone, countPending, taskList, loadTask } = useHome()

  useEffect(() => {
    loadTask(0,'')
  }, [])
  
  return (
    <View className="text-center h-screen  bg-gray-dark w-full px-10 flex flex-col gap-10">
      <SafeAreaView>
        <ScrollView>
          <View className="py-4">
            <Text className="text-2xl text-white font-poppins">Hi, Filza</Text>
            <Text className="text-xs text-white font-poppins">
              {countPending} Tasks Pending
            </Text>
          </View>
          <View className="w-full bg-gray px-10 py-2 rounded-full">
            <TextInput
              className="placeholder:text-white text-white"
              onChangeText={() => {}}
              // value={}
              placeholder="Search"
              keyboardType="default"
            />
          </View>
          <HomeCategories />
          <HomeTaskList />
          <View style={{marginTop:50}}></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeLayout;
