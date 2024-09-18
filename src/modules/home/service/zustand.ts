import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import { produce } from 'immer';
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import create from 'zustand';
// import { OrderItemType } from './type';

type State = {
    countPending: number,
    countDone: number,
    taskList: [],
}

type Action = {
    updateCountPending: (data: State['countPending']) => void
    updateCountDone: (data: State['countDone']) => void
    updateTaskList: (data: State['taskList']) => void
    loadTask: (status:number, keyword:string) => void
}

const zustandBase = create<State & Action>((set) => ({
  countDone: 0,
  countPending: 0,
  taskList: [],
  updateCountPending: (data) => set(() => ({ countPending: data })),
  updateCountDone: (data) => set(() => ({ countDone: data })),
  updateTaskList: (data) => set(() => ({ taskList: data })),
  loadTask: async (status:number, keyword:string) => {
    
    // get async storage taskData 
    const getFromStorage: any = await AsyncStorage.getItem("taskData");
    const taskData = JSON.parse(getFromStorage);

    
    const countPending = taskData.filter(function(element:any){
        return element.status == 0;
    }).length

    const countDone = taskData.filter(function(element:any){
        return element.status == 2;
    }).length
  

    set(
        produce<State>((state) => {
            state.countPending = countPending
            state.countDone = countDone
            state.taskList = taskData
        })
    );
  },
}))

const useHome = createSelectorHooks(zustandBase);

export default useHome;
