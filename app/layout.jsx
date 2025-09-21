import { Poppins } from 'next/font/google'
import '@/assets/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AuthWrapper from '@/components/AuthWrapper'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Ventura',
  description: 'Booking app using Next, Appwrite and Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <AuthWrapper>
      <html lang='en'>
        <body className={poppins.className}>
          <Header />
          <main className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
            {children}
          </main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthWrapper>
    
  )
}