import React from 'react'

function Header() {
  return (
    <div className="sticky px-3 top-1 w-full ">
    <div className='px-7 py-3 rounded-2xl  ' style={{backgroundColor:'rgba(30,64,45,0.7)',backdropFilter: 'blur(10px)'}}>
      <ul className='flex justify-between ' style={{color:'white'}}>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </div>
    </div>
  )
}

export default Header
