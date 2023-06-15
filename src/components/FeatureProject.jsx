import Image from 'next/image'
import ProjectContent from '@/containers/ProjectContent'
import Link from 'next/link'

const FeatureProject = ({ project, index }) => {
  const { title, image, demo, repo } = project

  return (
    <div className='relative flex flex-row items-center w-full h-64 mt-32 mb-72 px-8'>
      <div
        className={
          index % 2 === 0
            ? 'absolute left-0 w-4/6 h-auto fill-current w-7/12 '
            : 'absolute right-0 w-4/6 h-auto fill-current w-7/12 '
        }
      >
        <Link
          className='grayscale hover:grayscale-0 hover:cursor-pointer transition hover:ease-in-out duration-300'
          href={demo === '' ? repo : demo}
          target='__blank'
        >
          <Image
            width={1200}
            height={1200}
            sizes='100vw'
            className='rounded hidden sm:block hover:drop-shadow-2xl transition hover:ease-in duration-300 drop-shadow-sm'
            alt={title}
            src={image}
          />
        </Link>
      </div>
      <ProjectContent project={project} index={index} />
    </div>
  )
}

export default FeatureProject


