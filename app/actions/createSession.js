'use server'
import { createAdminClient } from '@/config/appwrite'

async function createSession(previousState, formData) {
  const email = formData.get('email')
  const password = formData.get('password')

  if (!email || !password) {
    return {
      error: 'Please fill out all fields.'
    }
  }

  const { account } = await createAdminClient()

  try {
    
  } catch (error) {
    
  }

  return {
    success: true,
  }
}

export default createSession