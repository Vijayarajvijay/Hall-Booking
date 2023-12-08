import expres from 'express'

import roomRouter from './room.js'

const router = expres.Router();

router.use('/room',roomRouter)

export default router;