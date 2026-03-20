import React from 'react'

const Navbar = ({setToggle,toggle}) => {
  return (
    <div className='h-[10%] px-10 flex items-center justify-between bg-black rounded-xl text-white'>
        <div className='h-[70%] flex gap-3 items-center justify-center text-md'>
            <p className='p-2 cursor-pointer font-semibold text-md'>Home</p>
            <p className='p-2 cursor-pointer font-semibold text-md'>About</p>
        </div>
        <button onClick={() => setToggle((prev)=>!prev)} className='px-6 text-md py-2 bg-amber-700 cursor-pointer outline-none rounded-xl'>{toggle? 'Show Posts':'+Posts'}</button>
    </div>
  )
}

export default Navbar