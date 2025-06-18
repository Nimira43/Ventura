import Heading from '@/components/Heading'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'
import getSingleRoom from '@/app/actions/getSingleRoom'
import BookingForm from '@/components/BookingForm'

const RoomPage = async ({ params }) => {
  const { id } = params
  const room = await getSingleRoom(id)

  if (!room) {
    return <Heading title='Room Not Found'/>
  }
  return ( 
    <>
      <Heading title={room.name} />
      <div className='bg-light shadow rounded-lg p-6'>
        <Link
          href='/'
          className='flex items-center text-grey-dk hover:text-primary mb-4'
        >
          <FaChevronLeft className='inline mr-1' />
          <span className='uppercase font-medium'>Back to Rooms</span>
        </Link>

        <div className='flex flex-col sm:flex-row sm:space-x-6'>
          <Image
            src={`/images/rooms/${room.image}`}
            alt={room.name}
            width={400}
            height={100}
            className='w-full sm:w-1/3 h-64 object-cover rounded-lg'
          />

          <div className='mt-4 sm:mt-0 sm:flex-1'>
            <p className='text-grey-dk mb-4'>
              {room.description}
            </p>

            <ul className='space-y-2'>
              <li>
                <span className='font-medium text-dark'>Size:</span> {room.sqft}
              </li>
              <li>
                <span className='font-medium text-dark'>Availability:</span> {room.availability}
              </li>
              <li>
                <span className='font-medium text-dark'>Price:</span> £{room.price_per_hour} per hour
              </li>
              <li>
                <span className='font-medium text-dark'>Address:</span> {room.address}
              </li>
            </ul>
          </div>
        </div>
        <BookingForm />
      </div>    
    </>  
  )
}
 
export default RoomPage