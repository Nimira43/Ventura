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
   const session = await account.createEmailPasswordSession(email, password) 
  } catch (error) {
    
  }
}

export default createSession