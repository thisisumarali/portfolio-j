'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return (
        <section className='sm:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>

                <div className='sm:place-self-start col-span-8 text-center sm:text-left place-self-center jsu'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal   font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-700 mb-5'>Hello, I am{""}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Umar Khan',
                                1000,
                                'Web-Developer',
                                1000,
                                'Mobile App Developer',
                                1000,
                                'UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        /></h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        Passionate web and app developer with a keen eye for UI/UX design, crafting digital experiences that seamlessly blend functionality and aesthetics to elevate user engagement and satisfaction.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-700 hover:bg-slate-200 text-white'>
                            Hire Me
                        </button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-500 via-orange-500 to-red-700 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className='col-span-4 sm:place-self-end place-self-center mt-4 lg:mt-0'>
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/image/developer.png"
                            alt='Umar Khan developer Image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
