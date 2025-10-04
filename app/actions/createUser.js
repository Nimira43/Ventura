'use server'

import { createAdminClient } from '@/config/appwrite'
import { ID } from 'node-appwrite'

async function createUser(previousState, formData) {
  const name = form.Data.get('name')
  const email = form.Data.get('email')
  const password = form.Data.get('password')

  if (!email || !password) {
    return {
      error: 'Please fill in all fields.',
    }
  }

  
}

export default createUser()