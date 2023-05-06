import GithubIcon from '../components/GithubIcon'
import DemoIcon from '../components/DemoIcon'

const ProjectButtonContainer = ({ repo, demo }) => {
  return (
    <div className='flex flex-row gap-x-4 items-center'>
      <GithubIcon repo={repo} />
      {demo ? <DemoIcon demo={demo} /> : null}
    </div>
  )
}

export default ProjectButtonContainer

