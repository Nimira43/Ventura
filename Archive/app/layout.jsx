import { Poppins } from 'next/font/google' 
import Header from '@/components/Header'
import '@/assets/styles/globals.css'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Ventura Venues',
  description: 'Booking app using Next, Appwrite and Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <main className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          {children}
        </main> 
        <Footer />       
      </body>
    </html>
  )
}
