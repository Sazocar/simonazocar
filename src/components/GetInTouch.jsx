import Link from 'next/link'
import { SocialsContainer } from '@/containers/SocialsContainer'
import Button from './Button'

const GetInTouch = () => {
  return (
    <section
      id='contact'
      className='grid place-content-center text-center h-screen my-auto px-12 sm:w-full md:w-3/5 mx-auto'
    >
      <div className='flex flex-row font-thin text-sm md:text-base code justify-center gap-x-4 text-green items-center'>
        <span>04. </span>
        <h4>What&apos;s Next?</h4>
      </div>
      <h1 className='my-5 text-3xl md:text-6xl font-semibold text-lightest-slate'>
        Get In Touch
      </h1>
      <p className='w-full md:w-4/5 mx-auto text-base sm:text-lg text-slate mb-8'>
       I'm currently crafting beautiful and user-friendly experiences as a Frontend Developer at <Link className="hover:underline text-green decoration-solid" href="https://www.avilatek.com/" target="_blank">AvilaTek 🚀🏔️</Link>, but I'm always eager to explore new opportunities and connect with like-minded individuals. Whether you have a web app in mind, a UI/UX challenge to discuss, or just want to geek out about the latest frontend trends, I'm all ears!
      </p>

      <SocialsContainer />

      <div className='grid place-items-center my-6'>
        <Link href='mailto:saimn.azocar@gmail.com' target='_blank'>
          <Button text='Say Hello' />
        </Link>
      </div>
    </section>
  )
}

export default GetInTouch

