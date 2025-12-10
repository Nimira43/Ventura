'use client'

import { toast } from 'react-toastify'
import { HiOutlineTrash } from 'react-icons/hi'
import deleteRoom from '@/app/actions/deleteRoom'

const DeleteRoomButton = ({ roomId }) => {
  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you wish to delete this room?')

    if (confirmed) {
      try {
        const response = await deleteRoom(roomId)
        toast.success('Room deleted successfully.')
      } catch (error) {
        console.log('Failed to delete room', error)
        toast.error('Failed to delete room.')
      }
    }
  }

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