import { useState, useEffect } from 'react'

export interface Event {
  id: number
  date: string
  title: string
  description: string
}

//endpoint: ``
export const useEvents = (date: Date, searchTerm: string = '') => {
  const events: Event[] = [];
  const isLoading = false;
  /*
   Implement Fetch Event hook
  */
 

  return { events, isLoading }
} 