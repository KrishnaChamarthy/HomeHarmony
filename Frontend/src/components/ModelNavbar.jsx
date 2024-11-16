import React from 'react'
import { MdHome } from 'react-icons/md'
import { LuRedo2, LuUndo2 } from "react-icons/lu";
import { CiExport, CiSaveDown2 } from "react-icons/ci";


const ModelNavbar = () => {
  return (
    <nav className='flex items-center justify-between py-2 px-4 lg:px-8 bg-[#363636]'>
        
        <div className='flex items-center text-3xl'>
            <MdHome />
            <p className='font-semibold mx-3 text-2xl'>HomeHarmony</p>
            <p className=' mx-8 text-xl'>File</p>
            <LuUndo2 className='text-2xl font-thin'/>
            <LuRedo2 className='text-2xl ml-8 font-thin'/>
        </div>

        <div className='flex items-center gap-8 mx-4 '> 
            <div className='text-lg flex items-center gap-2 border border-[#DADADA] py-1 px-3 rounded-full cursor-pointer transition duration-300 hover:bg-[#DADADA] hover:text-[#1A1A1A]'><span className='text-2xl'><CiSaveDown2 /></span>Save</div>
            <div className='text-lg flex items-center gap-2 bg-[#DADADA] py-1 px-3 text-[#1A1A1A] rounded-full'><span className='text-2xl'><CiExport /></span>Export</div>
        </div>

    </nav>
  )
}

export default ModelNavbar