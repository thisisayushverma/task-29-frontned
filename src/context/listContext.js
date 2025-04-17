import { createContext, useContext } from "react";



const list = createContext({
    data: [],
    setData: () => {}
})


export const useList = () => useContext(list)

export const ListProvider = list.Provider
