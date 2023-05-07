import Image from 'next/image'
import ActionButton from './ActionButton'

const NavBar2 = () => {
  return (
    <header className='flex flex-row items-center justify-between  mx-6 mt-6'>
      <div>
        <Image
          width={100}
          height={100}
          className='h-14 w-auto'
          src='data:image/png;base64,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'
          alt='Simón A. Azócar'
        />
      </div>

      <nav className='text-slate  text-sm flex flex-col fixed inset-y-0 inset-x-0 left-1/4'>
        <ul className='flex sm:flex-row bg-dark-blue h-full items-center flex-col code list-none p-0 m-0 gap-8 justify-center'>
          <li>
            <a href='' className='flex flex-col items-center text-base'>
              <span className='code text-xs text-green mx-3'>01.</span>About
            </a>
          </li>
          <li>
            <a href='' className='flex flex-col items-center text-base'>
              <span className='code text-xs text-green mx-3'>02.</span>
              Experience
            </a>
          </li>
          <li> 
            <a href='' className='flex flex-col items-center text-base'>
              <span className='code text-xs text-green mx-3'>03.</span>Work
            </a>
          </li>
          <li>
            <a href='' className='flex flex-col items-center text-base'>
              <span className='code text-xs text-green mx-3'>04.</span>Contact
            </a>
          </li>
          <li>
            <ActionButton text='Resume' />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar2






