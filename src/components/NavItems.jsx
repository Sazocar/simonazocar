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
    <div className={`${openModal ? '' : 'flex-row'}`}>
      <div className={`md:flex ${openModal ? 'flex' : 'hidden'}`}>
        <div
          className={`flex ${
            openModal
              ? 'bg-navy w-screen flex flex-col justify-center items-center mx-auto absolute inset-x-0 mt-6 py-12'
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
              className='code cursor-pointer text-slate flex md:justify-center hover:text-green transition hover:ease-in duration-300  rounded-md px-3 items-center py-4 text-base sm:text-sm'
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

