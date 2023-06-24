import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { z } from 'zod'

import { usePageTitle, useScrollToTop } from 'hooks'
import { Footer, Navbar } from 'components'
import { schemaBuilder } from 'utils'

const initialValues = {email: '', message: '', name: ''}

const Contact = () => {
  usePageTitle('Get in touch')
  useScrollToTop()

  const {isLoading} = useMutation({
    mutationKey: ['contact form'],
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error)
  })

  const formSchema = schemaBuilder<typeof initialValues>()({
    email: z.string({required_error: 'Email is required!'}).email({message: 'Invalid email address'}),
    message: z.string({required_error: 'Message is required!'}).min(20, {message: 'Must be 20 or more characters long'}),
    name: z.string({required_error: 'Name is required!'}).min(5, {message: 'Must be 5 or more characters long!'})
  })

  const {errors, handleChange, handleSubmit} = useFormik({
    initialValues,
    validationSchema: toFormikValidationSchema(formSchema),
    onSubmit: (data) => console.log(data)
  })

  return (
    <>
    <Navbar />
    <main className='w-full flex flex-col items-center'>
      <p className='text-3xl md:text-5xl text-primary font-bold font-playfair text-center my-10'>Contact Us</p>
      <div className='w-full flex flex-col md:flex-row items-center gap-4 px-2 md:px-20 py-5'>
        <div className='w-full md:w-1/2 flex flex-col'>
          <p className='text-xl font-medium'>Send us a message</p>
          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 my-4'>
            <div className='flex flex-col'>
              <label htmlFor='name' className='text-sm'>Name</label>
              <input type='text' id='name' onChange={handleChange} className='w-full p-2 appearance-none border' />
              {errors.name && <p className='text-[10px] text-red-500'>{errors.name}</p>}
            </div>
            <div className='flex flex-col'>
              <label htmlFor='email' className='text-sm'>Email</label>
              <input type='email' id='email' onChange={handleChange} className='w-full p-2 appearance-none border' />
              {errors.email && <p className='text-[10px] text-red-500'>{errors.email}</p>}
            </div>
            <div className='flex flex-col'>
              <label htmlFor='message' className='text-sm'>Message</label>
              <textarea id='message' onChange={handleChange} className='w-full h-[150px] p-2 appearance-none border resize-none'></textarea>
              {errors.message && <p className='text-[10px] text-red-500'>{errors.message}</p>}
            </div>
            <button type='submit' className='bg-primary text-white font-semibold px-5 py-4' disabled={isLoading}>
              {isLoading ? 'Submitting' : 'Submit'}
            </button>
          </form>
        </div>
        <div className='w-full md:w-1/2 flex flex-col gap-4'>
          <p className='text-xl font-medium'>Get in touch today if you have any questions about our shipping services, or to chat about any other enquiry</p>
          <div className='flex items-center gap-2'>
            <span className='text-2xl'><MapPin /></span>
            <p className=''>184 Churchbury Road, Greenwich, London, SE9 5JA, United Kingdom</p>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-2xl'><MapPin /></span>
            <p className=''>5, Bashiru Oweh Street, beside Lagos City Computer Colleg, Ikeja, Lagos</p>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-2xl'><EnvelopeSimple /></span>
            <p className='underline'><a href='mailto:info@tech-solutionsltd.com' target='_blank'>info@tech-solutionsltd.com</a></p>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-2xl'><Phone /></span>
            <p className='flex flex-wrap items-center gap-2'>
              <a href='tel:+447850417051' target='_blank' className='underline'>+447850417051</a>
              <a href='tel:+2349162877551' target='_blank' className='underline'>+2349162877551</a>
              <a href='tel:+2349113119381' target='_blank' className='underline'>+2349113119381</a>
              <a href='tel:+2349155559278' target='_blank' className='underline'>+2349155559278</a>
            </p>
          </div>
        </div>
      </div>
      <div className='w-full bg-gray-400'></div>
    </main>
    <Footer />
    </>
  )
}

export default Contact