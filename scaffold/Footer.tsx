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
      <footer className='w-full bg-default-200 text-default-700 py-3 mt-14'>
        <div className='flex justify-between max-w-[1200px] mx-auto px-10'>
          <div className='flex gap-2 items-end'>
            <Logo size='sm' />
            <p className='font-bold text-inherit'>Recylinker</p>
          </div>

          <div className='flex justify-center text-xs text-center mt-10'>
            &copy; Recylinker {moment().year()}. <br />
            Powered By Fusion Muse.
          </div>
          <div className='flex gap-3 items-end'>
            <span className='font-bold'>Connect with us:</span>
            <ul className='mt-12 flex justify-center gap-3'>
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
