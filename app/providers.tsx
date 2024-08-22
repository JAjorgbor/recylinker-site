'use client'
import { Toaster } from 'sonner'
import * as React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <>
      <Toaster richColors closeButton position='top-center' />
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </>
  )
}
