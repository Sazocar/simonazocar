import { useState, useEffect } from 'react'
import Heading from './Heading'
import FeatureProjectList from '@/containers/FeatureProjectList'
import MobileFeatureProjectList from '@/containers/MobileFeatureProjectList'

const FeatureSection = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  // Use useEffect to update the state based on the current screen size
  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth >= 1024) // Replace 1024 with your desired breakpoint
    }
    handleResize() // Call the function initially to set the state
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className='sm:px-24 box-border container mx-auto bg-navy'>
      <Heading number='03' text="Some Things I've Built" />
      {isLargeScreen ? <FeatureProjectList /> : <MobileFeatureProjectList />}
    </section>
  )
}

export default FeatureSection

