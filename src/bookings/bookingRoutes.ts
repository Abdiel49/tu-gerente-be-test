import express from 'express'
import { toNewBookingEntry } from '../parsers/bookingsParsers'
import * as bookingServices from './bookingServices'

const route = express.Router()

route.get('/', (_req, res) => {
  const bookings = bookingServices.getBookings()
  res.send(bookings)
})

route.get('/:id', (req, res) => {
  const { id } = req.params
  const booking = bookingServices.getBookingById(+id)
  if (booking == null) {
    res.status(404).send('Booking not found')
  }
  res.send(booking)
})

/* Creating a new booking entry. */
route.post('/', (req, res) => {
  try {
    const newBookingEntry = toNewBookingEntry(req.body)
    const booking = bookingServices.addBooking(newBookingEntry)
    res.json(booking)
  } catch (error) {
    const e = error as Error
    res.status(400).send(e.message)
  }
})

route.put('/:id', (req, res) => {
  const { id } = req.params
  console.log('put bookings!', id)
  res.send('pong')
})

route.delete('/:id', (req, res) => {
  const { id } = req.params
  console.log('delete bookings!', id)
  res.send('pong')
})
export default route
