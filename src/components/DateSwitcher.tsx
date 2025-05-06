import { useState } from 'react'
import { useEvents } from '../hooks/useEvents'

export const DateSwitcher = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [searchTerm, setSearchTerm] = useState('')

  const handlePreviousDay = () => {
   //...implement handlePreviousDay
  }

  const handleNextDay = () => {
    //...implement handleNextDay
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePreviousDay}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Previous
        </button>
        <h2 className="text-xl font-semibold">{formatDate(currentDate)}</h2>
        <button
          onClick={handleNextDay}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      {isLoading ? (
        <div className="text-center">Loading events...</div>
      ) : events.length > 0 ? (
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="p-4 border rounded">
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No events found</div>
      )}
    </div>
  )
} 