import { Link, NavLink } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

import { NAV_LINKS } from 'constants'
import { logo } from 'assets'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = () =>
    window.scrollY > 700 ? setIsScrolled(true) : setIsScrolled(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <>
    {isMenuOpen && (
      <div className='block md:hidden w-screen h-screen bg-white fixed top-0 left-0 p-4'>
        <div className='w-full flex items-center justify-between'>
          <img src={logo} alt='' className='w-[150px]' />
          <button onClick={() => setIsMenuOpen(false)} className='text-2xl text-primary'>
            <X />
          </button>
        </div>
        <div className='flex flex-col items-center gap-4 mt-40'>
          {NAV_LINKS.map((link, index) => (
            <NavLink key={index} to={link.url} onClick={() => setIsMenuOpen(false)} className={({isActive}) => `text-xl font-semibold capitalize ${isActive ? 'text-primary' : ''}`}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    )}
    <nav className={`w-full flex items-center justify-between bg-white px-2 md:px-20 py-4 !z-10 top-0 left-0 shadow-lg ${isScrolled ? 'fixed' : 'static'}`}>
      <Link to='/'>
        <img src={logo} alt='' className='w-[150px] md:w-[200px]' />
      </Link>
      <ul className='hidden md:flex items-center gap-4'>
        {NAV_LINKS.map((link, index) => (
          <NavLink key={index} to={link.url} className='text-lg text-primary capitalize nav_link'>
            {link.label}
          </NavLink>
        ))}
      </ul>
      <div className='block md:hidden'>
        <button onClick={() => setIsMenuOpen(true)} className='text-2xl text-primary'>
          <List />
        </button>
      </div>
    </nav>
    </>
  )
}

export default Navbar