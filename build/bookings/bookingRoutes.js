"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookingsParsers_1 = require("../parsers/bookingsParsers");
const bookingServices = __importStar(require("./bookingServices"));
const route = express_1.default.Router();
route.get('/', (_req, res) => {
    const bookings = bookingServices.getBookings();
    res.send(bookings);
});
route.get('/:id', (req, res) => {
    const { id } = req.params;
    const booking = bookingServices.getBookingById(+id);
    if (booking == null) {
        res.status(404).send('Booking not found');
    }
    res.send(booking);
});
/* Creating a new booking entry. */
route.post('/', (req, res) => {
    try {
        const newBookingEntry = (0, bookingsParsers_1.toNewBookingEntry)(req.body);
        const booking = bookingServices.addBooking(newBookingEntry);
        res.json(booking);
    }
    catch (error) {
        const e = error;
        res.status(400).send(e.message);
    }
});
route.put('/:id', (req, res) => {
    const { id } = req.params;
    // console.log('body', req.body)
    if (Object.keys(req.body).length === 0) {
        res.status(400).send('Bad request, body is required');
    }
    else {
        try {
            const newBookingEntry = (0, bookingsParsers_1.toNewBookingEntry)(req.body);
            const booking = bookingServices.updateBooking(+id, newBookingEntry);
            res.json(booking);
        }
        catch (error) {
            const e = error;
            res.status(400).send(e.message);
        }
    }
});
route.delete('/:id', (req, res) => {
    const { id } = req.params;
    try {
        const bookingDeleted = bookingServices.deleteBooking(+id);
        res.json(bookingDeleted);
    }
    catch (error) {
        const e = error;
        res.status(400).send(e.message);
    }
});
exports.default = route;
