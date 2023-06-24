import { Link } from 'react-router-dom'

import { usePageTitle, useScrollToTop } from 'hooks'
import { Footer, Navbar } from 'components'
import { not_found } from 'assets'

const NotFound = () => {
  usePageTitle('404')
  useScrollToTop()

  return (
    <>
    <Navbar />
    <main className='w-full md:min-h-[600px] px-2 md:px-20 py-10'>
      <div className='w-full flex flex-col-reverse md:flex-row items-center gap-4'>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-6xl md:text-9xl text-gray-500 font-black font-playfair my-4'>404</p>
          <p className='text-xl font-medium text-center'>The page you're looking for has either been moved or is unavailable.</p>
          <Link to='/' className='bg-primary text-white font-semibold px-5 py-4'>
            Go back Home
          </Link>
        </div>
        <img src={not_found} alt='not found illustration' className='w-full md:w-3/5 aspect-square' />
      </div>
    </main>
    <Footer />
    </>
  )
}

export default NotFound