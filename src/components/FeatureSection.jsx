import FeatureProject from './FeatureProject'
import Heading from './Heading'

const FeatureSection = () => {
  return (
    <section className='h-screen flex flex-col sm:px-24 container center mx-auto mb-24 justify-center bg-navy'>
      <Heading number='02' text='Some Things I’ve Built' />
      <FeatureProject
        title='AvoStore'
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        tags='js'
      />
    </section>
  )
}

export default FeatureSection

