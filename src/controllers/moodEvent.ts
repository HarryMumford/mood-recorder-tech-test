import { Request, Response } from 'express';
import { db } from '../db/connection';
import { moodCount } from '../services/moodCount';

export async function getMoods(_req: Request, res: Response) {
  try {
    const sql =
      "SELECT payload FROM events WHERE care_recipient_id = 'e3e2bff8-d318-4760-beea-841a75f00227' && event_type = 'mood_observation'";
    const moodEvents = await db.query(sql);
    const count = moodCount(moodEvents);
    res.json(count);
  } catch (e) {
    console.log(e);
  }
}
