import Image from 'next/image'

const technologies1 = [
  { name: 'Javascript (ES6+)' },
  { name: 'React' },
  { name: 'Redux' },
  { name: 'Typescript' },
]

const technologies2 = [
  { name: 'NextJS' },
  { name: 'Tailwind CSS' },
  { name: 'Semantic UI' },
  { name: 'Ant Design' },
]

const About = () => {
  return (
    <section className='flex flex-col sm:px-4 container center mx-auto mb-24 justify-center bg-navy'>
      <header className='mb-8 w-full flex flex-row items-center sm:justify-start justify-center'>
        <h2 className='text-2xl px-3 font-semibold text-lightest-slate md:text-3xl'>
          <span className='code font-thin text-xl text-green'>01.</span> About
          Me
        </h2>
        <hr className='h-px w-52 sm:w-6/12 bg-gray-200 border-0 dark:bg-gray-700' />
      </header>
      <div className='mx-auto flex lg:flex-row lg:gap-x-20 flex-col justify-center items-center gap-y-10'>
        <section className='text-slate px-6'>
          <p className='my-4 text-base w-full md:text-lg'>
            I am a software engineering student at <span className='text-green'>Universidad Católica Andrés
            Bello.</span> My passion for coding and interest in <span className='text-green'>frontend development </span>
            led me to become a <span className='text-green'>Junior Frontend Developer</span>, where I have been able
            to design and create visually appealing and user-friendly user
            interfaces for various projects.
          </p>

          <p className='my-4 text-lg'>
            I love to create UI that not only looks good but also provides a
            great user experience. In this personal portfolio I&apos;m
            showcasing my <span className='text-green'>creativity and proficiency </span> in frontend development
            through several projects that highlight my skills in modern frontend
            technologies.
          </p>

          <p className='my-4 text-lg'>
            I am always on the lookout for opportunities to <span className='text-green'>improve my skills </span>
            and knowledge in software engineering, and I hope to make a positive
            impact on the tech industry in the future.
          </p>

          <p>
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <div className='mt-8 flex justify-center md:justify-start flex-row gap-x-12'>
            <ul>
              {technologies1.map((item) => (
                <li key={item.name} className='flex flex-row items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5 text-green'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                      clipRule='evenodd'
                    />
                  </svg>
                  {item.name}
                </li>
              ))}
            </ul>
            <ul>
              {technologies2.map((item) => (
                <li key={item.name} className='flex flex-row items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5 text-green'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                      clipRule='evenodd'
                    />
                  </svg>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Image
          className='sm:min-w-max rounded-md w-86 '
          width={290}
          height={290}
          priority
          src='/portfolio-image.jpg'
          alt='Simón A. Azócar'
        />
      </div>
    </section>
  )
}

export default About