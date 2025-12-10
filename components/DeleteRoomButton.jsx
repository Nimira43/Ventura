'use client'

import { toast } from 'react-toastify'
import { HiOutlineTrash } from 'react-icons/hi'
import deleteRoom from '@/app/actions/deleteRoom'

const DeleteRoomButton = () => {
  const handleDelete = async () => {}

  return ( 
    <button
      onClick={handleDelete}
      className='centre main-btn mb-2 sm:mb-0 w-full sm:w-auto text-center'
    >
      <HiOutlineTrash className='mr-2 text-lg' /> Delete
    </button>
  )
}
 
export default DeleteRoomButton