import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Pressable,
  Alert,
  Button,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeCategories from "./widget/home-categories";
import HomeTaskItem from "./widget/home-task-item";
import HomeTaskList from "./widget/home-task-list";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useTaskCreate from "./service/zustand";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { TaskSubmitType } from "./type/type";

const TaskCreateLayout = () => {
  let router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { title, start, end, status, updateStatus, updateTitle, updateStart, updateEnd, submitTask } =
    useTaskCreate();

  const onSubmit = (data: any) => {
    const request = {
      id: Date.now().toString(),
      title: data.title,
      start: data.start,
      end: data.end,
      status
    }
    submitTask(request);
    Alert.alert("Success", "success added");
    router.back();
  };

  return (
    <View className="text-center h-screen  bg-gray-dark w-full px-10 flex flex-col gap-10">
      <SafeAreaView>
        <ScrollView>
          <View className="py-4 flex flex-row items-center gap-4">
            <Pressable onPress={() => router.back()}>
              <AntDesign name="arrowleft" size={20} color="white" />
            </Pressable>
            <Text className="text-2xl text-white font-poppins">
              Create New Tasks
            </Text>
          </View>
          <View className="flex flex-col gap-2">
            <Text className="text-white text-md">Title :</Text>
            <View className="w-full bg-gray px-4 py-2 rounded-lg">
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    className="placeholder:text-white text-white"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    // onChangeText={(value) => onChange(value)}
                    value={value}
                  />
                )}
                name="title"
                rules={{ required: true }}
              />
              {errors.title && (
                <Text className="text-orange">Title Field is Required</Text>
              )}
            </View>
          </View>
          {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}

          <View className="flex flex-row justify-between pt-8 ">
            <View className="w-[48%] flex flex-col gap-2">
              <Text className="text-white text-md">Start :</Text>
              <View className=" bg-gray px-4 py-2 rounded-lg">
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className="placeholder:text-white text-white"
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                    />
                  )}
                  name="start"
                  rules={{ required: true }}
                />
              </View>
              {errors.start && (
                <Text className="text-orange">Start Field is Required</Text>
              )}
            </View>
            <View className="w-[48%] flex flex-col gap-2">
              <Text className="text-white text-md">Finish :</Text>
              <View className=" bg-gray px-4 py-2 rounded-lg">
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className="placeholder:text-white text-white"
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                    />
                  )}
                  name="end"
                  rules={{ required: true }}
                />
              </View>
              {errors.end && (
                <Text className="text-orange">End Field is Required</Text>
              )}
            </View>
          </View>
          <View className="flex flex-row w-full gap-2 mt-10">
            {
              status == 0 
              ? (
                <Pressable 
                  className="bg-pink px-4 py-2 rounded-full">
                  <Text className="text-white text-xs">Pending</Text>
                </Pressable>
              )
              : (
                <Pressable 
                  onPress={()=>updateStatus(0)} 
                  className="bg-gray-light px-4 py-2 rounded-full">
                  <Text className="text-white text-xs">Pending</Text>
                </Pressable>
              )
            }
            {
              status == 1
              ? (
                <Pressable 
                  className="bg-orange px-4 py-2 rounded-full">
                  <Text className="text-white text-xs">On Progress</Text>
                </Pressable>
              )
              : (
                <Pressable 
                  onPress={()=>updateStatus(1)} 
                  className="bg-gray-light px-4 py-2 rounded-full">
                  <Text className="text-white text-xs">On Progress</Text>
                </Pressable>
              )
            }
            {
              status == 2
              ? (
                <Pressable 
                  className="bg-green px-4 py-2 rounded-full">
                  <Text className="text-white text-xs">Done</Text>
                </Pressable>
              )
              : (
                <Pressable 
                  onPress={()=>updateStatus(2)} 
                  className="bg-gray-light px-4 py-2 rounded-full">
                  <Text className="text-white text-xs">Done</Text>
                </Pressable>
              )
            }
          
          </View>

          <View className="text-center w-80 bg-orange p-2 rounded-full mx-auto mt-20">
            <Pressable onPress={handleSubmit(onSubmit)}>
              <Text className="text-center text-white font-semibold font-poppins">
                Submit Task
              </Text>
            </Pressable>
          </View>
          <View style={{ marginTop: 50 }}></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default TaskCreateLayout;
