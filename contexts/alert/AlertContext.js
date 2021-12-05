import React, { useContext, useState } from 'react'
import Alert from './Alert'

const AlertContext = React.createContext()

export const useAlert = () => {
  return useContext(AlertContext)
}

export const AlertProvider = ({ children }) => {
  const [isActiveAlert, setIsActiveAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const showAlert = text => {
    setIsActiveAlert(true)
    setAlertMessage(text)
  }

  const hideAlert = () => {
    setIsActiveAlert(false)
    setAlertMessage('')
  }

  return (
    <AlertContext.Provider
      value={{
        isActive: isActiveAlert,
        text: alertMessage,
        show: showAlert,
        hide: hideAlert
      }}
    >
      {children}
      <Alert/>
    </AlertContext.Provider>
  )
}