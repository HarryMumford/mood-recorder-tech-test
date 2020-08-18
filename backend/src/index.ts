import app from './application'
import { createConnection } from 'mysql'
import * as dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 8000

const connection = createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'birdietest'
})

connection.connect((err) => {
  if (err) throw err
  console.log('Connected!')
})

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`)
})
