import { Router } from 'express';
import { getMoodEvents } from '../controllers/moodEvent';

const router = Router();

router.route('/').get(getMoodEvents);

export default router;
