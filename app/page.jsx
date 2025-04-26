import Heading from '@/components/Heading'
import RoomCard from '@/components/RoomCard'
import getAllRooms from './actions/getAllRooms'

export default function Home() {
  return (
    <>
      <Heading title='Available Rooms' />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard room={room} />)
      ) : (<p>No Rooms</p>)}
    </>
  )
}
