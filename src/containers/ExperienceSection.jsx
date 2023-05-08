import { useState } from 'react'
import formationData from '@/data/formationData'
import ButtonSelector from '@/components/ButtonSelector'
import FormationDescription from '@/components/FormationDescription'
import Heading from '@/components/Heading'

const ExperienceSection = () => {
  const [selectedJobIndex, setSelectedJobIndex] = useState(0)

  return (
    <section className='sm:px-24 container center mx-auto'>
      <Heading number='03' text='Education and Development Knowledge' />
      <section className='max-w-2xl mx-auto flex flex-col md:flex-row'>
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

