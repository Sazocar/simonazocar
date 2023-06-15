import ProjectButtonContainer from './ProjectButtonContainer'

const ProjectContent = ({ project, index }) => {
  const { title, description, tags, repo, demo } = project

  return (
    <section
      className={
        index % 2 === 0
          ? 'absolute right-0 flex flex-col justify-between items-end w-1/2'
          : 'absolute left-0 flex flex-col justify-between items-start w-1/2'
      }
    >
      <h3 className='code text-xs text-green'>Feature Project</h3>
      <h1 className='text-3xl mt-2 text-lightest-slate'>{title}</h1>
      <div
        className={`mt-4 w-full text-slate rounded bg-dark-blue p-6 hover:drop-shadow-2xl transition hover:ease-in duration-300 drop-shadow-sm 
        ${index % 2 === 0 ? 'text-end' : 'text-start'}`}
      >
        <p>{description}</p>
      </div>
      <ul className='code text-xs text-slate flex flex-wrap flex-row gap-x-5 w-4/5 mt-6'>
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

