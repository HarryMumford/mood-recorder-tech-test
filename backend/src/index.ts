import app from './application'
import { createConnection } from 'mysql';
import { config } from './db/config'

const connection = createConnection(config)

connection.connect((err) => {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

const port = process.env.PORT || 8000

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`)
})
