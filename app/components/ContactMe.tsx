import Image from 'next/image'
import React from 'react'

function ContactMe() {
  return (
    <div className='bg-green-800 m-3 p-3 rounded-lg shadow-lg' style={{boxShadow:'0 0 20px #2a593e'}}>
        <h1 className='text-2xl'>Contact Me</h1>        

        <ul>
            <li className='flex flex-row '>
                {/* <Image src={'/whatsup.png'} alt='email logo' width={50} height={50} className='mr-5'/>: */}
                Email:
                muhidinshesu3@gmail.com
            </li>
            <li className='flex flex-row '>
                {/* <Image src={'/whatsup.png'} alt='email logo' width={50} height={50} className='mr-5'/>: */}
                Github:
                Muhidin3
            </li>
            <li className='flex flex-row '>
                {/* <Image src={'/whatsup.png'} alt='email logo' width={50} height={50} className='mr-5'/>: */}
                Telegram:@Mskmmala
            </li>
            <li className='flex flex-row '>
                {/* <Image src={'/whatsup.png'} alt='email logo' width={50} height={50} className='mr-5'/>: */}
                Instagram:md44d4n
            </li>
            <li className='flex flex-row '>
                <Image src={'/whatsup.png'} alt='email logo' width={30} height={10} className=''/>
            </li>
        </ul>
    </div>
  )
}

export default ContactMe