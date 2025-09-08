'use server'
import { createSessionClient } from '@/config/appwrite'
import { cookies } from 'next/headers'

async function destroySession() {
  try {
    
  } catch (error) {   
    return {
      error: 'Error deleting session.'
    }
  }
}

export default destroySession