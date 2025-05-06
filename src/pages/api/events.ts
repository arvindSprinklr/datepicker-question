import type { NextApiRequest, NextApiResponse } from 'next'
import { events, Event } from '../../data/events'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { date, search } = req.query

  try {
    // Simulate API delay
    await delay(500)

    let filteredEvents = events

    // Filter by date if provided
    if (date) {
      filteredEvents = filteredEvents.filter((event: Event) => event.date === date)
    }

    // Filter by search term if provided
    if (search) {
      const searchLower = search.toString().toLowerCase()
      filteredEvents = filteredEvents.filter(
        (event: Event) =>
          event.title.toLowerCase().includes(searchLower) ||
          event.description.toLowerCase().includes(searchLower)
      )
    }

    res.status(200).json({ events: filteredEvents })
  } catch (error) {
    console.error('Error fetching events:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
} 