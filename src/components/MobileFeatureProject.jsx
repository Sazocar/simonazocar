import Link from 'next/link'
import ProjectButtonContainer from '@/containers/ProjectButtonContainer'
import Image from 'next/image'

const MobileFeatureProject = ({ project }) => {
  const { title, description, tags, repo, demo, image } = project

  return (
    <section
      className={
        'mx-auto w-11/12 sm:w-full rounded bg-dark-blue flex flex-col justify-between mb-12'
      }
    >
      <Link
        className='hover:cursor-pointer'
        href={demo === '' ? repo : demo}
        target='__blank'
      >
        <Image
          width={1200}
          height={1200}
          sizes='100vw'
          className='rounded-tr rounded-tl sm:block hover:drop-shadow-2xl transition hover:ease-in duration-300 drop-shadow-sm'
          alt={title}
          src={image}
        />
      </Link>
      <article className='w-full px-7 py-7'>
        <h3 className='code text-xs mt-2 text-green'>Feature Project</h3>
        <h1 className='text-3xl mt-2 text-lightest-slate'>{title}</h1>
        <div className='mt-4 w-full text-slate text-justify hover:drop-shadow-2xl transition hover:ease-in duration-300 drop-shadow-sm'>
          <p>{description}</p>
        </div>
        <ul className='code text-xs text-slate flex flex-wrap	flex-row gap-x-5 mt-6'>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <section className='mt-6'>
          <ProjectButtonContainer repo={repo} demo={demo} />
        </section>
      </article>
    </section>
  )
}

export default MobileFeatureProject

