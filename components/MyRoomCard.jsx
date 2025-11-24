import Link from 'next/link'
import { HiOutlineEye,  HiOutlineTrash} from 'react-icons/hi'

const MyRoomCard = () => {
  return ( 
    <div className='bg-light shadow rounded-md p-4 mt-4 flex flex-col sm:flex-row justify-between items-center'>
      <div className='flex flex-col'>
        <h4 className='text-lg font-medium'>My Room 1</h4>
      </div>
      <div className='flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0'>
        <Link
          href='#'
          className='bg-primary-light hover:bg-primary text-dark hover:text-light px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center  uppercase font-medium btn-hover' 
        >
          <HiOutlineEye />
        </Link>
        <button
          type='submit'
          className='w-full flex justify-center bg-primary-light text-dark hover:text-light px-4 py-2 rounded hover:bg-primary uppercase font-medium btn-hover'
        >
          <HiOutlineTrash />
        </button>
      </div>
    </div>
  )
}
 
export default MyRoomCard