import { Link } from 'react-router-dom'

import { usePageTitle, useScrollToTop } from 'hooks'
import { Footer, Navbar } from 'components'
import { formatCurrency } from 'utils'
import { PRICING } from 'constants'

const Pricing = () => {
  usePageTitle('Pricing')
  useScrollToTop()

  return (
    <>
    <Navbar />
    <main className='w-full flex flex-col items-center'>
      <p className='text-3xl md:text-5xl text-primary font-bold font-playfair text-center my-10'>Pricing Plans</p>
      <p className='text-lg text-gray-400'>
        Our prices are designed to be affordable, flexible, and tailored to meet your needs.
      </p>
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-4 px-2 md:px-20 py-10'>
        {PRICING.map((item, index) => (
          <div key={index} className='w-[300px] flex flex-col border px-2 py-10 my-4'>
            <p className='text-2xl text-primary font-bold'>{item.label}</p>
            <div className='w-full h-[1px] bg-gray-200 my-5'></div>
            <div>
              {item.pricing.map((item, index) => (
                <div key={index} className='my-5'>
                  <p className='text-sm font-semibold uppercase'>{item.type}</p>
                  <p className='text-3xl text-gray-400 font-medium'>
                    {formatCurrency(item.currency).format(item.price)}/
                    <span className='text-xs'>{item.unit}</span>
                  </p>
                  <p className='text-xs text-primary'>Minimum of {formatCurrency(item.currency).format(item.min)}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className='text-sm md:text-xl font-bold uppercase mb-10'>
        <span className='text-red-500'>*</span>Get discount on packages above 100kg
      </p>
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

export default Pricing