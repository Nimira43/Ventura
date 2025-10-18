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
  }, [])

  return ( 
    <>
      <Heading title='Add Room' />
      <div className='bg-light shadow-lg rounded-lg p-6 w-full'>
        <form>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-dark font-normal mb-2'
            >
              Room Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block text-dark font-normal mb-2'
            >
              Description
            </label>
            <textarea
              id='description'
              name='description'
              className='border rounded w-full h-24 py-2 px-3'
              required
            ></textarea>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='sqft'
              className='block text-dark font-normal mb-2'
            >
              Square Feet
            </label>
            <input
              type='number'
              id='sqft'
              name='sqft'
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='capacity'
              className='block text-dark font-normal mb-2'
            >
              Capacity
            </label>
            <input
              type='number'
              id='capacity'
              name='capacity'
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='price_per_hour'
              className='block text-dark font-normal mb-2'
            >
              Price Per Hour
            </label>
            <input
              type='number'
              id='price_per_hour'
              name='price_per_hour'
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='address'
              className='block text-dark font-normal mb-2'
            >
              Address
            </label>
            <input
              type='text'
              id='address'
              name='address'
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='location'
              className='block text-dark font-normal mb-2'
            >
              Location
            </label>
            <input
              type='text'
              id='location'
              name='location'
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='availability'
              className='block text-dark font-normal mb-2'
            >
              Availability
            </label>
            <input
              type='text'
              id='availability'
              name='availability'
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='amenities'
              className='block text-dark font-normal mb-2'
            >
              Amenities
            </label>
            <input
              type='text'
              id='amenities'
              name='amenities'
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='image'
              className='block text-dark font-normal mb-2'
            >
              Image
            </label>
            <input
              type='file'
              id='image'
              name='image'
              className='border rounded w-full py-2 px-3'
            />
          </div>
          <div className='flex flex-col gap-5'>
            <button
              type='submit'
              className='bg-primary-light text-dark hover:text-light px-4 py-2 rounded hover:bg-primary uppercase font-medium btn-hover'
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