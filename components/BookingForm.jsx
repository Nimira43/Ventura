const BookingForm = () => {
  return ( 
    <>
      <div className='mt-6'>
        <h2 className='text-lg font-medium uppercase'>Book this Room</h2>
        <form className='mt-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div>
              <label
                htmlFor='check_in_date'
                className='block text-sm font-medium text-dark'
              >
                Check-In Date
              </label>
              <input
                type='date'
                id='check_in_date'
                name='check_in_date'
                className='mt-1 block w-full px-3 py-2 border border-grey-dark rounded-md shadow-sm focus:border-dark sm:text-sm'
                required
              />
            </div>
            <div>
              <label
                htmlFor='check_in_time'
                className='block text-sm font-medium text-dark'
              >
                Check-In Time
              </label>
              <input
                type='time'
                id='check_in_time'
                name='check_in_time'
                className='mt-1 block w-full px-3 py-2 border border-grey-dark rounded-md shadow-sm focus:border-dark sm:text-sm'
                required
              />
            </div>
            <div>
              <label
                htmlFor='check_out_date'
                className='block text-sm font-medium text-dark'
              >
                Check-Out Date
              </label>
              <input
                type='date'
                id='check_out_date'
                name='check_out_date'
                className='mt-1 block w-full px-3 py-2 border border-grey-dark rounded-md shadow-sm focus:border-dark sm:text-sm'
                required
              />
            </div>
            <div>
              <label
                htmlFor='check_out_time'
                className='block text-sm font-medium text-dark'
              >
                Check-Out Time
              </label>
              <input
                type='time'
                id='check_out_time'
                name='check_out_time'
                className='mt-1 block w-full px-3 py-2 border border-grey-dark rounded-md shadow-sm focus:border-dark sm:text-sm'
                required
              />
            </div>
          </div>
          <div className='mt-6'>
            <button
              type='submit'
              className='w-full flex justify-center bg-primary-light text-dark hover:text-light px-4 py-2 rounded hover:bg-primary uppercase font-medium btn-hover'
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
