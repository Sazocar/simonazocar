import DownloadIcon from './DownloadIcon'

const Button = ({ text, onClick }) => {
  return (
    <div className='flex justify-center sm:flex sm:justify-start'>
      <button
        onClick={onClick}
        className='code font-light hover:ease-in duration-300 hover:bg-hover-color h-12 py-2 px-4 flex flex-row items-center justify-evenly center w-36 sm:flex sm:flex-row sm:justify-evenly sm:w-36 text-green text-sm border-2 border-green rounded-md'
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

