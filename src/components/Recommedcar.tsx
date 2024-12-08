import React from 'react'
import Image from 'next/image'
import { CiHeart } from "react-icons/ci";
import { FaHeart} from "react-icons/fa";
import { Button } from './ui/button';

const Recommedcar = () => {
  return (
    <div className='h-screen mx-auto'>
        <div className='mx-10'>

            {/* heading */}
            <div>
                <h1 className='text-[#90A3BF]'>Recomendation Car</h1>
            </div>

            {/* second part */}
            
            <div className='grid grid-cols-4 gap-10 mt-5 xl:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 sm:grid-cols-1'>
             {/* image1 */}

                <div className='bg-white p-5'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-xl font-bold'>All New Rush</h1>
                        <p className='text-[#90A3BF]'>SUV</p>
                    </div>
                    <div>
                        <CiHeart size={30}/>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-10'>
                    <Image
                    src="/images/Car (2).svg"
                    alt='image'
                    width={232}
                    height={72}/>
                </div>
                <div className='mt-12'>
                <Image
                    src="/images/Spesification (1).svg"
                    alt='image'
                    width={256}
                    height={24}/>
                </div>
                <div className='mt-5 flex gap-16'>
                    <div>
                        <h1 className="text-xl font-bold">$72.00/<span className='text-xs text-[#90A3BF]'> day </span></h1>
                        <span className='line-through text-[#90A3BF]'>$80.00</span>
                    </div>
                    <div>
                        <Button className='bg-blueish text-white '>Rent Now</Button>
                    </div>
                </div>
                </div>

                {/* image2 */}

                <div className='bg-white p-5'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-xl font-bold'>CR-V</h1>
                        <p className='text-[#90A3BF]'>Sport</p>
                    </div>
                    <div>
                        <FaHeart size={30} className="text-redish"/>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-10'>
                    <Image
                    src="/images/Car (3).svg"
                    alt='image'
                    width={232}
                    height={72}/>
                </div>
                <div className='mt-12'>
                <Image
                    src="/images/Spesification (1).svg"
                    alt='image'
                    width={256}
                    height={24}/>
                </div>
                <div className='mt-5 flex gap-16'>
                    <div>
                        <h1 className="text-xl font-bold">$80.00/<span className='text-xs text-[#90A3BF]'> day </span></h1>
                    </div>
                    <div>
                        <Button className='bg-blueish text-white '>Rent Now</Button>
                    </div>
                </div>
                </div>

                {/* image3 */}

                <div className='bg-white p-5'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-xl font-bold'>All New Terios</h1>
                        <p className='text-[#90A3BF]'>SUV</p>
                    </div>
                    <div>
                        <CiHeart size={30}/>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-10'>
                    <Image
                    src="/images/Car (2).svg"
                    alt='image'
                    width={232}
                    height={72}/>
                </div>
                <div className='mt-12'>
                <Image
                    src="/images/Spesification (1).svg"
                    alt='image'
                    width={256}
                    height={24}/>
                </div>
                <div className='mt-5 flex gap-16'>
                    <div>
                        <h1 className="text-xl font-bold">$74.00/<span className='text-xs text-[#90A3BF]'> day </span></h1>
                    </div>
                    <div>
                        <Button className='bg-blueish text-white '>Rent Now</Button>
                    </div>
                </div>
                </div>

                {/* image4 */}

                <div className='bg-white p-5'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-xl font-bold'>CR-V</h1>
                            <p className='text-[#90A3BF]'>Sport</p>
                        </div>
                        <div>
                            <FaHeart size={30} className="text-redish"/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mt-10'>
                        <Image
                        src="/images/Car (3).svg"
                        alt='image'
                        width={232}
                        height={72}/>
                    </div>
                    <div className='mt-12'>
                    <Image
                        src="/images/Spesification (1).svg"
                        alt='image'
                        width={256}
                        height={24}/>
                        </div>
                    <div className='mt-5 flex gap-16'>
                        <div>
                            <h1 className="text-xl font-bold">$80.00/<span className='text-xs text-[#90A3BF]'> day </span></h1>
                        </div>
                        <div>
                            <Button className='bg-blueish text-white '>Rent Now</Button>
                        </div>
                    </div>
                </div> 
            </div>
              {/* image5 */}
            <div className='grid grid-cols-4 gap-10 mt-5 xl:grid-cols-4 xs:grid-cols-1 md:grid-cols-2'>

                <div className='bg-white p-5'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-xl font-bold'>MG ZX Exclusice</h1>
                            <p className='text-[#90A3BF]'>Hatchback</p>
                        </div>
                        <div>
                            <FaHeart size={30} className="text-redish"/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mt-10'>
                        <Image
                        src="/images/Car (3).svg"
                        alt='image'
                        width={232}
                        height={72}/>
                    </div>
                    <div className='mt-12'>
                    <Image
                        src="/images/Spesification (1).svg"
                        alt='image'
                        width={256}
                        height={24}/>
                    </div>
                    <div className='mt-5 flex gap-16'>
                        <div>
                            <h1 className="text-xl font-bold">$76.00/<span className='text-xs text-[#90A3BF]'> day </span></h1>
                        </div>
                        <div>
                            <Button className='bg-blueish text-white '>Rent Now</Button>
                        </div>
                    </div>
                </div>

                {/* image6 */}

                <div className='bg-white p-5'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-xl font-bold'>New MG ZS</h1>
                            <p className='text-[#90A3BF]'>SUV</p>
                        </div>
                        <div>
                            <CiHeart size={30}/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mt-10'>
                        <Image
                        src="/images/Car (2).svg"
                        alt='image'
                        width={232}
                        height={72}/>
                    </div>
                    <div className='mt-12'>
                    <Image
                        src="/images/Spesification (1).svg"
                        alt='image'
                        width={256}
                        height={24}/>
                    </div>
                    <div className='mt-5 flex gap-16'>
                        <div>
                            <h1 className="text-xl font-bold">$74.00/<span className='text-xs text-[#90A3BF]'> day </span></h1>
                        </div>
                        <div>
                            <Button className='bg-blueish text-white '>Rent Now</Button>
                        </div>
                    </div>
                </div>

                {/* image7 */}

                <div className='bg-white p-5'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-xl font-bold'>MG ZX Excite</h1>
                            <p className='text-[#90A3BF]'>Hatchback</p>
                        </div>
                        <div>
                            <FaHeart size={30} className="text-redish"/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mt-10'>
                        <Image
                        src="/images/Car (3).svg"
                        alt='image'
                        width={232}
                        height={72}/>
                    </div>
                    <div className='mt-12'>
                    <Image
                        src="/images/Spesification (1).svg"
                        alt='image'
                        width={256}
                        height={24}/>
                    </div>
                    <div className='mt-5 flex gap-16'>
                        <div>
                            <h1 className="text-xl font-bold">$80.00/<span className='text-xs text-[#90A3BF]'> day </span></h1>
                        </div>
                        <div>
                            <Button className='bg-blueish text-white '>Rent Now</Button>
                        </div>
                    </div>
                </div>


                {/* image8 */}

                <div className='bg-white p-5'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-xl font-bold'>New MG ZS</h1>
                            <p className='text-[#90A3BF]'>SUV</p>
                        </div>
                        <div>
                            <CiHeart size={30}/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mt-10'>
                        <Image
                        src="/images/Car (2).svg"
                        alt='image'
                        width={232}
                        height={72}/>
                    </div>
                    <div className='mt-12'>
                    <Image
                        src="/images/Spesification (1).svg"
                        alt='image'
                        width={256}
                        height={24}/>
                    </div>
                    <div className='mt-5 flex gap-16'>
                        <div>
                            <h1 className="text-xl font-bold">$80.00/<span className='text-xs text-[#90A3BF]'> day </span></h1>
                        </div>
                        <div>
                            <Button className='bg-blueish text-white '>Rent Now</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <Button className="bg-blueish mt-20 text-white">Show more car</Button>
            </div>
        </div>
    </div>
  )
}

export default Recommedcar