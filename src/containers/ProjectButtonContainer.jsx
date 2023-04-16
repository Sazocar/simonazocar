import GithubIcon from '../components/GithubIcon'
import DemoIcon from '../components/DemoIcon'

const ProjectButtonContainer = ({ repo, demo }) => {
  return (
    <div className='flex flex-row gap-x-4 items-center'>
      <GithubIcon repo={repo} />
      <DemoIcon demo={demo} />
    </div>
  )
}

export default ProjectButtonContainer

