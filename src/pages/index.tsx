import Head from 'next/head'

import { PageBase } from './../components/template/PageBase'

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageBase></PageBase>
    </>
  )
}

export default Home
