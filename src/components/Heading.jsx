const Heading = ({ number, text, width }) => {
  return (
    <header
      className={`mt-24 mb-8 flex flex-row items-center sm:justify-start justify-center ${
        width ? `sm:${width} sm:mx-auto` : ''
      }`}
    >
      <h2 className='text-2xl px-3 whitespace-nowrap font-semibold sm:w-auto text-lightest-slate md:text-3xl'>
        <span className='code font-thin text-xl text-green'>{number}.</span>{' '}
        {text}
      </h2>
      <hr className='h-px w-1/5 sm:w-3/5 bg-gray-200 border-0 dark:bg-gray-700' />
    </header>
  )
}

export default Heading

