import React from 'react'

function Header() {
  return (
    <div className="sticky px-5 top-3 w-full max-w-[1000px] place-self-center z-50">
    <div className='px-7 py-3 rounded-2xl  bg-slate-600/50' style={{backdropFilter: 'blur(10px)'}}>
      <ul className='flex justify-between'>
        {/* <a href="#"><li className='text-white'>Muhidin</li></a>  */}
        <a href="#about"><li className='text-white'>About me</li></a> 
        <a href="#projects"><li className='text-white'>Projects</li></a> 
        <a href="#skills"><li className='text-white'>Skills</li></a> 
        <a href="#contact"><li className='text-white'>Contact</li></a> 
      </ul>
    </div>
    </div>
  )
}

export default Header
