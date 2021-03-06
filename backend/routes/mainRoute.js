// to forward, whatever query parameters passed, to our server - to public url endpoint
import url from 'url'
import express from 'express'
import needle from 'needle'
import dotenv from 'dotenv'
import apicache from 'apicache'

const router = express.Router()

dotenv.config()

// env variables
const API_KEY_VALUE = process.env.API_KEY_VALUE
const API_KEY_NAME = process.env.API_KEY_NAME
const API_URL = process.env.API_URL
const API_QUERY = process.env.API_QUERY

//  initializing the cache - added cache in router.get as 2nd argument
let cache = apicache.middleware

// needle returns a promis, hence it should be an async function
router.get('/', cache('3 minutes'), async (req, res) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      // this adds the query parameters to public Api url endpoint
      ...url.parse(req.url, true).query,
    })
    // so I can use ${params} instead of ${API_KEY_NAME}=${API_KEY_VALUE}

    const apiResponse = await needle('get', `${API_URL}current?${params}`)

    const data = apiResponse.body

    // it will log the request to public API when im in development
    if (process.env.NODE_ENV !== 'production') {
      console.log(`REQUEST: ${API_URL}?${params}`)
    }

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error })
  }
})

export default router
