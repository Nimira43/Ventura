import Link from 'next/link'
import { HiOutlineEye,  HiOutlineTrash} from 'react-icons/hi'

const MyRoomCard = ({ room }) => {
  return ( 
    <div className='bg-light shadow rounded-md p-4 mt-4 flex flex-col sm:flex-row justify-between items-center'>
      <div className='flex flex-col'>
        <h4 className='text-2xl font-medium'>{room.name}</h4>
      </div>
      <div className='flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0'>
        <Link
          href={`/rooms/${room.$id}`}
          className='flex justify-center items-center bg-primary-light hover:bg-primary text-dark hover:text-light px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center font-medium btn-hover uppercase' 
        >
          <HiOutlineEye className='mr-2 text-lg' /> View
        </Link>
        <button
          // type='submit'
          className='flex justify-center items-center bg-primary-light hover:bg-primary text-dark hover:text-light px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center  font-medium btn-hover uppercase'
        >
          <HiOutlineTrash className='mr-2 text-lg' /> Delete
        </button>
      </div>
    </div>
  )
}
 
export default MyRoomCard