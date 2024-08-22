'use client'
import { useState, type FC } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react'
import Image from 'next/image'
import Logo from '@/components/elements/Logo'

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = [
    'About',
    'Contact',
    // 'Activity',
  ]

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='sm:hidden'
          />
          <NavbarBrand className='gap-2'>
            <Logo size='sm' />
            <p className='font-bold text-inherit'>Recylinker</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarItem>
            <Link color='foreground' href='#'>
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='#' aria-current='page'>
              Contact{' '}
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem>
            <Button
              as={Link}
              color='primary'
              href='https://recylinker.vercel.app'
              variant='flat'
            >
              Portal
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className='w-full' href='#' size='lg'>
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  )
}
export default Header
