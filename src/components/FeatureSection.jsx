import FeatureProject from './FeatureProject'
import Heading from './Heading'

const FeatureSection = () => {
  return (
    <section className='sm:px-24 container mx-auto my-24 bg-navy'>
      <Heading number='02' text='Some Things I’ve Built' />
      <FeatureProject
        title='AvoStore'
        description={`A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.`}
        tags='js'
        index='0'
      />
      <FeatureProject
        title='AvoStore'
        description={`A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.`}
        tags='js'
        index='1'
      />
      <FeatureProject
        title='AvoStore'
        description={`A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.`}
        tags='js'
        index='2'
      />
    </section>
  )
}

export default FeatureSection

