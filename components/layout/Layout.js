import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ title, keywords = null, description = null, children }) => {
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
      <main>
        {children}
      </main>
      <Footer/>
      {/*<Popup/>*/}
      {/*<ButtonToTop/>*/}
    </>
  )
}

export default Layout