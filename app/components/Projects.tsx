import Link from 'next/link'
import React from 'react'

function Projects() {

  const projects = [
    {
      name:'MarketPlace',
      description:`A user-powered marketplace for buying and selling items. Features: image uploads, search filters, user authentication.`,
      photo:'https://s',
      toolsused:['Nextjs','tailwind','React','Mongodb','MaterialUI','Next-auth','Mongoose','framer-motion','bcrypt'],
      link:'https://ecom-mauve-eight.vercel.app/'
    },
    {
      name:'Agency Manager',
      description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Rem cum illum, repudiandae aspernatur voluptatibus eos sapiente
           quasi voluptatum maiores error, vero nam nisi, libero dolorem. 
          Minima itaque architecto dolorum earum.`,
      photo:'https://s',
      toolsused:['React','tailwind','AWS','Mongodb','MaterialUI','Expressjs','Mongoose','framer-motion','multer','S3']
      ,link:'https://agency-kpdq.onrender.com/'
    },
  ]




  return (
    <div className='m-3 p-3 pt-15' id='projects'>
      <h1 className='text-3xl'>Projects</h1> 
      {projects.map((v,i)=>{
        return<div key={i} className='mt-4 rounded-2xl' style={{backgroundColor:'#11261a'}}>
          <div className="p-5 mb-2">
            <h1 className='text-2xl mb-2'>{v.name}</h1>
            <p>{v.description}</p>
            <div className="flex flex-row flex-wrap">
            {v.toolsused.map((v)=><div key={v} className=' border-2 p-1 m-1 ml-0 mb-0' style={{borderColor:'#1e402d'}}>{v}</div>)}
            </div>

            <div className="block mt-1">
              <Link href={v.link!}>{v.link}</Link>
            </div>
          </div>
    </div>
      })}
      
    </div>
  )
}

export default Projects