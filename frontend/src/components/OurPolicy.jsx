import React from 'react'
import exch_img from '../assets/exchange.png';
import quality_img from '../assets/quality.png';
import support_img from '../assets/customer-service.png';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        
        <div>
            <img src={exch_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Exchange Eligibility</p>
            <p className='text-gray-400'>
                Our Exchange Policy is designed to make returning or exchanging your office equipment simple and hassle-free.
            </p>
        </div>
        <div>
            <img src={quality_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Quality Assurance Policy</p>
            <p className='text-gray-400'>
                We provide office equipment that meets the highest standards of quality, reliability, and performance. 
            </p>
        </div>
        <div>
            <img src={support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Exchange Eligibility</p>
            <p className='text-gray-400'>
            We offer exceptional customer support to ensure your experience with us is seamless and satisfactory.
                </p>
        </div>

    </div>
  )
}

export default OurPolicy