import bookingsData from '../mock/bookings.json'
import { Booking, BookingEntry } from './bookingTypes'

const bookings: Booking[] = bookingsData as Booking[]

export const getBookings = (): Booking[] => {
  return bookings
}

export const getBookingById = (id: number): Booking | undefined => {
  return bookings.find(booking => booking.id === id)
}

export const addBooking = (newBookingEntry: BookingEntry): Booking => {
  const id = Math.max(...bookings.map(b => b.id)) + 1
  const newBooking = { ...newBookingEntry, id: id }
  bookings.push(newBooking)
  return newBooking
}
