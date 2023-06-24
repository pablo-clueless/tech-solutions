import { Envelope, MapPin } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { FOOTER_LINKS, SOCIAL_LINKS } from 'constants'
import { logo } from 'assets'

const Footer = () => {
  return (
    <footer className='mt-auto border-t border-t-gray-300 bg-primary/[0.05]'>
      <div className='w-full flex flex-wrap md:items-start md:justify-between gap-5 px-2 md:px-20 pt-5 pb-10'>
        <div className='md:min-w-[400px] flex-1 flex flex-col items-center'>
          <img src={logo} alt='technologistics' className='w-[300px]' />
          <div className='flex flex-col gap-2 mt-5'>
            <div className='flex items-center gap-2'>
              <span><MapPin /></span>
              <p className='text-sm'>184 Churchbury Road, Greenwich, London, SE9 5JA, UK</p>
            </div>
            <div className='flex items-center gap-2'>
              <span><Envelope /></span>
              <a href='mailto:info@tech-solutionsltd.com' className='text-sm underline'>info@tech-solutionsltd.com</a>
            </div>
            <div className='flex items-center gap-2'>
              <span><Envelope /></span>
              <p className='flex items-center gap-2'>
                <a href='tel:+447850417051' className='text-sm underline'>+44 7850 417051</a>
                <a href='tel:+2349162877551' className='text-sm underline'>+234 916 287 7551</a>
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap items-start justify-between gap-10 md:gap-2'>
          {FOOTER_LINKS.map((tab, index) => (
            <div key={index} className='w-[250px] flex flex-col gap-5'>
              <p className='font-bold'>{tab.title}</p>
              <ul className='flex flex-col gap-3'>
                {tab.links.map((link, index) => (
                  <Link key={index} to={link.url} className='text-sm capitalize'>
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row items-center md:justify-between bg-[#151515]/40 text-gray-800 text-sm px-2 md:px-20 py-3'>
        <p>&copy;{new Date().getFullYear()}. Technologistic Solutions Limited. All rights reserved</p>
        <div className='flex items-center gap-4'>
          {SOCIAL_LINKS.map((link, index) => (
            <a key={index} href={link.url} target='_blank' className='text-2xl'>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer