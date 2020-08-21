import { Request, Response } from 'express';
import { db } from '../db/connection';

export async function getMoodEvents(_req: Request, res: Response) {
  try {
    const sql =
      "SELECT payload FROM events WHERE care_recipient_id = 'df50cac5-293c-490d-a06c-ee26796f850d' && event_type = 'mood_observation'";
    const moodEvents = await db.query(sql);
    res.json(moodEvents[0]);
  } catch (e) {
    console.log(e);
  }
}
