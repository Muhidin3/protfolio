import React from 'react'

function Skills() {


  const skills = [
    { skill:'FrontEnd',
      skills:['React.js', 'Next.js', 'Tailwind CSS', 'Material UI', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
    },
    { skill:'Backend',
      skills:['Node.js', 'Express.js', 'MongoDB', 'GraphQL', 'REST APIs'],
    },
    { skill:'DevOps & Tools',
      skills:['Git & GitHub', 'Docker', 'AWS (S3, EC2, Amplify)', 'Vercel', 'Render',],
    },
    { skill:'Other',
      skills:['UI/UX Design', 'Responsive Design', 'Video Editing',  'Agile Workflow', 'Problem Solving',],
    },
  ]

  return (
    <div className='m-3 p-3 pt-15' id='skills'>
      <h1 className='text-3xl mb-3'>Skills</h1>
      <div className="" >
        {skills.map((v,i)=><div key={i} className='my-5 p-3 rounded-2xl' style={{backgroundColor:'#11261a',color:'white'}}>
          <h1 className='text-xl ' >{v.skill}</h1>
            <div className="flex flex-row flex-wrap">
                {v.skills.map((val,it)=><p className='ml-2 border-2 p-1 mb-1' style={{borderColor:'#1e402d'}} key={it}>{val}</p>)}
            </div>

        </div>)}
      </div>



    </div>
  )
}

export default Skills