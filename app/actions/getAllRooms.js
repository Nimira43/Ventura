'use server'

import { createAdminClient } from '@/config/appwrite'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

async function getAllRooms() {
  try {
    const { databases } = await createAdminClient()
  } catch (error) {

  }
}