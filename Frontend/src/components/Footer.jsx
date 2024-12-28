import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <NavLink to='/'><img src={assets.logo} className=' mb-5 w-32' alt='logo' /></NavLink>
            <p className=' w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut fugit distinctio labore iusto nemo provident omnis. Non, hic voluptatibus. Quae asperiores tempora deserunt esse omnis dolorem nihil explicabo iure.
            </p>
        </div>

        <div>
            <p className=' text-xl font-medium mb-5'>COMPANY</p>
            <ul className=' flex flex-col gap-1 text-gray-600 cursor-pointer'>
                <a href='/'><li>HOME</li></a>
                <a href='/about'><li>ABOUT US</li></a>
                <a href='/myOrdres'><li>DELIVERY</li></a>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>

        <div>
            <p className=' text-xl font-medium mb-5'>GET IN TOUCH</p>
                <u className=' flex flex-col gap-1 text-gray-600 cursor-pointer'>
                   <NavLink to='tel: +91 8356965556'><li>+91 8356965556</li></NavLink>
                   <a href=''><li>Mayankkumar02049@gmail.com</li></a>
                </u>
        </div>

      </div>

      <div>
        <hr />
        <p className=' py-5 text-sm text-center'>Copyright 2024@ CodeWithMayank - All Right Reserved.</p>
      </div>


      <div className=' fixed bottom-0 mx-6 '>
     <a href='tel: +91 8356965556'><button className=' bg-red-700 text-white px-10 py-3 text-sm active:bg-gray-700'>CONTACT US</button></a>
      <a href='https://wa.link/7say3a'><button className=' bg-green-500 text-white px-8 py-3 text-sm active:bg-gray-700'>WHATSAPP</button></a>
      </div>


    </div>
  )
}

export default Footer
