import React from 'react'
import { FaRegCircleDot } from "react-icons/fa6";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { LuArrowDownUp } from "react-icons/lu";

  


const Pickup = () => {
  return (
    
        <div className='flex justify-between gap-5 underline-none mx-10'>
            <div className="flex flex-col gap-3 bg-[#FFFFFF] p-10 border rounded-xl">
                <div className='flex gap-3 items-center'>
                    <FaRegCircleDot size={30} className='text-blueish'/>
                    <h1 className='text-base font-semibold'>Pick - Up</h1>
                </div>
                <div className='flex gap-10'>
                    <div className='flex flex-col'>
                        <h1 className="text-bold text-base text-[#1A202C]">Locations</h1>
                        <div className='text-xs text-[#90A3BF] -ml-3'>
                            <Accordion type="single" collapsible>
                            <AccordionItem value="item-0">
                              <AccordionTrigger>Select your city</AccordionTrigger>
                              <AccordionContent>
                                karachi
                              </AccordionContent>
                            </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <span className="border-l-2"></span>

                    <div className='flex flex-col'>
                        <h1 className="text-bold text-base text-[#1A202C]">Date</h1>
                        <div className='text-xs text-[#90A3BF] -ml-3'>
                            <Accordion type="single" collapsible>
                            <AccordionItem value="item-0">
                              <AccordionTrigger>Select your date</AccordionTrigger>
                              <AccordionContent>
                                karachi
                              </AccordionContent>
                            </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <span className="border-l-2"></span>

                    <div className='flex flex-col'>
                        <h1 className="text-bold text-base text-[#1A202C]">Time</h1>
                        <div className='text-xs text-[#90A3BF] -ml-3'>
                            <Accordion type="single" collapsible>
                            <AccordionItem value="item-0">
                              <AccordionTrigger>Select your time</AccordionTrigger>
                              <AccordionContent>
                                karachi
                              </AccordionContent>
                            </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            {/* mid area */}


            <div className='border rounded-xl bg-blueish w-[60px] h-[60px] p-10 mt-10'>
                <LuArrowDownUp size={30} className='text-white flex flex-col items-center'/>
            </div>

            {/* last part */}


            <div className="flex flex-col gap-3 bg-[#FFFFFF] p-10 border rounded-xl">
                <div className='flex gap-3 items-center'>
                    <FaRegCircleDot size={30} className='text-redish'/>
                    <h1 className='text-base font-semibold'>Drop=Off</h1>
                </div>
                <div className='flex gap-10'>
                    <div className='flex flex-col'>
                        <h1 className="text-bold text-base text-[#1A202C]">Locations</h1>
                        <div className='text-xs text-[#90A3BF] -ml-3'>
                            <Accordion type="single" collapsible>
                            <AccordionItem value="item-0">
                              <AccordionTrigger>Select your city</AccordionTrigger>
                              <AccordionContent>
                                karachi
                              </AccordionContent>
                            </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <span className="border-l-2"></span>

                    <div className='flex flex-col'>
                        <h1 className="text-bold text-base text-[#1A202C]">Date</h1>
                        <div className='text-xs text-[#90A3BF] -ml-3'>
                            <Accordion type="single" collapsible>
                            <AccordionItem value="item-0">
                              <AccordionTrigger>Select your date</AccordionTrigger>
                              <AccordionContent>
                                karachi
                              </AccordionContent>
                            </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <span className="border-l-2"></span>

                    <div className='flex flex-col'>
                        <h1 className="text-bold text-base text-[#1A202C]">Time</h1>
                        <div className='text-xs text-[#90A3BF] -ml-3'>
                            <Accordion type="single" collapsible>
                            <AccordionItem value="item-0">
                              <AccordionTrigger>Select your time</AccordionTrigger>
                              <AccordionContent>
                                karachi
                              </AccordionContent>
                            </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Pickup