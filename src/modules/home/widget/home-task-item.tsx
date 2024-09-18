import { View, Text, Pressable } from "react-native";
import React from "react";
import { HomeTaskItemProps } from "../type/type";
import BadgeDefault from "../../components/badge";
import { Link, useRouter } from "expo-router";

const HomeTaskItem = (props:HomeTaskItemProps) => {
  const router = useRouter()
  return (
    // <Link href={`/list/${props.id}`} className=" bg-gray w-full rounded-2xl p-4 flex flex-row justify-between">
      <Pressable onPress={()=>router.push(`/list/${props.id}`)} className=" bg-gray w-full rounded-2xl p-4 flex flex-row justify-between">
        <View>
          <Text className="text-md text-white font-poppins">{props.id}</Text>
          {/* <Text className="text-md text-white font-poppins">{props.title}</Text> */}
          <Text className="text-xs text-white font-poppins">{props.start} - {props.end}</Text>
        </View>
        {props.status == 0 && (<BadgeDefault keyword='PENDING' />)}
        {props.status == 1 && (<BadgeDefault keyword='PROGRESS' />)}
        {props.status == 2 && (<BadgeDefault keyword='DONE' />)}
      </Pressable>
    // </Link>
  );
};

export default HomeTaskItem;
