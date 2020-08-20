import express from "express";
import { pingController } from "./routers/ping";
import { moodEventRouter } from './routers/moodEvent'

const app = express();

app.use(pingController);
app.use("/", moodEventRouter);

export default app;
