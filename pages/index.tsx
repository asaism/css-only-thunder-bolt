import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CSS Thunderbolt Shape</title>
        <meta name="description" content="CSS Thunderbolt Shape" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="thunderbolt">
          <div className="shape1"></div>
          <div className="shape2"></div>
          <div className="shape3"></div>
          <div className="shape4"></div>
        </div>
      </main>
    </>
  )
}

export default Home
