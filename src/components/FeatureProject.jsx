import Image from 'next/image'
import ProjectButtonContainer from './ProjectButtonContainer'

//  Create a data file with all projects as an object

const FeatureProject = ({ title, description, tags }) => {
  return (
    <div className='relative w-full h-96 mt-4 flex flex-row justify-between'>
      <div className='container w-4/6 z-10 h-auto fill-current w-7/12 '>
        <Image
          width={1200}
          height={1200}
          sizes='100vw'
          className='rounded'
          alt={title}
          src='/avo-screenshot.jpeg'
        />
      </div>
      <section className='flex flex-col justify-evenly'>
        <h3 className='code text-sm text-green'>Feature Project</h3>
        <h1 className='text-4xl mt-2 text-lightest-slate'>{title}</h1>
        <div className='absolute right-0 mt-4 w-3/6 text-end z-40 text-slate rounded bg-dark-blue p-6 drop-shadow-2xl	'>
          <p>{description}</p>
        </div>
        <div className='text-lightest-slate'>{tags}</div>
        <ProjectButtonContainer
          repo='https://tailwindcss.com/docs/transition-timing-function'
          demo='https://tailwindcss.com/docs/transition-timing-function'
        />
      </section>
    </div>
  )
}

export default FeatureProject


