import Image from 'next/image'
import Link from 'next/link'
import Heading from './Heading'

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
    <section className='flex lg:h-screen flex-col sm:px-24 container center mx-auto justify-center bg-navy'>
      <Heading number='01' text='About Me' />
      <div className='mx-auto z-10 flex lg:flex-row lg:gap-x-20 flex-col justify-between items-center gap-y-10'>
        <section className='text-slate text-base w-full lg:w-7/12 md:text-lg px-6'>
          <p className='my-4 w-full '>
            I am a software engineering student at{' '}
            <span className='text-green'>
              <Link
                href='https://www.ucab.edu.ve/'
                className='hover:underline text-green decoration-solid'
                target='__blank'
              >
                {' '}
                Universidad Católica Andrés Bello
              </Link>
              .
            </span>{' '}
            My passion for coding and interest in{' '}
            <span className='text-green'>frontend development </span>
            led me to become a{' '}
            <span className='text-green'>Junior Frontend Developer</span>, where
            I&apos;ve been able to design and create visually appealing and
            user-friendly user interfaces for various projects.
          </p>

          <p className='my-4'>
            I love to create UI that not only looks good but also provides a
            great user experience. In this personal portfolio I&apos;m
            showcasing my{' '}
            <span className='text-green'>creativity and proficiency </span> in
            frontend development through several projects that highlight my
            skills in modern frontend technologies.
          </p>

          <p className='my-4'>
            I am always on the lookout for opportunities to{' '}
            <span className='text-green'>improve my skills </span>
            and knowledge in software engineering, and I hope to make a positive
            impact on the tech industry in the future.
          </p>

          <p>
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <div className='mt-8 flex justify-center md:justify-start code text-sm flex-row gap-x-12'>
            <ul>
              {technologies1.map((item) => (
                <li key={item.name} className='flex flex-row my-2 items-center'>
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
                <li
                  key={item.name}
                  className='flex flex-row my-2 items-center'
                >
                  <svg
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
        <div className='group relative [&>div]:hover:-translate-x-2 [&>div]:hover:-translate-y-2 [&>div]:ease-in-out [&>div]:duration-300 '>
          <Image
            className='sm:min-w-max drop-shadow-2xl z-10 rounded w-80 sm:grayscale sm:hover:grayscale-0 sm:ease-in-out duration-300'
            width={290}
            height={290}
            priority
            src='/portfolio-image.jpg'
            alt='Simón A. Azócar'
          />
          <span className='absolute -top-12 end-0 scale-0 transition-all rounded bg-dark-blue p-2 text-slate group-hover:scale-100'>
            ✨ Yep, this is me!
          </span>
          <div className='absolute top-5 left-5 w-80 h-full -z-10 sm:top-5 sm:left-5 sm:w-96 sm:h-full border-green border border-4 rounded '></div>
        </div>
      </div>
    </section>
  )
}

export default About




