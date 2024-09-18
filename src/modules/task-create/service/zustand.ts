import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { produce } from "immer";
import { create } from "zustand";
import { TaskSubmitType } from "../type/type";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useHome from "../../home/service/zustand";
import * as Notifications from "expo-notifications";
// import create from 'zustand';
// import { OrderItemType } from './type';

type State = {
  title: string;
  start: string;
  end: string;
  status: number;
};

type Action = {
  updateTitle: (data: State["title"]) => void;
  updateStart: (data: State["start"]) => void;
  updateEnd: (data: State["end"]) => void;
  updateStatus: (data: State["status"]) => void;
  submitTask: (data: TaskSubmitType) => void;
};

const zustandBase = create<State & Action>((set) => ({
  title: "",
  start: "",
  end: "",
  status: 0,
  updateTitle: (data) => set(() => ({ title: data })),
  updateStart: (data) => set(() => ({ start: data })),
  updateEnd: (data) => set(() => ({ end: data })),
  updateStatus: (data) => set(() => ({ status: data })),
  submitTask: async (data: TaskSubmitType) => {
    // get async storage taskData
    const getTask: any = await AsyncStorage.getItem("taskData");
    await AsyncStorage.removeItem("taskData");
    // check if taskData is null
    if (getTask == null) {
      // if null, set taskData as new item
      AsyncStorage.setItem("taskData", JSON.stringify([data]));
    } else {
      // if not null, push data in to array taskData
      const result = JSON.parse(getTask);
      result.push(data);
      AsyncStorage.setItem("taskData", JSON.stringify(result));
    }

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Success",
        body: "Success Add Task",
      },
      trigger: null,
    });
    useHome.getState().loadTask(0, "");
  },
}));

const useTaskCreate = createSelectorHooks(zustandBase);

export default useTaskCreate;
