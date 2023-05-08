import featureProjectsData from '@/data/featureProjectsData'
import FeatureProject from './FeatureProject'
import Heading from './Heading'

// Make a new card for mobile size

const FeatureSection = () => {
  return (
    <section className='sm:px-24 box-border container mx-auto bg-navy'>
      <Heading number='03' text="Some Things I've Built" />
      {featureProjectsData.map((project, index) => (
        <FeatureProject key={project.title} project={project} index={index} />
      ))}
    </section>
  )
}

export default FeatureSection

