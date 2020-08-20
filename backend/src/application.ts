import express from 'express';
import moodEventRoutes from './routes/moodEvent';

const app = express();

app.use('/', moodEventRoutes);

export default app;
