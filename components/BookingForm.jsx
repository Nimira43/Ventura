'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'react-toastify'
import bookRoom from '@/app/actions/bookRoom'

const BookingForm = ({ room }) => {
  const [state, formAction] = useFormState(bookRoom, {})
  const router = useRouter()

  useEffect(() => {
    if (state.error) toast.error(state.error)
    
  }, [state])

  return ( 
    <>
      <div className='mt-6'>
        <h2 className='text-lg font-medium uppercase'>Book this Room</h2>
        <form className='mt-4'>
          <input
            type='hidden'
            name='room_id'
            value={room.$id}
          />
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div>
              <label
                htmlFor='check_in_date'
                className='form-label'
              >
                Check-In Date
              </label>
              <input
                type='date'
                id='check_in_date'
                name='check_in_date'
                className='form-input'
                required
              />
            </div>
            <div>
              <label
                htmlFor='check_in_time'
                className='form-label'
              >
                Check-In Time
              </label>
              <input
                type='time'
                id='check_in_time'
                name='check_in_time'
                className='form-input'
                required
              />
            </div>
            <div>
              <label
                htmlFor='check_out_date'
                className='form-label'
              >
                Check-Out Date
              </label>
              <input
                type='date'
                id='check_out_date'
                name='check_out_date'
                className='form-input'
                required
              />
            </div>
            <div>
              <label
                htmlFor='check_out_time'
                className='form-label'
              >
                Check-Out Time
              </label>
              <input
                type='time'
                id='check_out_time'
                name='check_out_time'
                className='form-input'
                required
              />
            </div>
          </div>
          <div className='mt-6'>
            <button
              type='submit'
              className='w-full main-btn'
            >
              Book Room
            </button>
          </div>
        </form>
      </div>
    </>
   )
}
export default BookingForm
