export function Button ({ onClick, children }) {
  return (
    <button
      className='bg-slate-800 p-2 mt-10 rounded-md hover:bg-slate-800/50'
      onClick={onClick}
    >
      {children}
    </button>
  )
}