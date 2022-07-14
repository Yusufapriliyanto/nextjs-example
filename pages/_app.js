import '../styles/globals.css'
import Linker from 'next/link'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
