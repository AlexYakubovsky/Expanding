import { SessionProvider } from 'next-auth/react'
import AppProvider from '../contexts/AppProvider'
import AuthApp from '../components/helpers/AuthApp'
import '../styles/styles.sass'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <AppProvider>
        {!Component.auth ? (
          <AuthApp>
            <Component {...pageProps} />
          </AuthApp>
        ) : (
          <Component {...pageProps} />
        )}
      </AppProvider>
    </SessionProvider>
  )
}
