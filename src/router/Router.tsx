import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'

import { About, Contact, Home, NotFound, Pricing, Solution } from 'pages'
import { useConcurrentTransition } from 'hooks'
import { Loader } from 'components'

const Router = () => {
  const location = useConcurrentTransition()

  return (
    <Suspense fallback={<Loader />}>
      <Routes location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/solution' element={<Solution />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default Router