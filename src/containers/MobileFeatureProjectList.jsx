import MobileFeatureProject from '@/components/MobileFeatureProject'
import featureProjectsData from '@/data/featureProjectsData'

const MobileFeatureProjectList = () => {
  return (
    <>
      {featureProjectsData.map((project, index) => (
        <MobileFeatureProject
          key={project.title}
          project={project}
          index={index}
        />
      ))}
    </>
  )
}

export default MobileFeatureProjectList

