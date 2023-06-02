import GithubIcon from '../components/GithubIcon'
import DemoIcon from '../components/DemoIcon'

const ProjectButtonContainer = ({ repo, demo }) => {
  const handleClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className='flex flex-row gap-x-4 items-center'>
      <GithubIcon repo={repo} handleClick={handleClick} />
      {demo ? <DemoIcon demo={demo} handleClick={handleClick} /> : null}
    </div>
  )
}

export default ProjectButtonContainer

