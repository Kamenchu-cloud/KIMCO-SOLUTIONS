import React from 'react'
import kimcoLogo from '../assets/kimco_logo.jpg';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            
            <div>
                <img src={kimcoLogo} className='mb-5 w-32' alt="Kimco Solutions Logo" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Kimco Solutions is dedicated to providing high-quality office supplies that keep your workspace running smoothly. From essential items to innovative solutions, we're here to support your productivity and success every step of the way.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    {/* <li>Home</li> */}
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/contact'>Contact Us</Link>
                    {/* <li>Delivery</li> */}
                    {/* <Link to='/policy'>Privacy Policy</Link> */}
                    {/* <li>Privacy Policy</li> */}
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Phone: +254705067895</li>
                    <li>Email: contact@kimcosol.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>© 2024 Kimco Solutions - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
