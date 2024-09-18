import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import useHome from "../service/zustand";
const imgPending = require("./../../../assets/images/img_2.png");
const imgDone = require("./../../../assets/images/img_3.png");
const imgAddNew = require("./../../../assets/images/img_4.png");

const HomeCategories = () => {
  const { countDone, countPending } = useHome()
  const router = useRouter()
  const handlePress = (value: string) => {
    switch (value) {
      case 'pending':
        router.push('/task_list');
        break;
      case 'done':
        router.push('/task_list');
        break;
      case 'new':
        router.push('/task_create');
        break;
      default:
        break;
    }
  };
  return (
    <View className="py-4">
      <Text className="text-white font-poppins">Categories</Text>
      <View className="flex flex-row w-full gap-2" style={{ marginBottom: 10 }}>
        <Pressable
          className="h-44 bg-gray rounded-2xl p-4"
          style={{ flex: 1 }}
          // onPress={() => handlePress("pending")}
        >
          <Text className="text-xl text-white font-poppins">Pending</Text>
          <Text className="text-xs text-white font-poppins">{countPending} Tasks</Text>
          <View className="flex flex-row justify-between pt-8">
            <View></View>
            <Image
              className="h-16 w-16"
              source={imgPending}
              width={50}
              height={50}
            />
          </View>
        </Pressable>
        <Pressable
          className="h-44 bg-gray rounded-2xl p-4"
          style={{ flex: 1 }}
          // onPress={() => handlePress("done")}
        >
          <Text className="text-xl text-white font-poppins">Done</Text>
          <Text className="text-xs text-white font-poppins">{countDone} Tasks</Text>
          <View className=" flex flex-row justify-between pt-8">
            <View></View>
            <Image
              className="h-16 w-16"
              source={imgDone}
              width={50}
              height={50}
            />
          </View>
        </Pressable>
      </View>

      <Pressable
        className="h-36 bg-gray w-full rounded-2xl p-4"
        style={{ flex: 1 }}
        onPress={() => handlePress("new")}
      >
        <Text className="text-xl text-white font-poppins">Create New Task</Text>
        <Text className="text-xs text-white font-poppins">
          Add more task for your activities
        </Text>
        <View className="w-full flex flex-row justify-between">
          <View></View>
          <Image
            className="h-16 w-16"
            source={imgAddNew}
            width={50}
            height={50}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default HomeCategories;
