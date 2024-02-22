import React, { createContext } from 'react'
import useLocalStorage from 'use-local-storage'
export const DarkModeContext = createContext()
const DarkModeProvider = ({children}) => {
    const [dark, setDark] = useLocalStorage(false)
  return (
    <DarkModeContext.Provider value={{dark , setDark}}>{children}</DarkModeContext.Provider>
  )
}

export default DarkModeProvider