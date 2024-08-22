import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

interface LogoProps {
  isLink?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const Logo: FC<LogoProps> = ({ isLink = true, size = 'md' }) => {
  let sizeClass
  switch (size) {
    case 'sm':
      sizeClass = 'w-8'
      break
    case 'lg':
      sizeClass = 'w-16'
      break
    default:
      sizeClass = 'w-12'
  }
  return (
    <>
      {isLink ? (
        <Link href='/' className='inline-block'>
          <Image
            src='/media/logo.png'
            alt='logo'
            className={`${sizeClass}`}
            width={80}
            height={80}
          />
        </Link>
      ) : (
        <Image
          src='/media/logo.png'
          alt='logo'
          className='w-12'
          width={80}
          height={80}
        />
      )}
    </>
  )
}
export default Logo
