export type BookingState = "Pendiente" | "Pagado" | "Eliminado";

export type PayMethod = "PayPal" | "Tarjeta de crédito" | "Tarjeta de débito" | "Transferencia bancaria" | "Efectivo";

// los detalles del cuarto reservado, 
// los días de estadía, 
// los datos de facturación e identificación del cliente, 
// el monto pagado y el método de pago.

export interface RoomDetail {
  id: number,
  roomNumber: number,
}

export interface DaysOfStay {
  checkIn: String,
  checkOut: String,
  days: number,
}

export interface BillingInfo {
  name: String,
  lastName: String,
  email?: String,
  phone?: String,
  nit?: String,
  dni?: String,
}

export interface PaymentData {
  payMethod: PayMethod,
  paymentAmount: number,
}

export interface Booking {
  id: number,
  state: BookingState,
  roomDetail: RoomDetail,
  daysOfStay: DaysOfStay,
  billingInfo: BillingInfo,
  paymentData: PaymentData,
}
