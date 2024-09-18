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
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeCategories from "./widget/home-categories";
import HomeTaskItem from "./widget/home-task-item";
import HomeTaskList from "./widget/home-task-list";
import { useGlobalSearchParams, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useTaskCreate from "./service/zustand";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { TaskSubmitType } from "./type/type";

const TaskDetailLayout = () => {
  let router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id } = useGlobalSearchParams();
  const {
    title,
    start,
    end,
    status,
    updateStatus,
    updateTitle,
    updateStart,
    updateEnd,
    submitUpdateTask,
  } = useTaskCreate();

  useEffect(() => {
    handleLoadData();
  }, []);

  const handleLoadData = async () => {
    const data: any = await AsyncStorage.getItem("taskData");
    const parseData = JSON.parse(data)
    
    parseData.map((item: any) => {
      if (item.id == id) {
        updateTitle(item.title);
        updateStart(item.start);
        updateEnd(item.end);
        updateStatus(item.status);
      }
    });
  };

  useEffect(() => {}, [title, start, end, status]);

  const onUpdate = (data: any) => {
    const request = {
      id: id.toString(),
      title: data.title,
      start: data.start,
      end: data.end,
      status,
    };
    console.log("request");
    console.log(request);
    
    // submitUpdateTask(request);
    Alert.alert("Success", "success added");
    router.back();
  };

  const onDelete = async () => {
    const data :any = await AsyncStorage.getItem('taskData')
    const taskData = JSON.parse(data);
    // check same id value and get the index to remove
    const index = taskData.map((e: { id: any; }) => e.id).indexOf(id);
    // remove selected index
    taskData.splice(index, 1);
    console.log("taskData");
    console.log(taskData);
    localStorage.setItem('taskData', JSON.stringify([]));
    // localStorage.setItem('taskData', JSON.stringify(taskData));
    router.replace('/home')
    
  }

  return (
    <View className="text-center h-screen  bg-gray-dark w-full px-10 flex flex-col gap-10">
      <SafeAreaView>
        <ScrollView>
          <View className="py-4 flex flex-row items-center gap-4">
            <Pressable onPress={() => router.back()}>
              <AntDesign name="arrowleft" size={20} color="white" />
            </Pressable>
            <Text className="text-2xl text-white font-poppins">
              Tasks {id}
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
                    onChangeText={(value) => updateTitle(value)}
                    value={title}
                  />
                )}
                name="title"
                // rules={{ required: true }}
              />
              {errors.title && (
                <Text className="text-orange">Title Field is Required</Text>
              )}
            </View>
          </View>
          {/* <Button title="Submit" onPress={handleSubmit(onUpdate)} /> */}

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
                      onChangeText={(value) => updateStart(value)}
                      value={start}
                    />
                  )}
                  name="start"
                  // rules={{ required: true }}
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
                      onChangeText={(value) => updateEnd(value)}
                      value={end}
                    />
                  )}
                  name="end"
                  // rules={{ required: true }}
                />
              </View>
              {errors.end && (
                <Text className="text-orange">End Field is Required</Text>
              )}
            </View>
          </View>
          <View className="flex flex-row w-full gap-2 mt-10">
            {status == 0 ? (
              <Pressable className="bg-pink px-4 py-2 rounded-full">
                <Text className="text-white text-xs">Pending</Text>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => updateStatus(0)}
                className="bg-gray-light px-4 py-2 rounded-full"
              >
                <Text className="text-white text-xs">Pending</Text>
              </Pressable>
            )}
            {status == 1 ? (
              <Pressable className="bg-orange px-4 py-2 rounded-full">
                <Text className="text-white text-xs">On Progress</Text>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => updateStatus(1)}
                className="bg-gray-light px-4 py-2 rounded-full"
              >
                <Text className="text-white text-xs">On Progress</Text>
              </Pressable>
            )}
            {status == 2 ? (
              <Pressable className="bg-green px-4 py-2 rounded-full">
                <Text className="text-white text-xs">Done</Text>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => updateStatus(2)}
                className="bg-gray-light px-4 py-2 rounded-full"
              >
                <Text className="text-white text-xs">Done</Text>
              </Pressable>
            )}
          </View>

          <View className="flex flex-row justify-between">
            <View className="text-center w-40 bg-orange p-2 rounded-full mx-auto mt-20">
              <Pressable onPress={handleSubmit(onUpdate)}>
                <Text className="text-sm text-center text-white font-semibold font-poppins">
                  Update Task
                </Text>
              </Pressable>
            </View>
            <View className="text-center w-40 bg-grey p-2 rounded-full mx-auto mt-20">
              <Pressable onPress={()=>onDelete()}>
                <Text className="text-sm text-center text-white font-semibold font-poppins">
                  Delete Task
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={{ marginTop: 50 }}></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default TaskDetailLayout;
