import { Link } from 'react-router-dom'

import { usePageTitle, useScrollToTop } from 'hooks'
import { Footer, Navbar } from 'components'
import { SOLUTIONS } from 'constants'

const Solution = () => {
  usePageTitle('What we do')
  useScrollToTop()

  return (
    <>
    <Navbar />
    <main className='w-full'>
      <p className='text-3xl md:text-5xl text-primary font-bold font-playfair text-center my-10'>What We Do</p>
      <div className='w-full px-2 md:px-20'>
        {SOLUTIONS.map((item, index) => (
          <div key={index} className={`w-full flex flex-col items-center my-4 md:my-0 ${index % 2 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <img src={item.image} alt={item.label} className='w-full md:w-1/2 aspect-[3/2] object-cover' />
            <div className='flex flex-col gap-4 p-0 md:p-5'>
              <p className='text-2xl md:text-4xl text-primary font-bold font-playfair capitalize'>{item.label}</p>
              <p className='text-base md:text-xl text-gray-400 font-medium'>{item.value}</p>
            </div>
          </div>
        ))}
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
    </main>
    <Footer />
    </>
  )
}

export default Solution