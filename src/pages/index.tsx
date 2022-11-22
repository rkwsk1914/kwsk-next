import Head from 'next/head'

import { Button } from '@/components/atoms/Button'
import { PageComponent } from '@/components/atoms/PageComponent'

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageComponent>
      <div className="text-3xl font-bold underline">Hello Next.js!</div>
      <Button href="" onClick={()=>{return 0}}>button</Button>
    </PageComponent>
    </>
  )
}

export default Home
