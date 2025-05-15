import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import { PiSignInLight, PiSignOutLight } from 'react-icons/pi'
import { LiaBuilding } from 'react-icons/lia'

const Header = () => {
  
  return (
    <header className='bg-primary-lg'>
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
                  className='rounded-md px-3 py-2 text-sm text-dark hover:bg-primary hover:text-white'
                >
                  Rooms
                </Link>
                <Link
                  href='/bookings'
                  className='rounded-md px-3 py-2 text-sm  text-dark   hover:bg-primary hover:text-white'
                >
                  Bookings
                </Link>
                <Link
                  href='/rooms/add'
                  className='rounded-md px-3 py-2 text-sm  text-dark hover:bg-primary hover:text-white'
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
                className='mr-3 uppercase text-dark hover:text-primary'
              >
                <PiSignInLight className='inline mr-1'/> Login
              </Link>
              <Link
                href='/register'
                className='mr-3 uppercase text-dark hover:text-primary'
              >
                <AiOutlineUser className='inline mr-1'/> Register
              </Link>
              <Link 
                href='/rooms/my'
                className='mr-3 uppercase text-dark hover:text-primary'
              >
                <LiaBuilding className='inline mr-1'/> My Rooms
              </Link>
              <Link
                href='/login'
                className='mx-3 uppercase text-dark hover:text-primary'
              >
                <PiSignOutLight className='inline mr-1'/> Sign Out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className='md:hidden'>
        <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
          <Link
            href='/'
            className='block rounded-md px-3 py-2 text-base uppercase text-dark hover:bg-primary hover:text-white'
          >
            Rooms
          </Link>
          <Link
            href='/bookings'
            className='block rounded-md px-3 py-2 text-base uppercase text-dark hover:bg-primary hover:text-white'
          >
            Bookings
          </Link>
          <Link
            href='/rooms/add'
            className='block rounded-md px-3 py-2 text-base uppercase text-dark hover:bg-primary hover:text-white'
          >
            Add Room
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header