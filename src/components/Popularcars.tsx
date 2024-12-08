import React from 'react';
import {Button} from './ui/button';
import { CiHeart } from "react-icons/ci";
import Image from 'next/image';
import { FaHeart} from "react-icons/fa";

const Popularcars = () => {
  return (
    <div className='p-10'>
        <div className='flex justify-between'>
            <h1 className='text-base font-semibold text-[#90A3BF]'>Popular Car</h1>
            <Button className='text-blueish'>View all</Button>
        </div>

        {/* grid section */}
        <div className='grid grid-cols-4 gap-10 mt-3 xl:grid-cols-4 xs:grid-cols-1 '>

            {/* image1 */}
            <div className='bg-white p-5'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-xl font-bold'>Koenigsegg</h1>
                        <p className='text-[#90A3BF]'>Sport</p>
                    </div>
                    <div>
                        <FaHeart size={30} className="text-redish"/>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-10'>
                    <Image
                    src="/images/image 7.svg"
                    alt='image'
                    width={232}
                    height={72}/>
                </div>
                <div className='mt-12'>
                <Image
                    src="/images/Spesification.svg"
                    alt='image'
                    width={256}
                    height={24}/>
                </div>
                <div className='mt-5 flex gap-16'>
                    <div>
                        <h1 className="text-xl font-bold">$99.00/<span className='text-xs text-[#90A3BF]'> day </span></h1>
                    </div>
                    <div>
                        <Button className='bg-blueish text-white '>Rent Now</Button>
                    </div>
                </div>
            </div>

            {/* image2 */}

            <div className='bg-white p-5 xs:hidden xl:block'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-xl font-bold'>Nissan GT - R</h1>
                        <p className='text-[#90A3BF]'>Sport</p>
                    </div>
                    <div>
                        <CiHeart size={30}/>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-10'>
                    <Image
                    src="/images/car.svg"
                    alt='image'
                    width={232}
                    height={72}/>
                </div>
                <div className='mt-12'>
                <Image
                    src="/images/Spesification.svg"
                    alt='image'
                    width={256}
                    height={24}/>
                </div>
                <div className='mt-5 flex gap-16'>
                    <div>
                        <h1 className="text-xl font-bold">$80.00/<span className='text-xs text-[#90A3BF]'> day </span></h1>
                        <span className='line-through text-[#90A3BF]'>$100.00</span>
                    </div>
                    <div>
                        <Button className='bg-blueish text-white '>Rent Now</Button>
                    </div>
                </div>
            </div>

            {/* image3 */}

            <div className='bg-white p-5 xs:hidden xl:block'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-xl font-bold'>Rolls - Royce</h1>
                        <p className='text-[#90A3BF]'>Sport</p>
                    </div>
                    <div>
                        <FaHeart size={30} className="text-redish"/>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-10'>
                    <Image
                    src="/images/Car (1).svg"
                    alt='image'
                    width={232}
                    height={72}/>
                </div>
                <div className='mt-12'>
                <Image
                    src="/images/Spesification.svg"
                    alt='image'
                    width={256}
                    height={24}/>
                </div>
                <div className='mt-5 flex gap-16'>
                    <div>
                        <h1 className="text-xl font-bold">$96.00/<span className='text-xs text-[#90A3BF]'> day </span></h1>
                    </div>
                    <div>
                        <Button className='bg-blueish text-white '>Rent Now</Button>
                    </div>
                </div>
            </div>

            {/* image4  */}

            <div className='bg-white p-5 xs:hidden xl:block'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-xl font-bold'>Nissan GT - R</h1>
                        <p className='text-[#90A3BF]'>Sport</p>
                    </div>
                    <div>
                        <CiHeart size={30}/>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-10'>
                    <Image
                    src="/images/car.svg"
                    alt='image'
                    width={232}
                    height={72}/>
                </div>
                <div className='mt-12'>
                <Image
                    src="/images/Spesification.svg"
                    alt='image'
                    width={256}
                    height={24}/>
                </div>
                <div className='mt-5 flex gap-16'>
                    <div>
                        <h1 className="text-xl font-bold">$80.00/<span className='text-xs text-[#90A3BF]'> day </span></h1>
                        <span className='line-through text-[#90A3BF]'>$100.00</span>
                    </div>
                    <div>
                        <Button className='bg-blueish text-white '>Rent Now</Button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Popularcars