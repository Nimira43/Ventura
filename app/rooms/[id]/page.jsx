const RoomPage = () => {
  return (
    <div>
      <h1>Room Page</h1>
    </div>
  )
}

export default RoomPage





// import Heading from '@/components/Heading'
// import BookingForm from '@/components/BookingForm'
// import Image from 'next/image'
// import Link from 'next/link'
// import { LuChevronLeftCircle } from 'react-icons/lu'
// import rooms from '@/data/rooms.json'

// const RoomPage = ({ params }) => {
//   const { id } = params
//   const room = rooms.find((room) => room.$id === id)

//   if (!room) {
//     return <Heading title='Room Not Found' />
//   }

//   return (
//     <>
//       <Heading title={ room.name } />
//       <div className="bg-[#fff] shadow rounded-lg p-6">
//         <Link
//           href="/"
//           className="flex items-center text-[#333] hover:text-[#111] mb-4"
//         >
//           <LuChevronLeftCircle className='inline mr-1' />
//           <span className="ml-2">Back to Rooms</span>
//         </Link>

//         <div className="flex flex-col sm:flex-row sm:space-x-6">
//           <Image
//             src={`/images/rooms/${room.image}`}
//             alt={room.name}
//             width={400}
//             height={100}
//             className="w-full sm:w-1/3 h-64 object-cover rounded-lg"
//           />

//           <div className="mt-4 sm:mt-0 sm:flex-1">
//             <p className="text-[#333] mb-4">
//               {room.description}
//             </p>

//             <ul className="space-y-2">
//               <li>
//                 <span className="font-semibold text-[#111]">Size:</span> {room.sqft}
//               </li>
//               <li>
//                 <span className="font-semibold text-[#111]">Availability:</span> {room.availability}
//               </li>
//               <li>
//                 <span className="font-semibold text-[#111]">Price:</span> £{room.price_per_hour} per hour
//               </li>
//               <li>
//                 <span className="font-semibold text-[#111]">Address:</span> {room.address}
//               </li>
//             </ul>
//           </div>
//         </div>
//         <BookingForm />
//       </div>
//     </>
//    );
// }
 
// export default RoomPage