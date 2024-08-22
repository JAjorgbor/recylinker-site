import Providers from '@/app/providers'
import Footer from '@/scaffold/Footer'
import Header from '@/scaffold/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  applicationName: 'Recylinker',
  title: {
    default: 'Recylinker',
    template: '%s | Recylinker',
  },
  // description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Recylinker',
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  // openGraph: {
  //   type: "website",
  //   siteName: APP_NAME,
  //   title: {
  //     default: APP_DEFAULT_TITLE,
  //     template: APP_TITLE_TEMPLATE,
  //   },
  //   description: APP_DESCRIPTION,
  // },
  // twitter: {
  //   card: "summary",
  //   title: {
  //     default: APP_DEFAULT_TITLE,
  //     template: APP_TITLE_TEMPLATE,
  //   },
  //   description: APP_DESCRIPTION,
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { value: theme } = cookies().get('theme') ?? { value: '' }
  return (
    <html lang='en' className={theme ?? 'light'}>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
