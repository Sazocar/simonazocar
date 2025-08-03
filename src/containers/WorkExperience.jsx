import { useState } from 'react'
import workExperience from '@/data/workExperience'
import ButtonSelector from '@/components/ButtonSelector'
import FormationDescription from '@/components/FormationDescription'
import Heading from '@/components/Heading'

const WorkExperience = () => {
  const [selectedJobIndex, setSelectedJobIndex] = useState(0)

  return (
    <section id='work' className='sm:px-24 container center pt-2 mx-auto'>
      <Heading number='03' text='Where I’ve Worked' width='w-3/5'/>
      <section className='max-w-2xl mx-auto mt-16 flex flex-col md:flex-row'>
        <div className='flex flex-row md:flex-col justify-center md:justify-start'>
          {/* Render a button for each formation */}
          {workExperience.map((data) => (
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
          formationData={workExperience}
          selectedJobIndex={selectedJobIndex}
        />
      </section>
    </section>
  )
}

export default WorkExperience
