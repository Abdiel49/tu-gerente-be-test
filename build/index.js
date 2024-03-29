"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookingRoutes_1 = __importDefault(require("./bookings/bookingRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
/* This is a route handler. It is listening for a GET request to the /ping route. When it receives a
request, it will log a message to the console and send a response with the text 'pong'. */
app.get('/ping', (_req, res) => {
    console.log('someone pinged me!');
    res.send('pong');
});
app.use('/api/bookings', bookingRoutes_1.default);
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
