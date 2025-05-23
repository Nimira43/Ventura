import Link from 'next/link'

const LoginPage= () => {
  return ( 
    <div className='flex items-center justify-center'>
      <div className='bg-light shadow-lg rounded-lg p-6 w-full max-w-sm mt-20'>
        <form>
          <h2 className='text-2xl font-medium text-center text-dark mb-6 uppercase'>Login</h2>

          <div className='mb-4'>
            <label
              for='email'
              className='block text-dark font-normal mb-2'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>

          <div className='mb-6'>
            <label
              for='password'
              className='block text-dark font-normal mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>

          <div className='flex flex-col gap-5'>
            <button
              type='submit'
              className='bg-primary-lg text-dark hover:text-light px-4 py-2 rounded hover:bg-primary uppercase font-medium'
            >
              Login
            </button>

            <p>
              No account?
              <Link
                href='/register'
                className='ml-1 text-primary'
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
   )
}
 
export default LoginPage