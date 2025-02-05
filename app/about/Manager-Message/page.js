import React from 'react'
// import Link from 'next/link'
import Image from 'next/image'
import Manager from "@/assets/images/manager.png"


const PrncipleMessage = () => {
  return (
    <div className='flex-col'>
      <div><h1 className='font-extralight text-[3rem] mt-4 mb-6 ml-8'>Principal's Message</h1></div>
      <div className='flex' >
        <Image className=' ml-8 mr-8' src={Manager} alt='Manager' width={1400} height={1200} />
        <div className='mr-16 text-justify'>
          <p className='ml-8 text-xl'>Since its inception in 1996, the society has been a guiding force in delivering quality education and has become a symbol of excellence. Governed by distinguished personalities from various fields, it is led by people of excellence who work in the larger interest of society.</p>
          <p className='ml-8 mt-4 text-xl'>Committed to the philosophy of quality education for all, the society has established two senior secondary schools in Kalsiya, Saharanpur, to serve as many children as possible. Centralized governance by eminent leaders ensures high standards, making these schools torchbearers in education. With a strong belief that children are the nation’s wealth, the society remains dedicated to its fundamental educational principles.</p>
          <div className='flex mt-14 flex-col ml-auto w-max'>
            <p className='font-bold'>Mr. Sunil Dutt</p>
            <p>Manager</p>
            <p>Green Heaven English Academy</p>
          </div>
        
        </div>
        
      </div>

    </div>
  )
}

export default PrncipleMessage
