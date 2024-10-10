import Link from 'next/link'
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBuilding } from 'react-icons/fa'

const Header = () => {
  return ( 
    <header className="bg-[#87ceeb]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="h-12 w-12 p-3">VV</h1>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#333] hover:bg-[#2947be] hover:text-[#f5f5dc]"
                >
                  Rooms
                </Link>
                <Link
                  href="/bookings.html"
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#333] hover:bg-[#2947be] hover:text-[#f5f5dc]"
                >
                  Bookings
                </Link>
                <Link
                  href="/add-room.html"
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#333] hover:bg-[#2947be] hover:text-[#f5f5dc]"
                >
                  Add Room
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                href="login.html"
                className="mr-3 text-[#333] hover:text-[#2947be]"
              >
                <FaSignInAlt className='inline mr-1'/> Login
              </Link>
              <Link
                href="register.html"
                className="mr-3 text-[#333] hover:text-[#2947be]"
              >
                <FaUser className='inline mr-1'/> Register
              </Link>
              <Link href="my-rooms.html">
                <FaBuilding className='inline mr-1'/> My Rooms
              </Link>
              <Link
                href="login.html"
                className="mx-3 text-[#333] hover:text-[#2947be]"
              >
                <FaSignOutAlt className='inline mr-1'/> Sign Out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-[#333] hover:bg-[#2947be] hover:text-[#f5f5dc]"
          >
            Rooms
          </Link>
          <Link
            href="/bookings.html"
            className="block rounded-md px-3 py-2 text-base font-medium text-[#333] hover:bg-[#2947be] hover:text-[#f5f5dc]"
          >
            Bookings
          </Link>
          <Link
            href="/add-room.html"
            className="block rounded-md px-3 py-2 text-base font-medium text-[#333] hover:bg-[#2947be] hover:text-[#f5f5dc]"
          >
            Add Room
          </Link>
        </div>
      </div>
    </header>
   );
}
 
export default Header;