import React from 'react'

function Header() {
  return (
    <div className='m-3 px-7 py-3 rounded-2xl sticky top-1' style={{backgroundColor:'rgba(30,64,45,0.7)',backdropFilter: 'blur(10px)'}}>
      <ul className='flex justify-between ' style={{color:'white'}}>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
        <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle">…</svg>
      </ul>
    </div>
  )
}

export default Header
