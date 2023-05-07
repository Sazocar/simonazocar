import Button from './Button'

const ActionButton = ({ text, onClick }) => {
  return (
    <div className='flex justify-center sm:flex sm:justify-start'>
      {text === 'Resume' ? (
        <a download href='/files/resume.pdf' target='_blank'>
          <Button text={text} onClick={onClick} />
        </a>
      ) : (
        <Button text={text} onClick={onClick} />
      )}
    </div>
  )
}

export default ActionButton

