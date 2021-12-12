import { useEffect } from 'react'
import { signIn, useSession } from "next-auth/react"

export default function AuthApp({ children }) {
  const { data: session, status } = useSession()
  const isUser = !!session?.user
  
  useEffect(() => {
    if (status === "loading") return
    if (!isUser) signIn()
  }, [isUser, status])
  
  if (isUser) return children
  
  return <div>Loading...</div>
}
