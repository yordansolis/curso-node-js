import { Router } from 'express';
import { pool } from '../db.js';

import {ping} from '../controllers/index.controllers.js';


const router = Router();

// app.get('/ping', ping);


export default router;