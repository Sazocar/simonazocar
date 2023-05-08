const ButtonSelector = ({ data, selectedJobIndex, setSelectedJobIndex }) => {
  const handleClick = () => {
    setSelectedJobIndex(data.id)
  }

  return (
    <button
      className={`code px-4 py-3 whitespace-nowrap text-xs text-left transition hover:ease-in duration-300 hover:bg-dark-blue px-4 py-2 hover:text-green ${
        data.id === selectedJobIndex
          ? 'text-green border-l-2 border-green'
          : 'text-slate '
      }`}
      onClick={handleClick}
    >
      {data.category}
    </button>
  )
}

export default ButtonSelector


