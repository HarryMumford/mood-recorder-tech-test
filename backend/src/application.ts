import express from 'express';
import moodEventRoutes from './routes/moodEvent';

const app = express();

app.use('/', moodEventRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

export default app;
