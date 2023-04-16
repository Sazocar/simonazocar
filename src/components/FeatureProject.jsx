import Image from 'next/image'
import ProjectButtonContainer from '../containers/ProjectButtonContainer'
import ProjectContent from '@/containers/ProjectContent'
import Link from 'next/link'

//  Create a data file with all projects as an object

const FeatureProject = ({ title, description, tags }) => {
  return (
    <div className='relative w-full mt-4'>
      <div className='container w-4/6 z-10 h-auto fill-current w-7/12 '>
        <Link className='grayscale hover:grayscale-0 hover:cursor-pointer transition hover:ease-in-out duration-500' href='https://avo-nextjs-eight.vercel.app/' target='__blank'>
          <Image
            width={1200}
            height={1200}
            sizes='100vw'
            className='rounded'
            alt={title}
            src='/avo-screenshot.jpeg'
          />
        </Link>
      </div>
      <ProjectContent />
    </div>
  )
}

export default FeatureProject

