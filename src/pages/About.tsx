
import { usePageTitle, useScrollToTop } from 'hooks'
import { Footer, Navbar } from 'components'

const About = () => {
  usePageTitle('About us')
  useScrollToTop()

  return (
    <>
    <Navbar />
    <main className='w-full px-2 md:px-20 select-none'>
      <p className='text-3xl md:text-5xl text-primary font-bold font-playfair text-center my-10'>About Us</p>
      <p className='text-xl text-gray-400 mb-10'>
        Welcome to Technologistics Solutions Ltd, your trusted partner in global shipping solutions. With over a decade of industry expertise and a commitment to excellence, we strive to provide seamless and reliable logistics services tailored to your unique requirements.

        At Technologistics Solutions Ltd, we understand the importance of efficient and secure transportation in today's interconnected world. Whether you are a business looking to expand your global reach or an individual in need of personal shipping services, we have you covered. <br />

        Our mission is to deliver your cargo safely and on time to any destination worldwide. We offer a comprehensive range of services, including air freight, sea freight, warehousing, and customs clearance. From small parcels to oversized shipments, we handle it all with utmost care and professionalism.

        What sets us apart is our dedication to customer satisfaction. We prioritize clear communication, transparency, and reliability at every step of the shipping process. Our experienced team of logistics experts works closely with you to understand your specific needs and tailor solutions that meet your expectations. <br />

        At Technologistics Solutions Ltd, we pride ourselves on our commitment to quality and efficiency. We leverage advanced technologies and industry best practices to ensure that your cargo is handled with the utmost precision, from packing and documentation to tracking and delivery.

        We believe in building long-term partnerships with our clients, earning their trust through exceptional service and a results-driven approach. With our extensive network of global partners and strategic alliances, we have the flexibility to adapt to changing market dynamics and deliver flexible and cost-effective solutions.

        When you choose Technologistics Solutions Ltd, you can rest assured that your shipments are in capable hands. Our team of dedicated professionals is committed to going the extra mile to exceed your expectations and provide you with peace of mind throughout the shipping process.

        Discover the difference of working with a reliable and customer-focused shipping company. Contact us today to discuss your logistics needs and experience the seamless shipping solutions we offer at Technologistics Solutions Ltd. <br />

        Technologistics is a duly registered company in Nigeria and the United Kingdom with necessary certifications/licenses to carry out the business of freight broker,
        freight forwarding, and full logistics services. We send regular air and sea freight from Nigeria to the UK and also from the UK to Nigeria and to so many parts of the world.
      </p>
    </main>
    <Footer />
    </>
  )
}

export default About