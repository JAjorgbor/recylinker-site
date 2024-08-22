import ContactForm from '@/components/elements/home/ContactForm'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Start Hero Section */}
      <div className='h-[600px] w-full bg-[url("/media/hero-image.jpg")] bg-cover bg-center flex items-center relative'>
        <div className='absolute w-full h-full to-0 left-0 bg-black opacity-15 ' />
        <div className='lg:w-2/5 ml-6 md:ml-[15%] z-10 max-w-[800px]'>
          <h1 className='text-[2rem] lg:text-[2.5rem] font-bold text-primary'>
            Empowering Sustainable Recycling Solutions
          </h1>
          <p className='font-bold text-lg text-white w-3/4'>
            Recylinker bridges the gap between recyclers and communities,
            fostering a sustainable future through innovative recycling
            solutions. Join us in making every step count toward a cleaner,
            greener world.
          </p>
        </div>
      </div>
      {/* End Hero Section */}

      {/* Start About Section */}
      <div className='mx-auto w-4/5 my-20 space-y-8 max-w-[1200px]'>
        <div className='xl:w-4/5 space-y-4 mx-auto'>
          <h2 className='text-[2rem] font-bold text-center '>
            About <span className='span text-primary'>Recylinker</span>
          </h2>
          <p>
            Recylinker is designed to revolutionize how we approach recycling,
            making it easier and more efficient for everyone involved. Whether
            you&apos;re an individual looking to recycle responsibly or a
            business aiming to manage waste more sustainably, Recylinker
            connects you with the right resources and services. Our mission is
            to create a seamless recycling experience that benefits both the
            environment and the community.
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className=''>
            <Image
              src='/media/screenshot.png'
              alt='Recylinker screenshot'
              className='mx-auto'
              width={500}
              height={500}
            />
          </div>
          <div className=''>
            <ol className=' pl-6'>
              <li className='relative mb-2'>
                <span className='absolute left-0 top-0 w-5 h-5 bg-primary text-sm text-white rounded-full flex items-center justify-center -ml-8'>
                  1
                </span>
                Easily connect with local recyclers and facilities to ensure
                your recyclables are processed efficiently.
              </li>
              <li className='relative mb-2'>
                <span className='absolute left-0 top-0 w-5 h-5 bg-primary text-sm text-white rounded-full flex items-center justify-center -ml-8'>
                  2
                </span>
                Earn rewards for your recycling efforts, incentivizing a greener
                lifestyle.
              </li>
              <li className='relative mb-2'>
                <span className='absolute left-0 top-0 w-5 h-5 bg-primary text-sm text-white rounded-full flex items-center justify-center -ml-8'>
                  3
                </span>
                Access a wealth of information on best recycling practices and
                how to reduce waste.
              </li>
              <li className='relative mb-2'>
                <span className='absolute left-0 top-0 w-5 h-5 bg-primary text-sm text-white rounded-full flex items-center justify-center -ml-8'>
                  4
                </span>
                Schedule pickups at your convenience with flexible timing
                options that suit your schedule.
              </li>
              <li className='relative mb-2'>
                <span className='absolute left-0 top-0 w-5 h-5 bg-primary text-sm text-white rounded-full flex items-center justify-center -ml-8'>
                  5
                </span>
                Earn competitive rates per pickup, with pay based on volume,
                material type, and distance.
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* Start Contact Section */}
      <div className='w-4/5 mx-auto space-y-3'>
        <h2 className='text-[2rem] font-bold text-center '>Contact Us</h2>
        <div className='md:w-3/5 lg:w-2/5 mx-auto'>
          <ContactForm />
        </div>
      </div>
      {/* End About Section */}
    </>
  )
}
