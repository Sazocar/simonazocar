import ProjectButtonContainer from './ProjectButtonContainer'

const ProjectContent = ({ project, index }) => {
  const { title, description, tags, repo, demo } = project

  return (
    <section
      className={
        index % 2 === 0
          ? 'absolute top-10 left-0 flex flex-col justify-between items-start w-1/2'
          : 'absolute top-10 right-0 flex flex-col justify-between items-end w-1/2'
      }
    >
      <h3 className='code text-xs text-green'>Feature Project</h3>
      <h1 className='text-3xl mt-2 text-lightest-slate'>{title}</h1>
      <div
        className={
          index % 2 === 0
            ? 'mt-4 w-full text-start z-40 text-slate rounded bg-dark-blue p-6 hover:drop-shadow-2xl transition hover:ease-in duration-300 drop-shadow-sm'
            : 'mt-4 w-full text-end z-40 text-slate rounded bg-dark-blue p-6 hover:drop-shadow-2xl transition hover:ease-in duration-300 drop-shadow-sm'
        }
      >
        <p>{description}</p>
      </div>
      <ul className='code text-xs text-slate flex flex-row justify-evenly gap-x-5 mt-6'>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <section className='mt-6'>
        <ProjectButtonContainer repo={repo} demo={demo} />
      </section>
    </section>
  )
}

export default ProjectContent

