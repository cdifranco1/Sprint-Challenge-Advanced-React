import React, {useState} from 'react';



export const useLocalStorage = (key, initialValue) => {
  const [ player, setPlayer ] = useState(() => {
    return (
      localStorage.getItem(key) ? 
      JSON.parse(localStorage.getItem(key)) :
      initialValue
    )
  })

  const setValue = (value) => {
      setPlayer(value)
      localStorage.setItem(key, JSON.stringify(value))
    }

  return [ player, setValue ]
}