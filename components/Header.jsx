'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import { PiSignInLight, PiSignOutLight } from 'react-icons/pi'
import { LiaBuilding } from 'react-icons/lia'
import destroySession from '@/app/actions/destroySession'
import { toast } from 'react-toastify'
import { useAuth } from '@/context/authContext'

const Header = () => {
  const router = useRouter()
  const {isAuthenticated, setIsAuthenticated} = useAuth()

  const handleLogout = async () => {
    const { success, error } = await destroySession()

    if (success) {
      setIsAuthenticated(false)
      router.push('/login')
    } else {
      toast.error(error)
    }
  }
  
  return (
    <header className='bg-primary-light'>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>         
        <div className='just-between h-16'>
          <div className='flex items-center'>
            <Link href='/'>
              <h1 className='text-3xl font-medium logo'>Ventura</h1>
            </Link>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <Link
                  href='/'
                  className='header-link'
                >
                  Rooms
                </Link>

                { isAuthenticated && (
                  <>
                    <Link
                      href='/bookings'
                      className='header-link'
                    >
                      Bookings
                    </Link>
                    <Link
                      href='/rooms/add'
                      className='header-link'
                    >
                      Add Room
                    </Link>
                  </>
                )}
                
              </div>
            </div>
          </div>
          <div className='ml-auto'>
            <div className='ml-4 flex items-center md:ml-6'>

              {!isAuthenticated && (
                <>
                  <Link
                    href='/login'
                    className='mr-3 header-link'
                  >
                    <PiSignInLight className='inline'/> Login
                  </Link>
                  <Link
                    href='/register'
                    className='mr-3 header-link'
                  >
                    <AiOutlineUser className='inline'/> Register
                  </Link>
                </>
              )}

              {isAuthenticated && (
                <>
                  <Link 
                    href='/rooms/my'
                    className='mr-3 header-link'
                  >
                    <LiaBuilding className='inline'/> My Rooms
                  </Link>
                  <button
                    onClick={handleLogout}
                    className='mx-3 header-link'
                  >
                    <PiSignOutLight className='inline'/> Sign Out
                  </button>
                </>  
              )}
              
            </div>
          </div>
        </div>
      </nav>

      <div className='md:hidden'>
        <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
          <Link
            href='/'
            className='block header-link'
          >
            Rooms
          </Link>

          {isAuthenticated && (
            <>
              <Link
                href='/bookings'
                className='block header-link'
              >
                Bookings
              </Link>
              <Link
                href='/rooms/add'
                className='block header-link'
              >
                Add Room
              </Link>  
            </>
          )}
          
        </div>
      </div>
    </header>
  )
}

export default Header