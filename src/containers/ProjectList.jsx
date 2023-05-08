import ProjectCard from '@/components/ProjectCard'
import ActionButton from '@/components/ActionButton'
import othersProjectsData from '@/data/othersProjectsData'
import { useState } from 'react'

const ProjectList = () => {
  const [numToShow, setNumToShow] = useState(6)
  const visibleItems = othersProjectsData.slice(0, numToShow)

  const handleShowMore = () => {
    setNumToShow(othersProjectsData.length)
  }

  const handleShowLess = () => {
    setNumToShow(6)
  }

  return (
    <>
      <div className='container w-3/4 mx-auto gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {visibleItems.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className='grid place-items-center my-12'>
        {numToShow < othersProjectsData.length ? (
          <ActionButton text='Show More' onClick={handleShowMore} />
        ) : (
          <ActionButton text='Show Less' onClick={handleShowLess} />
        )}
      </div>
    </>
  )
}

export default ProjectList

