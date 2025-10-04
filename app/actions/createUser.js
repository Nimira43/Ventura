'use server'

import { createAdminClient } from '@/config/appwrite'
import { ID } from 'node-appwrite'

async function createUser(previousState, formData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const password = formData.get('password')


  if (!email || !password) {
    return {
      error: 'Please fill in all fields.',
    }
  }

  if (password.length < 8) {
    return {
      error: 'Password must be 8 characters or more.'
    }
  }


}

export default createUser()