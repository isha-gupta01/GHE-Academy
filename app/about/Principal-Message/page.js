import React from 'react'

// import Link from 'next/link'
import Image from 'next/image'
import Principle from "@/assets/images/principle.png"


const PrncipleMessage = () => {
  return (
    <div className='flex-col'>
      <div><h1 className='font-extralight text-[3rem] mt-4 mb-6 ml-8'>Principal's Message</h1></div>
      <div className='flex' >
        <Image className=' ml-8 mr-8' src={Principle} alt='Manager' width={1400} height={1200} />
        <div className='mr-16 text-justify'>
          <p className='ml-8 text-xl'>At Green Heaven English Academy, we believe education is a partnership between students, parents, and teachers. We foster strong relationships with parents to provide the best support for our students. Our school offers excellent learning opportunities, helping students develop holistically and reach their full potential as confident global citizens.</p>
          <p className='ml-8 mt-4 text-xl'>Recognized as one of the top-performing schools in Saharanpur, we take pride in our high academic standards and vibrant learning environment. Our commitment to continuous improvement ensures that students achieve outstanding results, and we constantly strive to enhance the quality of education. We look forward to welcoming you into our school community.</p>
          <div className='flex mt-14 flex-col ml-auto w-max'>
            <p className='font-bold'>Mr. Manuj Dutt Sharma</p>
            <p>Principle</p>
            <p>Green Heaven English Academy</p>
          </div>
        
        </div>
        
      </div>
    </div>
  )
}


export default PrncipleMessage


