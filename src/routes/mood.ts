import { Router } from 'express';
import { getMoods } from '../controllers/moodEvent';

const router = Router();
router.route('/moods').get(getMoods);

export default router;
