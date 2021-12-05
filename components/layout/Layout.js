import Head from "next/head"
import Sidebar from "./Sidebar/Sidebar"
import Header from "./Header/Header"
import Footer from "./Footer"

const Layout = ({ title, keywords = null, description = null, children }) => {
  const mainStyles = {
    marginTop: '60px',
    marginLeft: '250px',
    minHeight: 'calc(100vh - 80px)'
  }

  return (
    <>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.png"/>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <meta
            name="keywords"
            content={keywords}
          />
          <meta
            name="description"
            content={description}
          />
        </Head>
        <Header/>
        <Sidebar/>
        <main style={mainStyles}>
          {children}
        </main>
        <Footer/>
        {/*<Popup/>*/}
        {/*<ButtonToTop/>*/}
        </>
  )
}

export default Layout