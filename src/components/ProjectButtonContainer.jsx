import GithubIcon from './GithubIcon'
import DemoIcon from './DemoIcon'

const ProjectButtonContainer = ({ repo, demo }) => {
  return (
    <div className='flex flex-row gap-x-4 items-center'>
      <GithubIcon repo={repo} />
      <DemoIcon demo={demo} />
    </div>
  )
}

export default ProjectButtonContainer

