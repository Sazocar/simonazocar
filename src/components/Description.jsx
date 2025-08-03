import Link from 'next/link'
import ActionButton from './ActionButton'

const Description = () => {
  return (
    <div className='h-screen flex flex-col justify-center container mx-auto px-8 lg:px-36'>
      <h3 className='code text-green text-base'>
        Hello, my name is
      </h3>
      <h1 className='mt-7 text-4xl font-semibold text-lightest-slate md:text-7xl'>
        Simón A. Azócar.
      </h1>
      <h2 className='mt-3 text-4xl text-slate font-semibold md:text-7xl'>
        I build things for the web.
      </h2>
      <p className='mt-8 text-slate w-full md:w-3/5'>
        {`I'm a Software Engineer specializing in creating robust and scalable mobile and web applications. Currently my main focus is to deliver high-quality code and achieve client's objectives at `}
        <Link
          href='https://www.venbos/'
          className=' hover:underline text-green decoration-solid'
          target='__blank'
        >
          Venbos.
        </Link>
      </p>
      <section className='mt-12'>
        <ActionButton text='Resume' />
      </section>
    </div>
  )
}

export default Description
