import { Link, NavLink } from 'react-router-dom'
import { List } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

import { NAV_LINKS } from 'constants'
import { logo } from 'assets'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if(window.scrollY > 700) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
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
        <button className='text-xl text-primary'>
          <List />
        </button>
      </div>
    </nav>
  )
}

export default Navbar