import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar'
import { SessionProvider } from "next-auth/react"
import axios from '../lib/axios'



function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (

    // </>

    <SessionProvider session={session}>
      {Component.auth ? (
        <>
          <Navbar />
          <div className='mt-5 pt-5'></div>
          <Component {...pageProps} />
        </>

      ) : (
        <>
          <Navbar />
          <div className='mt-5 pt-5'></div>
          <Component {...pageProps} />
        </>
      )}
    </SessionProvider>

  )
}

export default MyApp



