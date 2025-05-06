import { DateSwitcher } from '../components/DateSwitcher'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Event Calendar</h1>
        <DateSwitcher />
      </div>
    </div>
  )
} 