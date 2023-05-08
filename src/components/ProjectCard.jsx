import Link from 'next/link'
import dynamic from 'next/dynamic'
import FolderIcon from './FolderIcon'
import ProjectButtonContainer from '../containers/ProjectButtonContainer'

const ProjectCard = ({ project }) => {
  const { title, description, tags, demo, repo } = project

  return (
    <Link
      className='h-full w-full'
      href={repo}
      target='_blank'
    >
      <div className='p-8 hover:cursor-pointer [&>div>h2]:hover:text-green flex flex-col justify-between w-full h-full bg-dark-blue rounded hover:drop-shadow-2xl hover:-translate-y-2 ease-in-out duration-300 '>
        <div>
          <div className='flex flex-row justify-between mb-7'>
            <FolderIcon />
            <ProjectButtonContainer repo={repo} demo={demo} />
          </div>

          <h2 className='text-lightest-slate text-xl font-semibold mb-3'>
            {title}
          </h2>
          <p className='text-slate mb-5'>{description}</p>
        </div>

        <ul className='code text-xs text-slate flex flex-wrap	flex-row gap-x-5 mt-6'>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </Link>
  )
}

export default dynamic(() => Promise.resolve(ProjectCard), { ssr: false })

