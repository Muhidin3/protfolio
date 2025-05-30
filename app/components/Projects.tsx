import Image from 'next/image'
import React from 'react'

function Projects() {

  const projects = [
    {
      name:'MarketPlace',
      description:`A user-powered marketplace for buying and selling items. Features: image uploads, search filters, user authentication.`,
      photo:'https://s',
      toolsused:['React','tailwind','Nextjs','Mongodb','MaterialUI','Expressjs','Mongoose','framer-motion','bcrypt']
    },
    {
      name:'Agency Manager',
      description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Rem cum illum, repudiandae aspernatur voluptatibus eos sapiente
           quasi voluptatum maiores error, vero nam nisi, libero dolorem. 
          Minima itaque architecto dolorum earum.`,
      photo:'https://s',
      toolsused:['React','tailwind','Nextjs','Mongodb','MaterialUI','Expressjs','Mongoose','framer-motion','bcrypt']
    },
  ]




  return (
    <div className='m-3 p-3' >
      <h1 className='text-3xl'>Projects</h1> 
      {projects.map((v,i)=>{
        return<div key={i} className='mt-4 rounded-2xl' style={{backgroundColor:'#11261a'}}>
          <div className="p-5 mb-2">
            <h1 className='text-2xl mb-2'>{v.name}</h1>
            <p>{v.description}</p>
            <div className="flex flex-row flex-wrap">
            {v.toolsused.map((v)=><div key={v} className='border-2 p-1 m-1 ml-0 mb-0' style={{borderColor:'#1e402d'}}>{v}</div>)}

            </div>
          </div>

        <div className="bg-gray-500 min-h-52 rounded-2xl" style={{width:'100%'}}>
            <Image src={'/ecom.png'} alt='fchdgskjlk' width={2000} height={2000} style={{borderRadius:'15px'}}/>
        </div>
    </div>
      })}
      
    </div>
  )
}

export default Projects