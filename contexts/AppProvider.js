import React from 'react'
import { AlertProvider } from './alert/AlertContext'
import { BackgroundProvider } from './background/BackgroundContext'

export default function AppProvider({ children }) {
  return (
    <AlertProvider>
      <BackgroundProvider>
        {children}
      </BackgroundProvider>
    </AlertProvider>
  )
}
