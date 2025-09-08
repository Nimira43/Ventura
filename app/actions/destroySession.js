'use server'
import { createSessionClient } from '@/config/appwrite'
import { cookies } from 'next/headers'

async function destroySession() {
  const sessionCookie = cookies().get('appwrite-session')

  if (!sessionCookie) {
    return {
      error: 'No session cookie found'
    } 
  }
  try {
    
  } catch (error) {   
    return {
      error: 'Error deleting session.'
    }
  }
}

export default destroySession