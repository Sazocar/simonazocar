import ProjectButtonContainer from './ProjectButtonContainer'

const ProjectContent = ({ index, description }) => {
  return (
    <section
      className={
        index % 2 === 0
          ? 'absolute top-10 left-0 flex flex-col justify-between items-start w-1/2'
          : 'absolute top-10 right-0 flex flex-col justify-between items-end w-1/2'
      }
    >
      <h3 className='code text-xs text-green'>Feature Project</h3>
      <h1 className='text-3xl mt-2 text-lightest-slate'>Avo Store</h1>
      <div
        className={
          index % 2 === 0
            ? 'mt-4 w-full text-start z-40 text-slate rounded bg-dark-blue p-6 hover:drop-shadow-2xl transition hover:ease-in duration-300 drop-shadow-sm'
            : 'mt-4 w-full text-end z-40 text-slate rounded bg-dark-blue p-6 hover:drop-shadow-2xl transition hover:ease-in duration-300 drop-shadow-sm'
        }
      >
        <p>
          {description}
        </p>
      </div>
      <ul className='code text-xs text-slate flex flex-row justify-evenly gap-x-5 mt-6'>
        <li>VS Code</li>
        <li>JS</li>
        <li>Sublime</li>
        <li>Hyper</li>
      </ul>
      <section className='mt-6'>
        <ProjectButtonContainer
          repo='https://tailwindcss.com/docs/transition-timing-function'
          demo='https://tailwindcss.com/docs/transition-timing-function'
        />
      </section>
    </section>
  )
}

export default ProjectContent

