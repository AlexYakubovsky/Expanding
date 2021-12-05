import AppProvider from '../contexts/AppProvider'
import '../styles/styles.sass'

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
