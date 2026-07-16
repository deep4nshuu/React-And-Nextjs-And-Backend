import {create} from "zustand"

    // state give the access to var we want to update and set,state comes default with create
    // we pass obj inside arrow fn present inside set()
    // shorthand is used when we don't want access of whole state of container or state var and used to overwrite curr state or var : instead of this set(() => ()), use set({cnt:0})
    //   ./ => curr directory
    //   ../ => one directory bac


export const useCounterStore = create((set) => ({
    count : 0,
    increase: () => set((state) => ({count: state.count + 1})),
    decrease: () => set((state) => ({count: state.count - 1})),
    reset: () => set({count: 0})    
}))