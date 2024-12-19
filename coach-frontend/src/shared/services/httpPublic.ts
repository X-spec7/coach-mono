import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

// const baseUrl = process.env.BASE_URL

// console.log('base url: ', baseUrl)

const baseUrl = 'http://5.9.85.28:8080/api'

const httpPublic = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default httpPublic
