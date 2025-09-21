'use server'

import { createSessionClient } from '@/config/appwrite'
import { cookies } from 'next/headers'

async function checkAuth() {
  const sessionCookie = cookies().get('appwrite-session')
}

export default checkAuth