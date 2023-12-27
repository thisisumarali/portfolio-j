import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const EmailSection = () => {
    return (
        <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>Lets Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    Greetings! I am a skilled web developer proficient in Next.js, TypeScript, HTML, CSS, and JavaScript. With a focus on creating seamless and visually appealing websites, I am eager to take on new challenges. Lets discuss your project or ideas—use the form below to get in touch, and lets bring your vision to life!
                </p>
                <div className='social flex flex-row gap-2 mx-2'>
                    <Link href="github.com">
                        <Image src={"/image/icons/github.png"}
                            alt='Github icon'
                            width={40}
                            height={40}
                        />
                    </Link>
                    <Link href="linkedIn.com">
                        <Image src={"/image/icons/linkedin.png"}
                            alt='LinkedIn Icon'
                            width={40}
                            height={40}
                        />
                    </Link>

                </div>
            </div>
            <div>
                <form className="flex flex-col">
                    <div className='mb-6'>
                        <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your Email:</label>
                        <input type='email'
                            id='email'
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 w-full'
                            placeholder='xyz@gmail.com'
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Subject:</label>
                        <input type='text'
                            id='subject'
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 w-full'
                            placeholder='Subject'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="message" className='text-white block text-sm mb-2 font-medium'>Message</label>
                        <textarea
                            name='message'
                            id='message'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 w-full'
                            placeholder='Message'
                            cols={30}
                        />

                    </div>
                   <button
                   type='submit'
                   className='bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default EmailSection