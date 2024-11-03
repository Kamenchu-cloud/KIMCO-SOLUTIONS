import React from 'react'
import heroImg from '../assets/herobanner.jpg';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex flex-col justify-center px-8 py-16 sm:py-0 bg-gray-50'>
        <div className='text-gray-800 space-y-4'>
          {/* Category Label */}
          <div className='flex items-center gap-3'>
            <div className='w-10 h-[3px] bg-gray-800'></div>
            <p className='font-semibold text-sm uppercase tracking-wide text-gray-700'>Best Sellers</p>
          </div>
          
          {/* Main Title */}
          <h1 className='font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900'>
            Office Essentials
          </h1>
          
          {/* Call-to-Action */}
          <div className='mt-6'>
            <a href="/collection" className='inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out'>
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <div className='w-full sm:w-1/2'>
        <img className='w-full h-full object-cover' src={heroImg} alt="Office Supplies Banner" />
      </div>
    </div>
  );
}

export default Hero;
