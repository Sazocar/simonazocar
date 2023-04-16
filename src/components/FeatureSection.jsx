import FeatureProject from './FeatureProject'
import Heading from './Heading'

const FeatureSection = () => {
  return (
    <section className='h-full sm:px-24 container mx-auto mb-24 justify-center bg-navy'>
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
    </section>
  )
}

export default FeatureSection

