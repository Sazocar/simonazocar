import ProjectButtonContainer from './ProjectButtonContainer'

const ProjectContent = () => {
  return (
    <section className='flex flex-col justify-between items-end w-1/2'>
      <h3 className='code text-xs text-green'>Feature Project</h3>
      <h1 className='text-3xl mt-2 text-lightest-slate'>Avo Store</h1>
      <div className='mt-4 w-5/6 text-end z-40 text-slate rounded bg-dark-blue p-6 drop-shadow-2xl	'>
        <p>
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace, Package Control, Atom
          Package Manager, and npm.
        </p>
      </div>
      <ul className='code text-sm text-slate flex flex-row justify-evenly gap-x-5 mt-6'>
        <li>VS Code</li>
        <li>JS</li>
        <li>Sublime</li>
        <li>Hyper</li>
      </ul>
      <section className='mt-4'>
        <ProjectButtonContainer
          repo='https://tailwindcss.com/docs/transition-timing-function'
          demo='https://tailwindcss.com/docs/transition-timing-function'
        />
      </section>
    </section>
  )
}

export default ProjectContent

