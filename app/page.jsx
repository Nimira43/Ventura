import Heading from '@/components/Heading'
import RoomCard from '@/components/RoomCard'
import 

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
