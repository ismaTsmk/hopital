import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar'
import { SessionProvider, useSession, signIn } from "next-auth/react"
import axios from '../lib/axios'



function MyApp(
  // { Component, pageProps: { session, ...pageProps } }
  {
    Component,
    pageProps: { session, ...pageProps },
  }
  ) {

  console.log('la sessions est ')
  console.log(session)
  console.log('fin de la session est ')

  return (

    // </>

    <SessionProvider session={session}>
      {Component.auth ? (
        <>
          <Auth>
            {/* <Navbar /> */}
            <div className='mt-5 pt-5'></div>
            <Component {...pageProps} />
          </Auth>
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


function Auth({ children }) {
  const { data: session, status } = useSession()
  const isUser = !!session?.user
  React.useEffect(() => {
    if (status === "loading") return
    if (!isUser) signIn()
  }, [isUser, status])

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}



