import DownloadIcon from './DownloadIcon'

const Button = ({ text, onClick }) => {
  return (
    <div className='flex justify-center sm:flex sm:justify-start'>
      <button
        onClick={onClick}
        className='font-sans hover:ease-in duration-300 hover:bg-hover-color py-2 px-4 flex flex-row justify-evenly center w-36 sm:flex sm:flex-row sm:justify-evenly sm:w-36 text-green text-base border-2 border-green rounded-md'
      >
        {text === 'Resume' ? <DownloadIcon /> : null}
        {text === 'Resume' ? (
          <a download href='/files/resume.pdf' target='_blank'>
            {text}
          </a>
        ) : (
          text
        )}
      </button>
    </div>
  )
}

export default Button

