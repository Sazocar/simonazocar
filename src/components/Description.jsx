import ResumeButton from './ResumeButton'

const Description = ({ openModal }) => {
  return (
    <div
      className={
        openModal
          ? 'h-screen flex flex-col justify-center bg-navy container mx-auto px-8 lg:px-36'
          : 'h-screen flex flex-col justify-center bg-navy container mx-auto px-8 lg:px-36'
      }
    >
      <h3 className='code text-green text-base sm:text-xl'>Hi, my name is</h3>
      <h1 className='mt-7 text-4xl font-semibold text-lightest-slate md:text-7xl'>
        Simón A. Azócar.
      </h1>
      <h2 className='mt-3 text-4xl text-slate font-semibold md:text-7xl'>
        I build things for the web.
      </h2>
      <p className='mt-8 text-slate w-full md:w-3/5'>
        I&apos;m a <span className='text-green'>Junior Frontend Developer</span> who
        likes to create clean and good looking user interfaces. I&apos;m currently
        focused on finishing my degree as <span className='text-green'>Software Engineer </span>
        at Universidad Católica Andrés Bello .
      </p>

      <section className='mt-12'>
        <ResumeButton />
      </section>
    </div>
  )
}

export default Description
