import { AlertProvider } from './alert/AlertContext'

export default function AppProvider({ children }) {
  return (
    <AlertProvider>
      {children}
    </AlertProvider>
  )
}
