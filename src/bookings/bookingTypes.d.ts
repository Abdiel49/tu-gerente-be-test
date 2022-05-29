import { BookingStatus, PayMethod } from './enums'

// los detalles del cuarto reservado,
// los días de estadía,
// los datos de facturación e identificación del cliente,
// el monto pagado y el método de pago.

export interface RoomDetail {
  id: number
  roomNumber: number
}

export interface DaysOfStay {
  checkIn: String
  checkOut: String
  days: number
}

export interface BillingInfo {
  name: String
  email?: String
  phone?: String
}

export interface PaymentData {
  payMethod: PayMethod
  paymentAmount: number
}

export interface Booking {
  id: number
  roomId: number
  roomNumber: number
  checkIn: String
  daysOfStay: number
  bookingStatus: BookingStatus
  payMethod: PayMethod
  paymentAmount: number
  clientName: String
  clientPhone: String
}

export type BookingEntry = Omit<Booking, 'id'>
