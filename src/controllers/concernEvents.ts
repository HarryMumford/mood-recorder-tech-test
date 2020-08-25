import { Request, Response } from 'express';
import { db } from '../db/connection';
import { formatConcernEvents } from '../services/formatConcernEvents';

export async function getConcernEvents(_req: Request, res: Response) {
  try {
    const sql =
      "SELECT payload FROM events WHERE care_recipient_id = 'e3e2bff8-d318-4760-beea-841a75f00227' AND (event_type = 'concern_raised')";
    const concernEvents = await db.query(sql);
    res.json(formatConcernEvents(concernEvents));
  } catch (e) {
    console.log(e);
  }
}
