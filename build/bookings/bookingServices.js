"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooking = exports.updateBooking = exports.addBooking = exports.getBookingById = exports.getBookings = void 0;
const bookings_json_1 = __importDefault(require("../mock/bookings.json"));
let bookings = bookings_json_1.default;
const getBookings = () => {
    return bookings;
};
exports.getBookings = getBookings;
const getBookingById = (id) => {
    return bookings.find(booking => booking.id === id);
};
exports.getBookingById = getBookingById;
/**
 * It takes a new booking entry, generates an id for it, and then adds it to the list of bookings
 * @param {BookingEntry} newBookingEntry - BookingEntry
 * @returns A new booking object with the id of the last booking + 1
 */
const addBooking = (newBookingEntry) => {
    const id = Math.max(...bookings.map(b => b.id)) + 1;
    const newBooking = Object.assign(Object.assign({}, newBookingEntry), { id: id });
    bookings.push(newBooking);
    return newBooking;
};
exports.addBooking = addBooking;
/**
 * It takes an ID and a new booking entry, finds the booking with the given ID, replaces it with the
 * new booking entry, and returns the updated booking
 * @param {number} id - number - the id of the booking to update
 * @param {BookingEntry} newBookingEntry - BookingEntry
 * @returns Booking | undefined
 */
const updateBooking = (id, newBookingEntry) => {
    const booking = bookings.find(booking => booking.id === id);
    if (booking == null) {
        throw new Error('Booking ID not found');
    }
    const newBookings = bookings.filter(booking => booking.id !== id);
    const bookingUpdated = Object.assign(Object.assign({}, newBookingEntry), { id: id });
    newBookings.push(bookingUpdated);
    bookings = newBookings;
    return bookingUpdated;
};
exports.updateBooking = updateBooking;
/**
 * It returns the deleted booking if it exists, otherwise it throws an error
 * @param {number} id - number - The ID of the booking to delete
 * @returns Booking | undefined
 */
const deleteBooking = (id) => {
    const booking = bookings.find(booking => booking.id === id);
    if (booking == null) {
        throw new Error('Booking ID not found');
    }
    const newBookings = bookings.filter(booking => booking.id !== id);
    bookings = newBookings;
    return booking;
};
exports.deleteBooking = deleteBooking;
