import bookingsData from '../mock/bookings.json'
import { Booking, BookingEntry } from './bookingTypes'

let bookings: Booking[] = bookingsData as Booking[]

export const getBookings = (): Booking[] => {
  return bookings
}

export const getBookingById = (id: number): Booking | undefined => {
  return bookings.find(booking => booking.id === id)
}

/**
 * It takes a new booking entry, generates an id for it, and then adds it to the list of bookings
 * @param {BookingEntry} newBookingEntry - BookingEntry
 * @returns A new booking object with the id of the last booking + 1
 */
export const addBooking = (newBookingEntry: BookingEntry): Booking => {
  const id = Math.max(...bookings.map(b => b.id)) + 1
  const newBooking = { ...newBookingEntry, id: id }
  bookings.push(newBooking)
  return newBooking
}

/**
 * It takes an ID and a new booking entry, finds the booking with the given ID, replaces it with the
 * new booking entry, and returns the updated booking
 * @param {number} id - number - the id of the booking to update
 * @param {BookingEntry} newBookingEntry - BookingEntry
 * @returns Booking | undefined
 */
export const updateBooking = (id: number, newBookingEntry: BookingEntry): Booking | undefined => {
  const booking = bookings.find(booking => booking.id === id)
  if (booking == null) {
    throw new Error('Booking ID not found')
  }
  const newBookings: Booking[] = bookings.filter(booking => booking.id !== id)
  const bookingUpdated = { ...newBookingEntry, id: id }
  newBookings.push(bookingUpdated)
  bookings = newBookings
  return bookingUpdated
}

/**
 * It returns the deleted booking if it exists, otherwise it throws an error
 * @param {number} id - number - The ID of the booking to delete
 * @returns Booking | undefined
 */
export const deleteBooking = (id: number): Booking | undefined => {
  const booking = bookings.find(booking => booking.id === id)
  if (booking == null) {
    throw new Error('Booking ID not found')
  }
  const newBookings: Booking[] = bookings.filter(booking => booking.id !== id)
  bookings = newBookings
  return booking
}
