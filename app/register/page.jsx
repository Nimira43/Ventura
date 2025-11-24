'use client'

import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import createUser from '@/app/actions/createUser'
import Link from 'next/link'

const RegisterPage= () => {
  const [state, formAction] = useFormState(createUser, {})
  const router = useRouter()

  useEffect(() => {
    if (state.error) toast.error(state.error)
    if (state.success) {
      toast.success('You can now log in.')
      router.push('/login')
    }
  }, [state])


  return ( 
    <div className='centre'>
      <div className='bg-light shadow-lg rounded-lg p-6 w-full max-w-sm mt-20'>
        <form action={formAction}>
          <h2 className='text-2xl font-medium text-center text-dark mb-6 uppercase'>
            Register
          </h2>

          <div className='mb-4'>
            <label 
              htmlFor='name' 
              className='block text-dark font-medium mb-2'
            >
              Name
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
              htmlFor='email' 
              className='block text-dark font-medium mb-2'
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

          <div className='mb-4'>
            <label 
              htmlFor='password' 
              className='block text-dark font-medium mb-2'
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

          <div className='mb-6'>
            <label
              htmlFor='confirm-password'
              className='block text-dark font-medium mb-2'
            >
              Confirm Password
            </label            >
            <input
              type='password'
              id='confirm-password'
              name='confirm-password'
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>

          <div className='flex flex-col gap-5'>
            <button
              type='submit'
              className='main-btn'
            >
              Register
            </button>

            <p>
              Have an account?
              <Link 
                href='/login' 
                className='ml-2 text-primary uppercase'
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
   )
}
 
export default RegisterPage