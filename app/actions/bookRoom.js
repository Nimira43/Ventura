'use server'

import { createSessionClient } from '@/config/appwrite'
import { cookies } from 'next/headers'
import { ID } from 'node-appwrite'
import { redirect } from 'next/navigation'
import checkAuth from './checkAuth'

async function bookRoom(previousState, formData) {
  const sessionCookie = cookies().get('appwrite-session')

  if (!sessionCookie) {
    redirect('/login')
  }

  try {
    const { databases } = await createSessionClient(sessionCookie.value)

    const { user } = checkAuth()

    if (!user) {
      return {
        error: 'You must be logged in to book a room.'
      }
    }

  } catch (error) {
    console.log('Failed to get book room', error)
    return {
      error: 'Something went wrong with booking the room.'
    }
  }
}

export default bookRoom