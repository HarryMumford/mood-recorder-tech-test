import * as express from 'express';
import { Request, Response } from 'express';
import moodEventRoutes from './routes/mood';
import concernEvents from './routes/concernEvents';
import * as path from 'path';
import * as cors from 'cors';

const app = express();

app.use(cors());

app.use('/', moodEventRoutes);
app.use('/', concernEvents);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

export default app;
