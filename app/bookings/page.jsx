import getMyBookings from '../actions/getMyBookings'
import BookedRoomCard from '@/components/BookedRoomCard'

const BookingsPage = async () => {
  const bookings = await getMyBookings()
  
  return ( 
    <>
      {bookings.length === 0
        ? (
            <p className='text-dark mt-4'>You have no bookings.</p>
        )
        : (
            bookings.map((booking) => (
              <BookedRoomCard
                key={booking.$id}
                booking={booking}
              />
            )
          )
        )
      }
    </>
  )
}
 
export default BookingsPage