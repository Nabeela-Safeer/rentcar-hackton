import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image'
// import Pickup from './Pickup';
// import Popularcars from './Popularcars';


const Rentcar = () => {
  return (
    <div className='mx-auto'>
        <div className='grid xl:grid-cols-2 p-10'>

            {/* image1 */}

            <div className='bg-hero2 bg-center flex flex-col border rounded-xl w-[640px] h-[360px]'>
                <div className='flex flex-col gap-5 text-white w-[272px] mt-10 ml-5'>
                    <h1 className='text-3xl font-bold'>The Best Platform for Car Rental</h1>
                    <p className='text-base font-medium'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                    <Button className='bg-blueish w-[120px] h-[44px]'>Rental Car</Button>
                </div>
                <div className='ml-36'>
                    <Image
                    src="/images/image 7.svg"
                    alt="car"
                    width={406}
                    height={116}/>
                </div>
            </div>

            {/* image2 */}

            <div className='bg-hero1 bg-center border rounded-xl w-[640px] h-[360px] xs:hidden xl:block'>
                <div className='flex flex-col gap-5 text-white w-[272px] mt-10 ml-5'>
                    <h1 className='text-3xl font-bold'>Easy way to rent a car at a low price</h1>
                    <p className='text-base font-medium'>Providing cheap car rental services and safe and comfortable facilities.</p>
                    <Button className='bg-secandory w-[120px] h-[44px]'>Rental Car</Button>
                </div>
                <div className='ml-36'>
                    <Image
                    src="/images/image 8.svg"
                    alt="car"
                    width={350}
                    height={108}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rentcar