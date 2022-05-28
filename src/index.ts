import express from 'express';
import bookingsRoutes from './bookings/bookingRoutes';
import env from 'dotenv';

env.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

/* This is a route handler. It is listening for a GET request to the /ping route. When it receives a
request, it will log a message to the console and send a response with the text 'pong'. */
app.get('/ping', (_req, res) => {
  console.log('someone pinged me!');
  res.send('pong');
})

app.use('/api/bookings', bookingsRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
