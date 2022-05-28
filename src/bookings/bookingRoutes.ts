import express from 'express'

const route = express.Router()

route.get('/', (_req, res) => {
  console.log('get bookings!')
  res.send('get bookings!')
})

route.post('/', (_req, res) => {
  console.log('post bookings!')
  res.send('pong')
})

export default route
