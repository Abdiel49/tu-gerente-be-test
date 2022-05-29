"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayMethod = exports.BookingStatus = void 0;
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["Pendiente"] = "Pendiente";
    BookingStatus["Pagando"] = "Pagado";
    BookingStatus["Eliminado"] = "Eliminado";
})(BookingStatus = exports.BookingStatus || (exports.BookingStatus = {}));
var PayMethod;
(function (PayMethod) {
    PayMethod["PayPal"] = "PayPal";
    PayMethod["CreditCard"] = "Tarjeta de cr\u00E9dito";
    PayMethod["DebitCard"] = "Tarjeta de d\u00E9bito";
    PayMethod["BankTransfer"] = "Transferencia bancaria";
    PayMethod["Cash"] = "Efectivo";
})(PayMethod = exports.PayMethod || (exports.PayMethod = {}));
