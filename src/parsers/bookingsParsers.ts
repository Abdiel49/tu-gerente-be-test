import { BookingEntry } from '../bookings/bookingTypes'
import { BookingStatus, PayMethod } from '../bookings/emuns'

import rooms from '../mock/rooms.json'

const parseRoomId = (roomIdFromRequest: any): number => {
  if (!isNumber(roomIdFromRequest)) {
    throw new Error('Room id must be a number')
  }
  const haveRoomId = rooms.find(room => room.id === roomIdFromRequest)
  if (haveRoomId == null) {
    throw new Error('Room ID not found')
  }
  return roomIdFromRequest
}

const parseRoomNumber = (roomNumberFromRequest: any): number => {
  if (!isNumber(roomNumberFromRequest)) {
    throw new Error('Room number must be a string')
  }
  const haveRoomNumber = rooms.find(room => room.roomNumber === roomNumberFromRequest)
  if (haveRoomNumber == null) {
    throw new Error('Room number not found')
  }
  return roomNumberFromRequest
}

const parseCheckIn = (checkInFromRequest: any): string => {
  if (!isString(checkInFromRequest) || !isDate(checkInFromRequest)) {
    throw new Error('Incorrect or missing date in checkIn field')
  }
  return checkInFromRequest
}

const validateDaysOfStay = (daysOfStayFromRequest: any): number => {
  if (!isNumber(daysOfStayFromRequest)) {
    throw new Error('Days of stay must be a typeof number')
  }
  if (daysOfStayFromRequest < 1) {
    throw new Error('Days of stay must be greater than 0')
  }
  return daysOfStayFromRequest
}

const parseBookingStatus = (bookingStatusFromRequest: any): BookingStatus => {
  if (!isString(bookingStatusFromRequest) || !isBookingStatus(bookingStatusFromRequest)) {
    throw new Error('Booking status incorrect or missing field')
  }
  return bookingStatusFromRequest
}

const parsePayMethod = (payMethodFromRequest: any): PayMethod => {
  if (!isString(payMethodFromRequest) || !isPayMethod(payMethodFromRequest)) {
    throw new Error('Pay method incorrect or missing field value')
  }
  return payMethodFromRequest
}

const parsePaymentAmount = (paymentAmountFromRequest: any): number => {
  if (!isNumber(paymentAmountFromRequest)) {
    throw new Error('Payment amount must be a typeof number')
  }
  if (paymentAmountFromRequest < 0) {
    throw new Error('Payment amount must be greater than 0')
  }
  return paymentAmountFromRequest
}

const parseClientName = (clientNameFromRequest: any): string => {
  if (!isString(clientNameFromRequest)) {
    throw new Error('Client name must be a typeof string')
  }
  return clientNameFromRequest
}

const parseClientPhone = (clientPhoneFromRequest: any): string => {
  if (!isString(clientPhoneFromRequest)) {
    throw new Error('Client phone must be a typeof string')
  }
  return clientPhoneFromRequest
}

const isString = (value: any): boolean => {
  return typeof value === 'string' || value instanceof String
}

const isNumber = (value: any): boolean => {
  return typeof value === 'number'
}

const isDate = (value: any): boolean => {
  return Boolean(Date.parse(value))
}

const isBookingStatus = (statusFromRequest: any): boolean => {
  return Object.values(BookingStatus).includes(statusFromRequest)
}

const isPayMethod = (payMethodFromRequest: any): boolean => {
  return Object.values(PayMethod).includes(payMethodFromRequest)
}

export const toNewBookingEntry = (object: any): BookingEntry => {
  const newEntry: BookingEntry = {
    roomId: parseRoomId(object.roomId),
    roomNumber: parseRoomNumber(object.roomNumber),
    checkIn: parseCheckIn(object.checkIn),
    daysOfStay: validateDaysOfStay(object.daysOfStay),
    bookingStatus: parseBookingStatus(object.bookingStatus),
    payMethod: parsePayMethod(object.payMethod),
    paymentAmount: parsePaymentAmount(object.paymentAmount),
    clientName: parseClientName(object.clientName),
    clientPhone: parseClientPhone(object.clientPhone)
  }

  return newEntry
}
