import express from 'express';
import moodEventRoutes from './routes/moodEvent';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors());

app.use('/', moodEventRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

export default app;
