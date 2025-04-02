import { Client, Databases, Account, Storage } from 'node-appwrite'

const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
    .setKey(process.env.NEXT_APPWRITE_KEY)
  return {
    get account() {
      return new Account(client)
    }
  }
}

const createSessionsClient = async (session) => {}