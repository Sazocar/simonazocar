import featureProjectsData from '@/data/featureProjectsData'
import FeatureProject from './FeatureProject'
import Heading from './Heading'

const FeatureSection = () => {
  return (
    <section className='sm:px-24 box-border container mx-auto my-24 bg-navy'>
      <Heading number='02' text="Some Things I've Built" />
      {featureProjectsData.map((project, index) => (
        <FeatureProject key={project.title} project={project} index={index} />
      ))}
      {/* <FeatureProject
        title='AvoStore'
        description={`A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.`}
        tags='js'
        index='0'
      />
      <FeatureProject
        title='AvoStore'
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        tags='js'
        index='1'
      />
      <FeatureProject
        title='AvoStore'
        description={`A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.`}
        tags='js'
        index='2'
      /> */}
    </section>
  )
}

export default FeatureSection



