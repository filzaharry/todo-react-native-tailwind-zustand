import { Link, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import "../global.css";

const LoginPage = () => {
  const router = useRouter();
  const handlePress = () => {
    router.replace("/home");
  };
  return (
    <View className="text-center h-screen mx-auto justify-center">
      <Pressable onPress={handlePress}>
        <Text>Login</Text>
      </Pressable>
      <Link href={"/register"} asChild>
        <Pressable>
          <Text>Create Account</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default LoginPage;
