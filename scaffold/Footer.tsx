'use client'
import type { FC } from 'react'
import Link from 'next/link'
import { Instagram, Linkedin, Twitter } from 'react-feather'
import moment from 'moment'
import Logo from '@/components/elements/Logo'

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <>
      <footer className='w-full bg-default-200 text-default-700 py-5 mt-14'>
        <div className='flex flex-col md:flex-row items-center md:justify-between max-w-[1200px] mx-auto px-10 gap-4'>
          <div className='flex gap-2  order-1'>
            <Logo size='sm' />
            <p className='font-bold text-inherit'>Recylinker</p>
          </div>

          <div className='flex justify-center text-xs text-center order-3 md:order-2'>
            &copy; Recylinker {moment().year()}. <br />
            Powered By Fusion Muse.
          </div>
          <div className='flex gap-3  order-2 md:order-3'>
            <span className='font-bold'>Connect with us:</span>
            <ul className=' flex justify-center gap-3'>
              <li>
                <Link
                  href='https://x.com/fusionmuseideas'
                  rel='noreferrer'
                  target='_blank'
                  className='text-inherit hover:text-primary'
                >
                  <Twitter size={18} />
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.instagram.com/recylinker'
                  rel='noreferrer'
                  target='_blank'
                  className='text-inherit hover:text-primary'
                >
                  <Instagram size={18} />
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.linkedin.com/company/recylinkersolution'
                  rel='noreferrer'
                  target='_blank'
                  className='text-inherit hover:text-primary'
                >
                  <Linkedin size={18} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
