import Image from 'next/image'
import ProjectButtonContainer from './ProjectButtonContainer'

//  Create a data file with all projects as an object

const FeatureProject = ({ title, description, tags }) => {
  return (
    <div className='relative w-full flex flex-row justify-between'>
      <Image
        width={600}
        height={400}
        className='w-1/2 z-10 h-auto rounded'
        alt={title}
        src='/avo-screenshot.jpeg'
      />
      <section>
        <h3 className='code text-sm text-green'>Feature Project</h3>
        <h1 className='text-4xl mt-2 text-lightest-slate'>{title}</h1>
        <div className='absolute mt-4 w-3/5 right-0 z-40 text-slate rounded bg-dark-blue p-8'>
          <p>{description}</p>
        </div>
        <div>{tags}</div>
        <ProjectButtonContainer
          repo='https://tailwindcss.com/docs/transition-timing-function'
          demo='https://tailwindcss.com/docs/transition-timing-function'
        />
      </section>
    </div>
  )
}

export default FeatureProject

