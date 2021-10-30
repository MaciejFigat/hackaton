// const express = require('express')
import express from 'express'
// const cors = require('cors')
import cors from 'cors'
// const rateLimit = require('express-rate-limit')
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
// require('dotenv').config()
import mainRoute from './routes/mainRoute'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

// Rate limiting for number of requests

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // time window = 5 min
  max: 3, // number of max requests within said window
})
app.use(limiter)
app.set('trust proxy', 1)

// Static folder - as is possible with Express

app.use(express.static('./backend/public'))

// Routes
app.use('/api', mainRoute)

// cors - enable
app.use(cors())

app.listen(PORT, () => console.log(`Server is on baby! Port ${PORT}`))
