'use client'

import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import { PiSignInLight, PiSignOutLight } from 'react-icons/pi'
import { LiaBuilding } from 'react-icons/lia'
import destroySession from '@/app/actions/destroySession'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import checkAuth from '@/app/actions/checkAuth'

const Header = () => {
  const router = useRouter()

  const handleLogout = async () => {
    const { success, error } = await destroySession()

    if (success) {
      router.push('/login')
    } else {
      toast.error(error)
    }
  }
  
  return (
    <header className='bg-primary-light'>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>         
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <Link href='/'>
              <h1 className='text-3xl font-medium logo'>Ventura</h1>
            </Link>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <Link
                  href='/'
                  className='rounded-md px-3 py-2 text-sm text-dark hover:bg-primary hover:text-light uppercase font-medium btn-hover'
                >
                  Rooms
                </Link>
                <Link
                  href='/bookings'
                  className='rounded-md px-3 py-2 text-sm text-dark hover:bg-primary hover:text-light uppercase font-medium btn-hover'
                >
                  Bookings
                </Link>
                <Link
                  href='/rooms/add'
                  className='rounded-md px-3 py-2 text-sm text-dark hover:bg-primary hover:text-light uppercase font-medium btn-hover'
                >
                  Add Room
                </Link>
              </div>
            </div>
          </div>
          <div className='ml-auto'>
            <div className='ml-4 flex items-center md:ml-6'>
              <Link
                href='/login'
                className='mr-3 text-dark hover:text-primary uppercase font-medium btn-hover'
              >
                <PiSignInLight className='inline'/> Login
              </Link>
              <Link
                href='/register'
                className='mr-3 text-dark hover:text-primary uppercase font-medium btn-hover'
              >
                <AiOutlineUser className='inline'/> Register
              </Link>
              <Link 
                href='/rooms/my'
                className='mr-3 text-dark hover:text-primary uppercase font-medium btn-hover'
              >
                <LiaBuilding className='inline'/> My Rooms
              </Link>
              <button
                onClick={handleLogout}
                className='mx-3 text-dark hover:text-primary uppercase font-medium btn-hover'
              >
                <PiSignOutLight className='inline'/> Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className='md:hidden'>
        <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
          <Link
            href='/'
            className='block rounded-md px-3 py-2 text-base text-dark hover:bg-primary hover:text-light uppercase font-medium btn-hover'
          >
            Rooms
          </Link>
          <Link
            href='/bookings'
            className='block rounded-md px-3 py-2 text-base text-dark hover:bg-primary hover:text-light uppercase font-medium btn-hover'
          >
            Bookings
          </Link>
          <Link
            href='/rooms/add'
            className='block rounded-md px-3 py-2 text-base text-dark hover:bg-primary hover:text-light uppercase font-medium btn-hover'
          >
            Add Room
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header