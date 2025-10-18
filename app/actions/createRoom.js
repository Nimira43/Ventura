'use server'

import { createAdminClient } from '@/config/appwrite'
import checkAuth from './checkAuth'
import { ID } from 'node-appwrite'
import { revalidatePath } from 'next/cache'

async function createRoom(previousState, formData) {
  const { databases } = await createAdminClient()
  try {
    const { user } = await checkAuth()

    if (!user) {
      return {
        error: 'You must be logged in to create a room'
      }
    }

    const newRoom = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      ID.unique(),
      {
        user_id: user.id,
        name: formData.get('name'),
      }
    )

  } catch (error) {
    
  }

}

export default createRoom