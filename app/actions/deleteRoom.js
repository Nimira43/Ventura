'use server'

import { createSessionClient } from '@/config/appwrite'
import { cookies } from 'next/headers'
import { Query } from 'node-appwrite'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

async function deleteRoom(roomId) {
  const sessionCookie = cookies().get('appwrite-session')

  if (!sessionCookie) {
    redirect('/login')
  }

  try {
    const { account, databases } = await createSessionClient(sessionCookie.value)

    const user = await account.get()
    const userId = user.$id

    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      [Query.equal('user_id', userId)]
    )

    const roomToDelete = rooms.find((room) => room.$id === roomId)

    if (roomToDelete) {
      await databases.deleteDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
        roomToDelete.$id
      )
    }

    return rooms 
  } catch (error) {
    console.log('Failed to get user rooms', error)
    redirect('/error')
  }
}

export default deleteRoom