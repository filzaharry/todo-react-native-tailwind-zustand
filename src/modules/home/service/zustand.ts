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
    const getTask :any = await AsyncStorage.getItem('taskData')

    console.log(JSON.parse(getTask));
    

    set(
        produce<State>((state) => {
            state.countPending = 10
            state.countDone = 10
            state.taskList = JSON.parse(getTask)
        })
    );
  },
}))

const useHome = createSelectorHooks(zustandBase);

export default useHome;
