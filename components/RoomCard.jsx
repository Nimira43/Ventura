import Image from 'next/image'
import Link from 'next/link'

const RoomCard = ({ room }) => {
  return ( 
    <div
      className='bg-light shadow-md rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center'
    >
      <div className='flex flex-col sm:flex-row sm:space-x-4'>
        <Image
          src={`/images/rooms/${room.image}`}
          width={400}
          height={100}
          alt={room.name}
          className='w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 object-cover rounded-lg'
          priority
        />
        <div className='space-y-1'>
          <h4 className='text-lg font-medium uppercase'>{room.name}</h4>
          <p className='text-sm text-dark '>
            <span className='font-medium text-grey-dk'> Address: </span>
            {room.address}
          </p>
          <p className='text-sm text-dark '>
            <span className='font-medium text-grey-dk'> Availability: </span>
            {room.availability}
          </p>
          <p className='text-sm text-dark '>
            <span className='font-medium text-grey-dk'> Price: </span>
            £{room.price_per_hour} per hour
          </p>
        </div>
      </div>
      <div
        className='flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0'
      >
        <Link
          href={`/rooms/${room.$id}`}
          className='bg-primary-lg hover:bg-primary text-dark hover:text-light px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-dark] uppercase font-medium btn-hover'
        >
          View Room
        </Link>  
      </div>
    </div>
   )
}
 
export default RoomCard
