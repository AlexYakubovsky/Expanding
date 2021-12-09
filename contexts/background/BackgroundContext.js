import React, { useContext, useEffect} from 'react'
import useLocalStorage from "../../hooks/useLocalStorage"

const BackgroundContext = React.createContext()

export const useBackground = () => {
  return useContext(BackgroundContext)
}

export const BackgroundProvider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useLocalStorage('background', { type: 'gaussian', number: 0 })

  useEffect(() => {
    const body = document.querySelector('body')
    const bodyClassName = `bg-${activeTheme.type}${activeTheme.number}`

    body.classList.add('bg-theme', bodyClassName)

    return () => body.classList.remove(bodyClassName)
  }, [activeTheme])

  return (
    <BackgroundContext.Provider
      value={{
        activeTheme: activeTheme,
        handler: setActiveTheme
      }}
    >
      {children}
    </BackgroundContext.Provider>
  )
}