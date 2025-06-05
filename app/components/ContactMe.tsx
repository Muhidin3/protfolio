import React from 'react'
import {Linkedin,Phone,Instagram,Mail,Github,} from 'lucide-react'
import Link from 'next/link'

function ContactMe() {
  return (
    <div className='bg-green-800 m-3 p-3 rounded-lg shadow-lg' style={{boxShadow:'0 0 20px #2a593e'}}>
        <h1 className='text-2xl'>Contact Me</h1>        
        <div className="flex flex-row justify-between mt-3">             
            <Link href={'mailto:muhidinshemsu3@gmail.com'}> <Mail/></Link> 
            <Link href={'https://github.com/muhidin3'}> <Github/></Link> 
            <Link href={'https://www.linkedin.com/in/muhidin-shemsu-3142792a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}> <Linkedin/></Link> 
            <Link href={'tel:+251931225507'}> <Phone/></Link> 
            <Link href={'https://www.instagram.com/m844d4n?utm_source=qr&igsh=NXdjbm12Nmlsb2Zl'}> <Instagram/></Link> 
        </div>
        
    </div>
  )
}

export default ContactMe