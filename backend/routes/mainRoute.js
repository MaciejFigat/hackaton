const express = require('express')
const router = express.Router()
const needle = require('needle')

const API_KEY_VALUE = process.env.API_KEY_VALUE
const API_KEY_NAME = process.env.API_KEY_NAME
const API_URL = process.env.API_URL
const API_QUERY = process.env.API_QUERY

// needle returns a promis, hence it should be an async function
router.get('/', async (req, res) => {
  try {
    // console.log(url.parse(req.url, true).query)
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
    })
    // so I can use ${params} instead of ${API_KEY_NAME}=${API_KEY_VALUE}

    const apiResponse = await needle(
      'get',
      `${API_URL}current?${params}&query=Warsaw`
    )
    const data = apiResponse.body
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// `${API_URL}current?${params}&query=Warsaw`
// `${API_URL}current?access_key=${API_KEY_VALUE}${params}`
// http://api.weatherstack.com/current
//     ? access_key = API_KEY_VALUE
//     & query = New York

module.exports = router
