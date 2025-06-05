import React from 'react'

function Header() {
  return (
    <div className="sticky px-3 top-1 w-full ">
    <div className='px-7 py-3 rounded-2xl  ' style={{backgroundColor:'rgba(30,64,45,0.7)',backdropFilter: 'blur(10px)'}}>
      <ul className='flex justify-between ' style={{color:'white'}}>
        <a href="#about"><li>About</li></a> 
        <a href="#projects"><li>Projects</li></a> 
        <a href="#skills"><li>Skills</li></a> 
        <a href="#contact"><li>Contact</li></a> 
      </ul>
    </div>
    </div>
  )
}

export default Header
