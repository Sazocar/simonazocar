import Image from 'next/image'
import ProjectButtonContainer from '../containers/ProjectButtonContainer'
import ProjectContent from '@/containers/ProjectContent'
import Link from 'next/link'

//  Create a data file with all projects as an object

const FeatureProject = ({ title, description, tags, index }) => {
  return (
    <div className='relative w-full h-64 mt-16 mb-56'>
      <div
        className={
          index % 2 === 0
            ? 'absolute right-0 w-4/6 z-10 h-auto fill-current w-7/12 '
            : 'absolute left-0 w-4/6 z-10 h-auto fill-current w-7/12 '
        }
      >
        <Link
          className='grayscale hover:grayscale-0 hover:cursor-pointer transition hover:ease-in-out duration-300'
          href='https://avo-nextjs-eight.vercel.app/'
          target='__blank'
        >
          <Image
            width={1200}
            height={1200}
            sizes='100vw'
            className='rounded hover:drop-shadow-2xl transition hover:ease-in duration-300 drop-shadow-sm'
            alt={title}
            src='/corsi-screenshot.png'
          />
        </Link>
      </div>
      <ProjectContent index={index} />
    </div>
  )
}

export default FeatureProject






