import { Link, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View, Image } from "react-native";
import "../global.css";
import { useFonts } from "expo-font";

const imagePath = require("./../src/assets/images/img_1.png");

const LoginPage = () => {
  const [loaded] = useFonts({
    Poppins: require("./../src/assets/font/poppins/Poppins-Regular.ttf"),
  });
  const router = useRouter();
  const handlePress = () => {
    router.replace("/home");
  };

  if (!loaded) {
    return null;
  }
  return (
    // <View className="text-center h-screen mx-auto justify-center">
    //   <Pressable onPress={handlePress}>
    //     <Text>Login</Text>
    //   </Pressable>
    //   <Link href={"/register"} asChild>
    //     <Pressable>
    //       <Text>Create Account</Text>
    //     </Pressable>
    //   </Link>
    // </View>
    <View className="base-layout">
      <View className="w-[80%] flex">
        <Text
          className="text-3xl font-poppins font-semibold text-white"
        >
          Manage your todo list with
        </Text>
        <Text
          className="font-poppins text-3xl text-orange font-semibold"
        >
          Application
        </Text>
      </View>
      <Image className="h-32 w-32" source={imagePath} width={50} height={50} />
      <View className="w-[80%]">
        <Text
          className="text-sm font-normal text-white font-poppins"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          minima laborum cupiditate necessitatibus sequi, rerum eius iste
          deserunt harum nisi.
        </Text>
      </View>
      <View className="text-center w-80 bg-orange p-4 rounded-full mx-auto mt-20">
        <Pressable onPress={handlePress}>
          <Text className="text-center text-white font-semibold font-poppins">Let's Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginPage;
