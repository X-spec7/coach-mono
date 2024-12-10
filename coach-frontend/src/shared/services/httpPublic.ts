import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

const baseUrl = process.env.BASE_URL

const httpPublic = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default httpPublic
