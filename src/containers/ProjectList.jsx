import ProjectCard from '@/ProjectCard'
import othersProjectsData from '@/data/othersProjectsData'

const ProjectList = () => {
  return (
    <div className='container w-3/4 mx-auto gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
      {othersProjectsData.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  )
}

export default ProjectList

