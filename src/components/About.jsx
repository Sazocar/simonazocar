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
    <section className='mx-auto w-4/6'>
      <header className='mb-8 w-full flex flex-row items-center gap-x-2'>
        <h2 className='text-2xl px-3 font-semibold text-lightest-slate md:text-3xl'>
          <span className='code font-thin text-xl text-green'>01.</span> About
          Me
        </h2>
        <hr className='h-px w-36 sm:w-80 bg-gray-200 border-0 dark:bg-gray-700' />
      </header>
      <div className='lg:grid lg:grid-cols-2 lg:w-auto mx-auto flex flex-col justify-center items-center gap-y-10'>
        <section className='text-slate w-3/4'>
          <p className='my-4 text-lg'>
            I am a software engineering student at Universidad Católica Andrés
            Bello. My passion for coding and interest in frontend development
            led me to become a Junior Frontend Developer, where I have been able
            to design and create visually appealing and user-friendly user
            interfaces for various projects.
          </p>

          <p className='my-4 text-lg'>
            I love to create UI that not only looks good but also provides a
            great user experience. In this personal portfolio I&apos;m
            showcasing my creativity and proficiency in frontend development
            through several projects that highlight my skills in modern frontend
            technologies.
          </p>

          <p className='my-4 text-lg'>
            I am always on the lookout for opportunities to improve my skills
            and knowledge in software engineering, and I hope to make a positive
            impact on the tech industry in the future.
          </p>

          <p>
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <div className='flex flex-row'>
            <ul>
              {technologies1.map((item) => (
                <li key={item.name} className='flex flex-row items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5'
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
                    className='w-5 h-5'
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
          className='min-w-max rounded-md'
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