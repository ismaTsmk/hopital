import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar'
// import { SessionProvider } from "next-auth/react"
import axios from '../lib/axios'



function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // <SessionProvider session={session}>
    //   <Navbar />
    //   <Component {...pageProps} />
    // </SessionProvider>
    <>
       <Navbar />
      <Component {...pageProps} />
    
    </>

    // <SessionProvider session={session}>
    //   {Component.auth ? (
    //     <Auth>
    //       <Navbar />

    //       <Component {...pageProps} />
    //     </Auth>
    //   ) : (
    //     <>
    //       <Navbar />
    //       <Component {...pageProps} />

    //     </>
    //   )}
    // </SessionProvider>

  )
}

export default MyApp



