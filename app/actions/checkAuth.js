'use server'

import { createSessionClient } from '@/config/appwrite'
import { cookies } from 'next/headers'

async function checkAuth() {
  const sessionCookie = cookies().get('appwrite-session')

  if (!sessionCookie) {
    return {
      isAuthenticated: false
    }
  }

  try {
    const { account } = await createSessionClient(sessionCookie.value)
    const user = await account.get()
  } catch (error) {
    
  }
}

export default checkAuth