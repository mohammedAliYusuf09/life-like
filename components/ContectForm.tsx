import React from 'react'
import { Maven_Pro } from 'next/font/google';
import { Monda } from 'next/font/google';

const mavenPro = Maven_Pro({
  subsets: ['latin'], 
  weight: '600', 
});

const monda = Monda({
  subsets: ['latin'], 
  weight: '400', 
});

function ContectForm() {

  return (
    <div className='md:max-w-[700px] lg:max-w-[900px] px-4 xl:max-w-[1180px] 2xl:max-w-[1300px] mx-auto py-8'>
        <h1 className={`${mavenPro.className} text-center text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#898F2C]`}>ASK ME ANY QUIRION</h1>
        <p className={`text-center md:text-base lg:text-sm xl:text-lg 2xl:text-xl text-[#81854c] ${monda.className} mt-3`}>Curious about something? Don&#769;t hold back—ask me any questions! Whether it&#769;s about life, learning, creativity, or solving complex problems, I&#769;m here to provide thoughtful answers and helpful insights. Let&#769;s explore ideas together, spark meaningful conversations, and find solutions to the questions on your mind. No topic is off-limits, so go ahead and ask away!</p>
        <form className='bg-[#EBDDDD] p-4 md:p-8 flex flex-col mt-6 gap-4' action="#">
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
                <div className='w-full flex flex-col gap-1'>
                    <label htmlFor="firstName">First Name:</label>
                    <input className='focus:outline-none py-2' type="text" id="firstName" name="firstName" required />
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <label htmlFor="laseName">Last Name:</label>
                    <input className='focus:outline-none py-2' type="text" id="laseName" name="laseName" required />
                </div>
            </div>
            <div className='flex flex-col w-full gap-1'>
                <label htmlFor="email">Email Address:</label>
                <input className='focus:outline-none py-2' type="email" id="email" name="email" required />
            </div>
            <div className='flex flex-col w-full gap-1'>
                <label htmlFor="subject">Subject:</label>
                <input className='focus:outline-none py-2' type="text" id="subject" name="subject" />
            </div>
            <div className='flex flex-col w-full gap-1'>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required />
            </div>
            <div>
                <button className='bg-gray-500 px-4 py-2 cursor-pointer text-white hover:bg-gray-400' type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default ContectForm