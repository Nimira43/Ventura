import Link from 'next/link'
import CancelBookingButton from './CancelBookingButton'

const BookedRoomCard = ({ booking }) => {
  const { room_id: room } = booking
  
  const formatDate = (dateString) => {
    const date = new Date(dateString)

    const month = date.toLocaleString('en-GB', {
      month: 'long',
      timeZone: 'Europe/London'
    })

    const day = date.toLocaleString('en-GB', {
      day: 'numeric',
      timeZone: 'Europe/London'
    })

    const time = date.toLocaleString('en-GB', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
      timeZone: 'Europe/London'
    })

    return `${day} ${month} at ${time}`
  }

  return (  
    <div className='bg-light shadow rounded-md p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center'>
      <div>
        <h4 class='text-lg font-medium'>
          {room.name}
        </h4>
        <p class='text-sm'>
          <strong>Check In: </strong> 
          {formatDate(booking.check_in)}
        </p>
        <p class='text-sm'>
          <strong>Check Out: </strong>
          {formatDate(booking.check_out)}
        </p>
      </div>
      <div class='flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0'>
        <Link
          href={`/rooms/${room.$id}`}
          className='main-btn mb-2 sm:mb-0 w-full sm:w-auto text-center'
        >
          View Room
        </Link>
        <CancelBookingButton bookingId={booking.$id} />
      </div>
    </div>
  )
}
 
export default BookedRoomCard