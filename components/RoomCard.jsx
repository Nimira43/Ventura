import Image from 'next/image'
import Link from 'next/link'

const RoomCard = ({ room }) => {
  return ( 
    <div
      class='bg-[#f5f5dc] shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center'
    >
      <div className='flex flex-col sm:flex-row sm:space-x-4'>
        <Image
          src='images/rooms/room-1.jpg'
          alt='Grand Conference Hall'
          className='w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 object-cover rounded-lg'
        />
        <div className='space-y-1'>
          <h4 className='text-lg font-semibold'>Grand Conference Hall</h4>
          <p className='text-sm text-[#111]'>
            <span className='font-semibold text-[#333]'> Address:</span> 555
            California St, San Francisco, CA 94104
          </p>
          <p className='text-sm text-[#111]'>
            <span className='font-semibold text-[#333]'> Availability:</span>
            9 AM - 5 PM
          </p>
          <p className='text-sm text-[#111]'>
            <span className='font-semibold text-[#333]'> Price:</span>
            £150/hour
          </p>
        </div>
      </div>
      <div
        className='flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0'
      >
        <Link
          href='room.html'
          class='bg-[#333] text-[#f5f5dc] px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-[#111]]'
        >
          View Room
        </Link>  
      </div>
    </div>

   )
}
 
export default RoomCard