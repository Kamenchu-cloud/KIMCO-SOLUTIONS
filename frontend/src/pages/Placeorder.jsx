import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import mpesaLogo from '../assets/M-PESA-logo-2.png';
import { ShopContext } from '../context/ShopContext';

const Placeorder = () => {
  const [method, setMethod] = useState("cod");

  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
      {/* ------------------ Left Side ---------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Province' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street address' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Phone number' />
      </div>

      {/* ------------------------ Right Side ------------------------ */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          
          {/* Payment Method Selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <label onClick={() => setMethod("mpesa")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <input type="radio" name="paymentMethod" value="mpesa" checked={method === "mpesa"} onChange={() => setMethod("mpesa")} className='hidden' />
              <span className={`min-w-[14px] h-[14px] border rounded-full ${method === "mpesa" ? "bg-green-600" : ""}`}></span>
              <img className='h-[80px] mx-4' src={mpesaLogo} alt="M-PESA Logo" />
            </label>
            <label onClick={() => setMethod("cod")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <input type="radio" name="paymentMethod" value="cod" checked={method === "cod"} onChange={() => setMethod("cod")} className='hidden' />
              <span className={`min-w-[14px] h-[14px] border rounded-full ${method === "cod" ? "bg-green-600" : ""}`}></span>
              <p className='text-gray-700 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </label>
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate("/orders")} className='bg-black text-white px-16 py-3 text-sm'>FINALIZE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Placeorder;
