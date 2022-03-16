import Head from 'next/head';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Seera-Hotel</title>
        <meta name="description" content="Hotels"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout;