import Link from 'next/link'
import { HiOutlineEye } from 'react-icons/hi'

const MyRoomCard = ({ room }) => {
  return ( 
    <div className='just-between bg-light shadow rounded-md p-4 mt-4 flex-col sm:flex-row'>
      <div className='flex flex-col'>
        <h4 className='text-2xl font-medium'>{room.name}</h4>
      </div>
      <div className='flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0'>
        <Link
          href={`/rooms/${room.$id}`}
          className='centre main-btn mb-2 sm:mb-0 w-full sm:w-auto text-center' 
        >
          <HiOutlineEye className='mr-2 text-lg' /> View
        </Link>
        <button
          className='centre main-btn mb-2 sm:mb-0 w-full sm:w-auto text-center'
        >
          <HiOutlineTrash className='mr-2 text-lg' /> Delete
        </button>
      </div>
    </div>
  )
}
 
export default MyRoomCard