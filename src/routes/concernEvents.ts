import { Router } from 'express';
import { getConcernEvents } from '../controllers/concernEvents';

const router = Router();
router.route('/concernEvents').get(getConcernEvents);

export default router;
