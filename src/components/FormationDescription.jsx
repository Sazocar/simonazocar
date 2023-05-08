const FormationDescription = ({ formationData, selectedJobIndex }) => {
  return (
    <div className='mt-4 sm:mt-0 w-full px-8 text-slate'>
      {formationData[selectedJobIndex].title.map((title) => (
        <span
          key={title}
          className={`text-lg text-lightest-slate ${
            formationData[selectedJobIndex].title.length !== 1 ? 'flex' : ''
          }`}
        >
          {formationData[selectedJobIndex].title.length === 1
            ? title
            : `- ${title}`}
        </span>
      ))}
      <span className='text-green'>{` @ ${formationData[selectedJobIndex].institution}`}</span>
      <h2 className='code mt-2 text-xs'>
        {formationData[selectedJobIndex].date.join(' ⎯ ')}
      </h2>
      <ul className='mt-4 list-none h-auto'>
        {formationData[selectedJobIndex]?.description.map((item) => (
          <li
            key={item}
            className='p-2 m-0 text-sm flex flex-shrink-0 items-start'
          >
            <svg
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-6 h-auto flex-shrink-0 text-green'
            >
              <path
                fillRule='evenodd'
                d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                clipRule='evenodd'
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FormationDescription


