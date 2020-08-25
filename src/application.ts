import express from 'express';
import moodEventRoutes from './routes/mood';
import concernEvents from './routes/concernEvents';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors());

app.use('/', moodEventRoutes);
app.use('/', concernEvents);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

export default app;
