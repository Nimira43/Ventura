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
