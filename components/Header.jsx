import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import { PiSignInLight, PiSignOutLight } from 'react-icons/pi'
import { LiaBuilding } from 'react-icons/lia'

const Header = () => {
  return (
    <header className='bg-[#c4eeff]'>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>         
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <Link href='/'>
              <h1 className='h-12 w-12 p-3 font-bold text-lg logo'>VV</h1>
            </Link>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <Link
                  href='/'
                  className='rounded-md px-3 py-2 text-sm font-medium text-[#333] hover:bg-[#333] hover:text-[#f5f5dc]'
                >
                  Rooms
                </Link>
                <Link
                  href='/bookings'
                  className='rounded-md px-3 py-2 text-sm font-medium text-[#333] hover:bg-[#333] hover:text-[#f5f5dc]'
                >
                  Bookings
                </Link>
                <Link
                  href='/add-room'
                  className='rounded-md px-3 py-2 text-sm font-medium text-[#333] hover:bg-[#333] hover:text-[#f5f5dc]'
                >
                  Add Room
                </Link>
              </div>
            </div>
          </div>
          <div className='ml-auto'>
            <div className='ml-4 flex items-center md:ml-6'>
              <Link
                href='login'
                className='mr-3 text-[#333] hover:text-[#f5f5dc]'
              >
                <PiSignInLight className='inline mr-1'/> Login
              </Link>
              <Link
                href='/register'
                className='mr-3 text-[#333] hover:text-[#f5f5dc]'
              >
                <AiOutlineUser className='inline mr-1'/> Register
              </Link>
              <Link href='my-rooms.html'>
                <LiaBuilding className='inline mr-1'/> My Rooms
              </Link>
              <Link
                href='/login'
                className='mx-3 text-[#333] hover:text-[#f5f5dc]'
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
            className='block rounded-md px-3 py-2 text-base font-medium text-[#333] hover:bg-[#333] hover:text-[#f5f5dc]'
          >
            Rooms
          </Link>
          <Link
            href='/bookings'
            className='block rounded-md px-3 py-2 text-base font-medium text-[#333] hover:bg-[#333] hover:text-[#f5f5dc]'
          >
            Bookings
          </Link>
          <Link
            href='/add-room'
            className='block rounded-md px-3 py-2 text-base font-medium text-[#333] hover:bg-[#333] hover:text-[#f5f5dc]'
          >
            Add Room
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

