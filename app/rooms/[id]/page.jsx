import Heading from '@/components/Heading'
import rooms from '@/data/rooms.json'

const RoomPage = ({ params }) => {
  const { id } = params
  const room = rooms.find((room) => room.$id === id)

  if (!room) {
    return <Heading title='Room Not Found' />
  }

  return (
    <>
      <Heading title={ room.name } />
      <div className="bg-[#fff] shadow rounded-lg p-6">
        <a
          href="/rooms.html"
          className="flex items-center text-[#333] hover:text-[#111] mb-4"
        >
          <i className="fa fa-chevron-left"></i>
          <span className="ml-2">Back to Rooms</span>
        </a>

        <div className="flex flex-col sm:flex-row sm:space-x-6">
          <img
            src="images/rooms/room-1.jpg"
            alt="Grand Conference Hall"
            className="w-full sm:w-1/3 h-64 object-cover rounded-lg"
          />

          <div className="mt-4 sm:mt-0 sm:flex-1">
            <p className="text-gray-600 mb-4">
              Spacious conference hall perfect for large meetings and events.
              Equipped with modern amenities and comfortable seating.
            </p>

            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-gray-800">Size:</span> 3000 sq ft
              </li>
              <li>
                <span className="font-semibold text-gray-800">Availability:</span> 09:00-17:00
              </li>
              <li>
                <span className="font-semibold text-gray-800">Price:</span> £150/hour
              </li>
              <li>
                <span className="font-semibold text-gray-800">Address:</span> 555
                California St, San Francisco, CA 94104
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold">Book this Room</h2>
          <form className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="check_in_date"
                  className="block text-sm font-medium text-[#111]"
                >
                  Check-In Date
                </label>
                <input
                  type="date"
                  id="check_in_date"
                  name="check_in_date"
                  className="mt-1 block w-full px-3 py-2 border border-[#333] rounded-md shadow-sm focus:ring-[#111] focus:border-[#111] sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="check_in_time"
                  className="block text-sm font-medium text-[#111]"
                >
                  Check-In Time
                </label>
                <input
                  type="time"
                  id="check_in_time"
                  name="check_in_time"
                  className="mt-1 block w-full px-3 py-2 border border-[#333] rounded-md shadow-sm focus:ring-[#111] focus:border-[#111] sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="check_out_date"
                  className="block text-sm font-medium text-[#111]"
                >
                  Check-Out Date
                </label>
                <input
                  type="date"
                  id="check_out_date"
                  name="check_out_date"
                  className="mt-1 block w-full px-3 py-2 border border-[#333] rounded-md shadow-sm focus:ring-[#111] focus:border-[#111] sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="check_out_time"
                  className="block text-sm font-medium text-[#111]"
                >
                  Check-Out Time
                </label>
                <input
                  type="time"
                  id="check_out_time"
                  name="check_out_time"
                  className="mt-1 block w-full px-3 py-2 border border-[#333] rounded-md shadow-sm focus:ring-[#111] focus:border-[#111] sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#fff] bg-black hover:bg-[#333] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111]"
              >
                Book Room
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
   );
}
 
export default RoomPage