const express = require('express')
const router = express.Router()
const needle = require('needle')

const API_KEY_VALUE = process.env.API_KEY_VALUE
const API_URL = process.env.API_URL

// needle returns a promis, hence it should be an async function
router.get('/', async (req, res) => {
  try {
    const apiResponse = await needle(
      'get',
      `${API_URL}current?access_key=${API_KEY_VALUE}&query=Warsaw`
    )
    const data = apiResponse.body
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// http://api.weatherstack.com/current
//     ? access_key = API_KEY_VALUE
//     & query = New York

module.exports = router
