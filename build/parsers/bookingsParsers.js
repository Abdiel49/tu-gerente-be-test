"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewBookingEntry = void 0;
const enums_1 = require("../bookings/enums");
const rooms_json_1 = __importDefault(require("../mock/rooms.json"));
/**
 * If the roomIdFromRequest is not a number, throw an error. If the roomIdFromRequest is a number, but
 * not found in the rooms array, throw an error. If the roomIdFromRequest is a number and found in the
 * rooms array, return the roomIdFromRequest.
 * @param {any} roomIdFromRequest - The room ID that was passed in from the request.
 * @returns A function that takes a roomIdFromRequest and returns a number.
 */
const parseRoomId = (roomIdFromRequest) => {
    if (!isNumber(roomIdFromRequest)) {
        throw new Error('Room id must be a number');
    }
    const haveRoomId = rooms_json_1.default.find(room => room.id === roomIdFromRequest);
    if (haveRoomId == null) {
        throw new Error('Room ID not found');
    }
    return roomIdFromRequest;
};
/**
 * If the room number is not a number, throw an error. If the room number is not found, throw an error.
 * Otherwise, return the room number.
 * @param {any} roomNumberFromRequest - any
 * @returns A number
 */
const parseRoomNumber = (roomNumberFromRequest) => {
    if (!isNumber(roomNumberFromRequest)) {
        throw new Error('Room number must be a string');
    }
    const haveRoomNumber = rooms_json_1.default.find(room => room.roomNumber === roomNumberFromRequest);
    if (haveRoomNumber == null) {
        throw new Error('Room number not found');
    }
    return roomNumberFromRequest;
};
/**
 * If the checkInFromRequest is not a string or a date, throw an error.
 * @param {any} checkInFromRequest - any
 * @returns A string
 */
const parseCheckIn = (checkInFromRequest) => {
    if (!isString(checkInFromRequest) || !isDate(checkInFromRequest)) {
        throw new Error('Incorrect or missing date in checkIn field');
    }
    return checkInFromRequest;
};
/**
 * If the daysOfStayFromRequest is not a number, throw an error. If the daysOfStayFromRequest is less
 * than 1, throw an error. Otherwise, return the daysOfStayFromRequest.
 * @param {any} daysOfStayFromRequest - any - this is the parameter that is passed in from the request.
 * @returns A number
 */
const validateDaysOfStay = (daysOfStayFromRequest) => {
    if (!isNumber(daysOfStayFromRequest)) {
        throw new Error('Days of stay must be a typeof number');
    }
    if (daysOfStayFromRequest < 1) {
        throw new Error('Days of stay must be greater than 0');
    }
    return daysOfStayFromRequest;
};
/**
 * "If the booking status is not a string or is not a valid booking status, throw an error. Otherwise,
 * return the booking status."
 * The function is a bit more complicated than that, but that's the gist of it
 * @param {any} bookingStatusFromRequest - any
 * @returns A booking status
 */
const parseBookingStatus = (bookingStatusFromRequest) => {
    if (!isString(bookingStatusFromRequest) || !isBookingStatus(bookingStatusFromRequest)) {
        throw new Error('Booking status incorrect or missing field');
    }
    return bookingStatusFromRequest;
};
/**
 * If the payMethodFromRequest is not a string or is not a valid pay method, throw an error. Otherwise,
 * return the payMethodFromRequest.
 * @param {any} payMethodFromRequest - The value of the payMethod field from the request body.
 * @returns A PayMethod
 */
const parsePayMethod = (payMethodFromRequest) => {
    if (!isString(payMethodFromRequest) || !isPayMethod(payMethodFromRequest)) {
        throw new Error('Pay method incorrect or missing field value');
    }
    return payMethodFromRequest;
};
/**
 * "If the payment amount is not a number or is less than 0, throw an error, otherwise return the
 * payment amount."
 *
 * The above function is a good example of a function that is easy to test. We can write a test that
 * passes in a number and expects the same number to be returned. We can also write a test that passes
 * in a string and expects an error to be thrown
 * @param {any} paymentAmountFromRequest - any
 * @returns A function that takes a parameter of any type and returns a number.
 */
const parsePaymentAmount = (paymentAmountFromRequest) => {
    if (!isNumber(paymentAmountFromRequest)) {
        throw new Error('Payment amount must be a typeof number');
    }
    if (paymentAmountFromRequest < 0) {
        throw new Error('Payment amount must be greater than 0');
    }
    return paymentAmountFromRequest;
};
/**
 * If the clientNameFromRequest is not a string, throw an error, otherwise return the
 * clientNameFromRequest.
 * @param {any} clientNameFromRequest - This is the client name that was passed in from the request.
 * @returns A function that takes a clientNameFromRequest and returns a string.
 */
const parseClientName = (clientNameFromRequest) => {
    if (!isString(clientNameFromRequest)) {
        throw new Error('Client name must be a typeof string');
    }
    return clientNameFromRequest;
};
/**
 * If the clientPhoneFromRequest is not a string, throw an error, otherwise return the
 * clientPhoneFromRequest.
 * @param {any} clientPhoneFromRequest - any
 * @returns A string
 */
const parseClientPhone = (clientPhoneFromRequest) => {
    if (!isString(clientPhoneFromRequest)) {
        throw new Error('Client phone must be a typeof string');
    }
    return clientPhoneFromRequest;
};
const isString = (value) => {
    return typeof value === 'string' || value instanceof String;
};
const isNumber = (value) => {
    return typeof value === 'number';
};
const isDate = (value) => {
    return Boolean(Date.parse(value));
};
const isBookingStatus = (statusFromRequest) => {
    return Object.values(enums_1.BookingStatus).includes(statusFromRequest);
};
const isPayMethod = (payMethodFromRequest) => {
    return Object.values(enums_1.PayMethod).includes(payMethodFromRequest);
};
/**
 * It takes an object and returns a new booking entry
 * @param {any} object - any
 * @returns A new booking entry
 */
const toNewBookingEntry = (object) => {
    const newEntry = {
        roomId: parseRoomId(object.roomId),
        roomNumber: parseRoomNumber(object.roomNumber),
        checkIn: parseCheckIn(object.checkIn),
        daysOfStay: validateDaysOfStay(object.daysOfStay),
        bookingStatus: parseBookingStatus(object.bookingStatus),
        payMethod: parsePayMethod(object.payMethod),
        paymentAmount: parsePaymentAmount(object.paymentAmount),
        clientName: parseClientName(object.clientName),
        clientPhone: parseClientPhone(object.clientPhone)
    };
    return newEntry;
};
exports.toNewBookingEntry = toNewBookingEntry;
