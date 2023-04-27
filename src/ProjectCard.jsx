import FolderIcon from './components/FolderIcon'
import ProjectButtonContainer from './containers/ProjectButtonContainer'

const ProjectCard = ({ project }) => {
  const { title, description, tags, demo, repo } = project

  return (
    <div className='p-8 flex flex-col justify-between max-w-sm w-full h-full bg-dark-blue rounded hover:drop-shadow-2xl transition hover:ease-in duration-300 drop-shadow-sm'>
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
  )
}

export default ProjectCard


