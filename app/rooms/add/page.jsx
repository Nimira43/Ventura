'use client'

import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import Heading from '@/components/Heading'
import createRoom from '@/app/actions/createRoom'

const AddRoomPage = () => {
  const [state, formAction] = useFormState(createRoom, {})
  const router = useRouter()

  useEffect(() => {
    if (state.error) toast.error(state.error)
    if (state.success) {
      toast.success('Room created successfully.')
      
      router.push('/')
    }
  }, [state])

  return ( 
    <>
      <Heading title='Add Room' />
      <div className='bg-light shadow-lg rounded-lg p-6 w-full'>
        <form action={formAction}>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='form-label mb-2'
            >
              Room Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='form-input'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='description'
              className='form-label mb-2'
            >
              Description
            </label>
            <textarea
              id='description'
              name='description'
              className='form-input h-24'
              required
            ></textarea>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='sqft'
              className='form-label mb-2'
            >
              Square Feet
            </label>
            <input
              type='number'
              id='sqft'
              name='sqft'
              className='form-input'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='capacity'
              className='form-label mb-2'
            >
              Capacity
            </label>
            <input
              type='number'
              id='capacity'
              name='capacity'
              className='form-input'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='price_per_hour'
              className='form-label mb-2'
            >
              Price Per Hour
            </label>
            <input
              type='number'
              id='price_per_hour'
              name='price_per_hour'
              className='form-input'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='address'
              className='form-label mb-2'
            >
              Address
            </label>
            <input
              type='text'
              id='address'
              name='address'
              className='form-input'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='location'
              className='form-label mb-2'
            >
              Location
            </label>
            <input
              type='text'
              id='location'
              name='location'
              className='form-input'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='availability'
              className='form-label mb-2'
            >
              Availability
            </label>
            <input
              type='text'
              id='availability'
              name='availability'
              className='form-input'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='amenities'
              className='form-label mb-2'
            >
              Amenities
            </label>
            <input
              type='text'
              id='amenities'
              name='amenities'
              className='form-input'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='image'
              className='form-label mb-2'
            >
              Image
            </label>
            <input
              type='file'
              id='image'
              name='image'
              className='form-input'
            />
          </div>
          <div className='flex flex-col gap-5'>
            <button
              type='submit'
              className='main-btn'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
   )
}
 
export default AddRoomPage