import { useState } from 'react'
import Description from '@/components/Description'
import NavBar from '@/components/NavBar'
import Head from 'next/head'
import About from '@/components/About'
import FeatureSection from '@/components/FeatureSection'
import ProjectList from '@/containers/ProjectList'
import GetInTouch from '@/components/GetInTouch'
import Footer from '@/components/Footer'
import ExperienceSection from '@/containers/ExperienceSection'

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
      {/* Formation Container */}
      <ExperienceSection />
      <FeatureSection />
      <h2 className='text-center text-lightest-slate text-xl font-semibold sm:text-3xl mb-20'>Other Noteworthy Projects</h2>
      <ProjectList />
      <GetInTouch />
      <Footer />
    </>
  )
}
