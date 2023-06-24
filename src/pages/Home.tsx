import { Quotes } from '@phosphor-icons/react'
import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import { SERVICES, SERVICE_ADVS, SOLUTION_TYPES } from 'constants'
import { usePageTitle, useScrollToTop } from 'hooks'
import { Footer, Navbar } from 'components'
import { TESTIMONIAL } from 'mock'

const Home = () => {
  const [email, setEmail] = useState('')
  usePageTitle('Home')
  useScrollToTop()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if(!email) return alert('Please enter a valid email!')
    console.log({email})
    setEmail('')
  }
  
  return (
    <>
    <Navbar />
    <main className='w-full'>
      <div className='w-full h-[90.5vh] flex flex-col justify-end bg-hero bg-black/60 bg-cover bg-center bg-blend-multiply px-2 md:px-20 py-4'>
        <p className='w-full md:w-1/2 text-4xl md:text-6xl text-white font-black font-playfair'>
          Simplifying logistics for over a decade
        </p>
        <p className='text-xl md:text-2xl text-gray-400 font-medium'>
          Powering global trade with seamless logistics solutions. From coast to coast and across borders, we ensure efficient and reliable delivery of goods. Trust us for your logistics needs.
        </p>
        <div className='flex items-center gap-4 my-5'>
          <Link to='/contact' className='bg-primary text-white font-semibold px-5 py-4'>
            Get In Touch
          </Link>
          <Link to='/solution' className='bg-white text-primary font-semibold px-5 py-4'>
            Learn More
          </Link>
        </div>
      </div>
      <div className='w-full flex flex-col items-center px-2 md:px-20 py-10 relative'>
        <div className='w-full md:w-2/3 flex flex-col md:flex-row items-center md:justify-between gap-4'>
          {SOLUTION_TYPES.map((item, index) => (
            <Link key={index} to={item.url} className='min-w-[250px] flex items-center gap-4 px-4 py-5 border-2 hover:shadow-xl duration-300'>
              <span className='bg-primary text-white text-2xl p-3'>{item.icon}</span>
              <span className='text-base md:text-xl text-primary font-medium capitalize'>{item.label}</span>
            </Link>
          ))}
        </div>
        <div className='w-full flex flex-col gap-5 px-2 md:px-20 py-10 mt-20'>
          <p className='text-sm text-primary font-bold'>WHY CHOOSE US</p>
          <div className='w-full flex flex-col gap-5 md:gap-20'>
            <div className='w-full flex flex-col'>
              <p className='text-3xl md:text-5xl text-gray-700 font-semibold font-playfair'>
                Why should you choose our service, here are the advantages we offer
              </p>
              <p className='text-gray-400 my-2'>
                At Technologistic, we pride ourselves on delivering excellence in every aspect of our operations.
                We ensure your cargo is in capable hands from start to finish. With Technologistic, you can count
                on our expertise and experience to navigate the complexities of international shipping. Our dedicated
                team manages every step of the process, ensuring efficient coordination, streamlined logistics,
                and timely deliveries. Our commitment to quality and reliability extends to the safety and security of your cargo
              </p>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 items-start gap-2 select-none'>
              {SERVICE_ADVS.map((service, index) => (
                <div key={index} className='w-full flex flex-col items-start gap-2 px-4 py-10 border cursor-pointer'>
                  <span className='text-6xl text-primary/70'>{service.icon}</span>
                  <div className='flex flex-col'>
                    <p className='text-xl font-medium capitalize'>{service.label}</p>
                    <p className='text-gray-400'>{service.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col gap-5 bg-dock bg-black/70 bg-cover bg-center bg-blend-multiply px-2 md:px-20 py-20'>
        <p className='text-sm text-primary font-bold'>WHAT WE OFFER</p>
        <div className='w-full flex flex-col items-center gap-5'>
          <div className='w-full flex flex-col'>
            <p className='text-3xl md:text-5xl text-white font-semibold font-playfair'>
              We provide the best services
            </p>
            <p className='text-xl text-white'>
              Delivering excellence, one package at a time. We're dedicated to safe and timely deliveries,
              connecting businesses and customers worldwide. Simplifying logistics with our reliable services.
            </p>
          </div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            {SERVICES.map((service) => (
              <div key={service.id} className='w-full h-fit bg-white p-2'>
                <img src={service.image} alt={service.label} className='w-full aspect-[3/2.5] object-cover border' />
                <p className='text-xl text-primary font-semibold capitalize'>{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col items-center gap-5 bg-gray-900 px-2 md:px-20 py-10'>
        <p className='text-2xl md:text-4xl text-primary font-semibold font-playfair'>What our clients are saying</p>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4'>
          {TESTIMONIAL.map((item, index) => (
            <div key={index} className='w-full flex flex-col bg-white p-4'>
              <span className='text-3xl'><Quotes /></span>
              <p className='text-xl my-2'>{item.message}</p>
              <div className='flex items-center gap-2'>
                <img src={item.image} alt={item.name} className='w-[50px] aspect-[1/1] rounded-full object-cover' />
                <div className='flex flex-col'>
                  <p className=''>{item.name}</p>
                  <p className='text-xs text-gray-400 font-bold'>{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col items-center gap-5 bg-gray-200 px-2 md:px-20 py-10'>
        <p className='text-2xl md:text-4xl font-semibold font-playfair'>Do you have any questions</p>
        <p className='text-lg md:text-2xl text-center'>
          If you have any questions regarding our shipping services, please get in touch with a member of our professional team so we can talk about it.
        </p>
        <Link to='/contact' className='bg-primary text-white font-semibold px-5 py-4'>
          Get In Touch
        </Link>
      </div>
      <div className='w-full flex flex-col items-center px-2 md:px-20 py-10'>
        <p className='text-lg md:text-2xl text-center'>Subscribe to our newsletter and never miss a thing</p>
        <form onSubmit={handleSubmit} className='flex flex-col md:flex-row items-center gap-3 md:gap-0 my-4'>
          <input type='email' id='email' value={email} onChange={e => setEmail(e.target.value)} className='w-[300px] px-2 py-3 border' />
          <button type='submit' className='bg-primary text-white font-semibold px-4 py-3'>
            Sign Up
          </button>
        </form>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default Home