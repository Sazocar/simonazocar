import { useState } from 'react'
import Description from '@/components/Description'
import NavBar from '@/components/NavBar'
import Head from 'next/head'
import About from '@/components/About'

export default function Home() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Head>
        <title>Simón A. Azócar</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar openModal={openModal} setOpenModal={setOpenModal}/>
      <Description />
      <About />
    </>
  )
}
