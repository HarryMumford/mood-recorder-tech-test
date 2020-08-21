import { Router } from 'express';
import { getMoodEvents, getMoods } from '../controllers/moodEvent';

const router = Router();

router.route('/moodEvents').get(getMoodEvents);
router.route('/moods').get(getMoods);

export default router;
