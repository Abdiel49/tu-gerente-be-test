# Prueba tecnica tuGerente

Prueba tecnica -> tuGerente

### Run Server

```bash
npm install
npm start
```

### Run development server

```bash
npm install
npm run dev
```

## Endpints

Base API endpoint `/api`  
### Bookings Endpoints

- hostserver: `localhost`
- port?: `3000`

#### `GET` `/api/bookings`

returns all Bookings data

example request:

`GET` `http://hostserver:port/api/bookings`

example return:

```sh
[
  {
    "id": 1,
    "roomId": 1,
    "roomNumber": 206,
    "roomCostByDay": 50,
    "checkIn": "2022-05-28",
    "daysOfStay": 3,
    "bookingStatus": "Pendiente",
    "clientName": "John Smith",
    "clientPhone": "591 78378299",
    "dni": "1256332025",
    "paymentAmount": 150,
    "payMethod": "Credit Card"
  },
  ...
]
```

#### `GET` `/api/bookings/:id`

returns a Bookings data from `id` if this exists or `status: 404` `Booking not found`

example request:

`GET` `http://hostserver:port/api/bookings/5`

example return:

```sh
{
  "id": 5,
  "roomId": 5,
  "roomNumber": 5,
  "roomCostByDay": 217,
  "checkIn": "2021/06/06",
  "daysOfStay": 3,
  "bookingStatus": "Pendiente",
  "clientName": "Bev Coffey",
  "clientPhone": "507-366-7312",
  "dni": "7908518-cbb",
  "paymentAmount": 5243,
  "payMethod": "Credit card"
}
```

#### `POST` `/api/bookings`

returns a Bookings data from `id` if this exists or `status: 404` `Booking not found`

example request:

`POST` `http://hostserver:port/api/bookings/5`

```js
  body: {
    "roomId": 1,
    "roomNumber": 1,
    "checkIn": "2022/01/17",
    "daysOfStay": 16,
    "bookingStatus": "Pendiente",
    "clientName": "Dona Maharey",
    "clientPhone": "487-243-6988",
    "dni": "8008120-cbb",
    "paymentAmount": 4818,
    "payMethod": "Tarjeta de crédito"
  }
```

Example return:

Added the new booking id in response: `"id": 16`.

```js
{
  "roomId": 1,
  "roomNumber": 1,
  "checkIn": "2022/01/17",
  "daysOfStay": 16,
  "bookingStatus": "Pendiente",
  "payMethod": "Tarjeta de crédito",
  "paymentAmount": 4818,
  "clientName": "Dona Maharey",
  "clientPhone": "487-243-6988",
  "id": 16
}
```

If the `POST` body have incorrect values or missing fields then return status code: `400 Bad request`

Example:

```js
{
  ...,
  "bookingStatus": "Pendient", // correct field value is "Pendiente" 
  ...
}
```

Return status code `400 Bad request` and message: `Booking status incorrect or missing field`

## Booking Types

#### Booking

```ts
interface Booking {
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
```

#### Booking Entry

Booking Entry omit the Booking `id` because this are assignet after.

```ts
type BookingEntry = Omit<Booking, 'id'>
```
 
#### Booking Status

```ts
enum BookingStatus {
  Pendiente = 'Pendiente',
  Pagando = 'Pagado',
  Eliminado = 'Eliminado'
}
```

#### PayMethod

```ts
enum PayMethod {
  PayPal = 'PayPal',
  CreditCard = 'Tarjeta de crédito',
  DebitCard = 'Tarjeta de débito',
  BankTransfer = 'Transferencia bancaria',
  Cash = 'Efectivo'
}
```




## Descripcion
🔴Utilizando Node.js y Express Framework, desarrollá los endpoints 
para el sistema de reservas de habitación de un hotel.

CONDICIONES:

✅ Las reservas pueden tener 3 estados: Pendiente, Pagado y Eliminado.

✅Los datos a almacenar para la reserva son: los detalles del 
cuarto reservado, los días de estadía, los datos de facturación 
e identificación del cliente, el monto pagado y el método de pago.

✅ Proponé los endpoints a crearse para tratar de cubrir el flujo 
normal de operación de reserva y explicar por qué.

Luego que tengas ya todo el código

✅Crear un repositorio para la entrega del código y en un readme 
del repositorio la justificación de los endpoints creados

tenemos 48 hrs para poder resolver el challenge⏳
