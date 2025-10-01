import React from 'react'

function About_me() {
  return (
    <div className="my-10 mt-0 pt-10 px-20 text-white" id='about'>
      <div className="flex flex-col my-10 flex-wrap sm:flex-row">
            <div className="text-4xl m-3 p-3 ">
              <span> Hi, I{`'`}m Muhidin 👋 <br /></span>
              <span className='text-xl' style={{textWrap:'nowrap',textOverflow:'clip'}}>A Passionate Full-Stack Developer <br/></span>
            </div>
      </div>

        <div className='w-full p-3'>
            <div className='text-md ' style={{color:'rgba(255,255,255,0.8)'}}>
              <p className='' style={{lineHeight:'2', wordSpacing:'2px'}}>
              I build fast, responsive, and user-focused web applications using modern technologies like React, Node.js, and TypeScript.
              With a keen eye for detail and a passion for clean code, I strive to create seamless user experiences that drive engagement and satisfaction.
              <br />
              🚀 Turning ideas into real-world solutions  <br />
              🌐 Available Worldwide <br />
              </p>
            </div>
        </div>
    </div>
  )
}

export default About_me