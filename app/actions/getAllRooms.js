'use server'

import { createAdminClient } from '@/config/appwrite'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

