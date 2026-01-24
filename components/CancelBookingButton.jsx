'use client'

import { toast } from 'react-toastify'
import cancelBooking from '@/app/actions/cancelBooking'

const CancelBookingButton = ({ bookingId }) => {
  const handleCancelClick = async () => {
    if (!confirm('Are you sure you want to cancel this booking.')) {
      return
    }

    try {
      const result = await cancelBooking(bookingId)

      if (result.success) {
        toast.success('Booking cancelled succesfully.')
      }
    } catch (error) {
      console.log('Failed to cancel booking.', error)

      return {
        error: 'Failed to cancel booking.'
      }
    }
  }  

  return (  
    <button
      onClick= { handleCancelClick }
      className='dark-btn w-full sm:w-auto text-center'
    >
      Cancel Booking
    </button>
  )
}
 
export default CancelBookingButton