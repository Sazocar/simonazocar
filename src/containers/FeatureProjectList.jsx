import FeatureProject from '@/components/FeatureProject'
import featureProjectsData from '@/data/featureProjectsData'

const FeatureProjectList = () => {
  return (
    <>
      {featureProjectsData.map((project, index) => (
        <FeatureProject key={project.title} project={project} index={index} />
      ))}
    </>
  )
}

export default FeatureProjectList
