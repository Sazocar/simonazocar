import ActionButton from './ActionButton'
import { Link } from 'react-scroll'

const NavItems = ({ openModal, setOpenModal, handleClick }) => {
  const navigation = [
    { name: 'About', ref: 'about', current: true },
    { name: 'Experience', ref: 'experience', current: false },
    { name: 'Work', ref: 'work', current: false },
    { name: 'Contact', ref: 'contact', current: false },
    { name: <ActionButton text='Resume' />, ref: '' },
  ]

  return (
    <div
      className={`-z-50 relative md:flex md:flex-row lg:justify-center items-center pr-2 md:ml-6 md:pr-0 
      ${openModal ? 'relative' : 'flex-row'}`}
    >
      <div className={`md:ml-6 md:block ${openModal ? 'flex' : 'hidden'}`}>
        <div
          className={`flex ${
            openModal
              ? 'bg-navy flex flex-col justify-center items-center absolute inset-0 top-32'
              : 'flex-row'
          }`}
        >
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              to={item.ref}
              spy={true}
              smooth={true}
              duration={500}
              className='code cursor-pointer text-slate flex md:justify-center hover:text-green transition hover:ease-in duration-300  rounded-md px-3 items-center py-2 text-sm text-xs'
              onClick={() => setOpenModal(false)}
            >
              <span className='code text-xs text-green mr-1'>
                {index !== 4 ? `0${index + 1}.` : null}
              </span>
              {index !== 4 ? item.name : null}
            </Link>
          ))}
          <ActionButton text='Resume' />
        </div>
      </div>
    </div>
  )
}

export default NavItems




