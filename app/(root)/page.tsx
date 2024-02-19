import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
      <section className='home'>
        <h1 className='bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500 bg-clip-text text-3xl font-extrabold uppercase tracking-tighter text-transparent sm:text-4xl lg:text-5xl shadow-2xl shadow-white text-center p-2 rounded-xl'>
          Express Your Gen-AI Creativity
        </h1>
        <h1 className='home-heading bg-[linear-gradient(180deg,_#FDB913_33.333%,_#006A44_33.333%_66.666%,_#C1272D_66.666%)] rounded-xl p-1'>
          Contribute to Burma Spring Revolution!
        </h1>
        <ul className='flex-center w-full gap-20'>
          {navLinks.slice(1, 5).map((link) => (
            <Link 
              key={link.route}
              href={link.route}
              className='flex-center flex-col gap-2'
            >
              <li className='flex-center w-fit rounded-full bg-white p-4 mt-5'>
                <Image
                  src={link.icon}
                  alt='image'
                  width={24}
                  height={24}
                />
              </li>
                <p className='p-14-medium text-center text-white'>
                  {link.label}
                </p>
            </Link>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Home