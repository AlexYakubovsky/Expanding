import { useState } from "react"

export default function useLocalStorage(key, initialValue) {
  const hasWindow = typeof window !== "undefined"

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = hasWindow && window.localStorage.getItem(key)

      return item ? JSON.parse(item) : initialValue
    } catch (e) {
      console.log(e)

      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      hasWindow && window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (e) {
      console.log(e)
    }
  }

  return [storedValue, setValue]
}