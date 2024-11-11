import React from 'react'
import { MdHome } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6 '>
        <div className="flex flex-shrink-0 items-center  text-4xl">
            <MdHome />
            <p className='font-semibold mx-3 text-2xl'>HomeHarmony</p>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-xl lg:gap-12'>
            <p>Upload</p>
            <p>Model</p>
            <p>Settings</p>
        </div>
    </div>
  )
}

export default Navbar