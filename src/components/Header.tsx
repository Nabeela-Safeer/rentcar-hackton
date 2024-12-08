import React from 'react'
import { Input } from "@/components/ui/input"
import { FaHeart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Image from "next/image"


const Header = () => {
  return (
    <div className='mx-auto'>
        <div className='p-10 flex lg:xl:justify-between items-center bg-white'>
            <div className='flex gap-10'>
                <div className='text-2xl font-bold text-blueish'>MORENT</div>
                <div className='relative'>
                    <Input type="text" placeholder='Search something here' 
                    className='rounded-2xl w-[492px] absolute text-center text-[#596780] border-[#596780] opacity-35'/>
                    <div className='absolute bottom-0 left-2 xs:top-2'><IoSearch size={30} className='text-[#596780]'/></div>
                </div>
            </div>
            <div className='flex flex-row gap-5'>
                <div className='rounded-full w-[44px] h-[44px] border hover:bg-redish cursor-pointer xs:hidden xl:block'>
                    <FaHeart size={25} className='ml-2 mt-3'/>
                </div>
                <div className='rounded-full w-[44px] h-[44px] border hover:bg-redish cursor-pointer xs:hidden xl:block'>
                    <FaBell size={25} className='ml-2 mt-3'/>
                </div>
                <div className='rounded-full w-[44px] h-[44px] border hover:bg-redish cursor-pointer xs:hidden xl:block'>
                    <IoMdSettings size={25} className='ml-2 mt-3'/>
                </div>
                <div className='rounded-full'>
                    <Image
                    src="/images/Image.svg"
                    alt="profile"
                    width={44}
                    height={44}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header