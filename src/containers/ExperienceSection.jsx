import { useState } from 'react'
import formationData from '@/data/formationData'
import ButtonSelector from '@/components/ButtonSelector'
import FormationDescription from '@/components/FormationDescription'
import Heading from '@/components/Heading'

const ExperienceSection = () => {
  const [selectedJobIndex, setSelectedJobIndex] = useState(0)

  return (
    <section id='experience' className='sm:px-24 container center pt-2 mx-auto'>
      <Heading number='02' text='Education and Training' width='w-3/5'/>
      <section className='max-w-2xl mx-auto mt-16 flex flex-col md:flex-row'>
        <div className='flex flex-row md:flex-col justify-center md:justify-start'>
          {/* Render a button for each formation */}
          {formationData.map((data) => (
            <ButtonSelector
              key={data.id}
              data={data}
              selectedJobIndex={selectedJobIndex}
              setSelectedJobIndex={setSelectedJobIndex}
            />
          ))}
        </div>
        {/* Render the information for the selected formation item */}
        <FormationDescription
          formationData={formationData}
          selectedJobIndex={selectedJobIndex}
        />
      </section>
    </section>
  )
}

export default ExperienceSection

