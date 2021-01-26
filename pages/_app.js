import React from 'react';
import Link from "next/link";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<div>
    <nav>
      <Link href='/'>Main page</Link>
      {` | `}
      <Link href='/popular'>Popular</Link>
      {` | `}
      <Link href='/static-page'>Static page</Link>
    </nav>
    <Component {...pageProps} />
  </div>);
}

export default MyApp
